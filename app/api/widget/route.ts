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

  const systemPrompt = `
You are Renvue's AI Support Assistant. Your purpose is to provide accurate information about Renvue's platform and services.

# RULES:
1. For ANY off-topic questions (weather, jokes, other companies, etc.), respond EXACTLY with:
   "I'm sorry, I can only assist with questions about Renvue's platform and services. <a href='https://renvue.vercel.app/contact' target='_blank' class='text-blue-500 underline'>Contact support</a> for other inquiries."
2. For integration questions, respond EXACTLY with:
   "Yes, you can integrate Renvue with your website using our API. Documentation is available at api.renvue.com/docs. Authentication uses OAuth 2.0 with API keys."
3. For all other platform questions, use ONLY the following information:

# RENVUE PLATFORM INFORMATION:

## ESCROW SERVICES:
- "Renvue offers secure escrow services for transactions between buyers and sellers."
- "Our escrow process holds funds securely until all transaction conditions are met."
- "Escrow fees are 1% of transaction amount with a $10 minimum."
- "Standard escrow duration is 30 days, extendable upon request."

## API FEATURES:
- "Renvue's API allows integration with escrow services via REST endpoints."
- "API documentation is available at api.renvue.com/docs."
- "Authentication uses OAuth 2.0 with API keys."
- "Webhooks are available for transaction status updates."

## PLATFORM FEATURES:
- "Dashboard provides real-time transaction tracking."
- "Supports multiple payment methods including credit cards and bank transfers."
- "Automated compliance checks on all transactions."
- "Dispute resolution handled by our mediation team."

## ACCOUNT MANAGEMENT:
- "Business verification required for account activation."
- "Two-factor authentication available for security."
- "Monthly statements available in PDF and CSV formats."

# RESPONSE GUIDELINES:
1. Keep answers concise and factual.
2. If unsure, direct users to support@renvue.com.
3. Never speculate or provide information not in this prompt.
`;

  try {
    const aiResponse = await myProvider.languageModel('chat-model').doGenerate({
      prompt: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      inputFormat: 'messages',
      mode: { type: 'regular' },
      maxTokens: 256,
      temperature: 0.2,
    });

    // Enforce the off-topic response format
    let responseText = aiResponse.text?.trim() || '';
    // Special handling for integration questions
    if (message.toLowerCase().includes('integrate') && 
      message.toLowerCase().includes('website')) {
      responseText = "Yes, you can integrate Renvue with your website using our API. Documentation is available at api.renvue.com/docs. Authentication uses OAuth 2.0 with API keys.";
    }
    // Validate other responses
    else if (!isValidResponse(responseText)) {
      responseText = "I'm sorry, I can only assist with questions about Renvue's platform and services. <a href='https://renvue.vercel.app/contact' target='_blank' class='text-blue-500 underline'>Contact support</a> for other inquiries.";
    }

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(
          encoder.encode(
            'data: ' + JSON.stringify({ type: 'text-delta', textDelta: responseText }) + '\n'
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
        ...corsHeaders
      }
    });
  } catch (error) {
    console.error('AI request failed:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process request' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
}

// Helper function to validate responses
function isValidResponse(text: string): boolean {
  const requiredIntegrationResponse = "Yes, you can integrate Renvue with your website using our API. Documentation is available at api.renvue.com/docs. Authentication uses OAuth 2.0 with API keys.";
  const standardErrorMessage = "I'm sorry, I can only assist with questions about Renvue's platform and services. <a href='https://renvue.vercel.app/contact' target='_blank' class='text-blue-500 underline'>Contact support</a> for other inquiries.";
  // Check for exact match on integration response
  if (text.includes(requiredIntegrationResponse) ||
    text.includes(standardErrorMessage)) {
    return true;
  }
  const allowedPhrases = [
    "Renvue",
    "escrow",
    "API",
    "platform",
    "dashboard",
    "transaction",
    "account",
    "documentation",
    "integrate",
    "authentication",
    "Oauth",
    "webhook",
    "payment"
  ];


  // Check if response contains any allowed phrases
  return allowedPhrases.some(phrase =>
    text.toLowerCase().includes(phrase.toLowerCase())
  );
}