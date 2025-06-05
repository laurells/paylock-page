import { NextResponse } from 'next/server';
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

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    const chatId = generateUUID();

    // Create a new chat
    await saveChat({
      id: chatId,
      userId: 'widget', // Special user ID for widget chats
      title: 'Widget Chat',
     // visibility: 'private',
    });

    // Save the user message
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

    // Stream the response
    const stream = createDataStream({
      execute: (dataStream) => {
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

        result.consumeStream();
        result.mergeIntoDataStream(dataStream);
      },
    });

    return new Response(stream, { headers: corsHeaders });
  } catch (error) {
    console.error('Widget error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
} 