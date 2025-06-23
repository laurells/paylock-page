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

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const aiResponse = await myProvider.languageModel('chat-model').doGenerate({
   prompt: message,
  inputFormat: 'prompt',
  mode: { type: 'regular' },
  maxTokens: 256,
  temperature: 0.7,
  });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(
        encoder.encode(
          'data: ' + JSON.stringify({ type: 'text-delta', textDelta: aiResponse.text || 'Sorry, no response.' }) + '\n'
        )
      );
      controller.close();
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    }
  });
}