import { NextRequest, NextResponse } from 'next/server';
import { generateUUID } from '../../lib/utils';
import { saveChat, saveMessages } from '../../lib/db/queries';
import { streamText, smoothStream, createDataStream } from 'ai';
import { myProvider } from '../../lib/ai/providers';
import { systemPrompt } from '../../lib/ai/prompts';

// Add CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle OPTIONS request
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const { message, chatId: existingChatId } = await request.json();
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400, headers: corsHeaders }
      );
    }

    const chatId = existingChatId || generateUUID();

    // Create a new chat if it doesn't exist
    if (!existingChatId) {
      try {
        await saveChat({
          id: chatId,
          userId: 'widget', // Special user ID for widget chats
          title: message.slice(0, 50) + (message.length > 50 ? '...' : ''),
        });
      } catch (error) {
        console.error('Error creating chat:', error);
        // Continue even if chat creation fails
      }
    }

    // Save the user message
    try {
      await saveMessages({
        messages: [
          {
            id: generateUUID(),
            chatId,
            role: 'user',
            parts: [{ type: 'text', text: message }],
            attachments: [],
            createdAt: new Date(),
          },
        ],
      });
    } catch (error) {
      console.error('Error saving user message:', error);
      // Continue even if message saving fails
    }

    // Create the streaming response
    const stream = createDataStream({
      execute: async (dataStream) => {
        try {
          const result = streamText({
            model: myProvider.languageModel('chat-model'),
            system: systemPrompt({ 
              selectedChatModel: 'chat-model', 
              requestHints: {
                latitude: '0',
                longitude: '0',
                city: 'Unknown',
                country: 'Unknown'
              }
            }),
            messages: [
              {
                role: 'user',
                content: message,
              },
            ],
            maxSteps: 5,
            experimental_transform: smoothStream({ chunking: 'word' }),
          });

          // Stream the response
          let fullResponse = '';
          for await (const chunk of result.textStream) {
            fullResponse += chunk;
            dataStream.writeData({
              type: 'text-delta',
              textDelta: chunk,
            });
          }

          // Save the assistant's response
          try {
            await saveMessages({
              messages: [
                {
                  id: generateUUID(),
                  chatId,
                  role: 'assistant',
                  parts: [{ type: 'text', text: fullResponse }],
                  attachments: [],
                  createdAt: new Date(),
                },
              ],
            });
          } catch (error) {
            console.error('Error saving assistant message:', error);
          }

          dataStream.writeData({
            type: 'finish',
            chatId: chatId,
          });

        } catch (error) {
          console.error('Streaming error:', error);
          dataStream.writeData({
            type: 'error',
            error: 'Failed to generate response',
          });
        }
      },
    });

    return new Response(stream, { 
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      }
    });

  } catch (error) {
    console.error('Widget API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}