import {

  type LanguageModelV1CallOptions,
  type LanguageModelV1FinishReason, // Import from ai package
  type LanguageModelV1LogProbs,
  type LanguageModelV1FunctionToolCall,
  type LanguageModelV1CallWarning,
  type LanguageModelV1ProviderMetadata,
  type LanguageModelV1Source,
} from '@ai-sdk/provider';

import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { xai } from '@ai-sdk/xai';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';
import OpenAI from 'openai';

const useGroq = process.env.USE_GROQ === 'true';
const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
});

// Map Groq finish_reason to ai-sdk finishReason
function mapFinishReason(
  reason: string | undefined | null
): LanguageModelV1FinishReason {
  switch (reason) {
    case 'stop':
      return 'stop';
    case 'length':
      return 'length';
    case 'content_filter':
      return 'content-filter';
    // case 'function_call':
    //   return 'function-call';
    case 'tool_calls':
      return 'tool-calls';
    default:
      return 'stop';
  }
}

async function generateWithGroq(options: LanguageModelV1CallOptions) {
  try {
    const userPrompt = typeof options.prompt === 'string'
      ? options.prompt
      : Array.isArray(options.prompt)
        ? options.prompt
          .filter(m => m.role === 'user' && typeof m.content === 'string')
          .map(m => m.content as string)
          .join('\n')
        : '';

    const completion = await groq.chat.completions.create({
      model: 'llama3-8b-8192',
      messages: [{ role: 'user', content: userPrompt }],
      temperature: options.temperature ?? 0.7,
      max_tokens: options.maxTokens ?? 1024,
    });

    if (!completion.choices?.[0]?.message) {
      throw new Error('Invalid completion response from Groq');
    }

    return {
      text: completion.choices[0].message.content || undefined,
      finishReason: mapFinishReason(completion.choices[0].finish_reason),
      usage: {
        promptTokens: completion.usage?.prompt_tokens ?? 0,
        completionTokens: completion.usage?.completion_tokens ?? 0,
      },
      rawCall: {
        rawPrompt: options.prompt,
        rawSettings: {
          model: 'llama3-8b-8192',
          temperature: options.temperature,
          max_tokens: options.maxTokens,
        },
      },
      rawResponse: {
        body: completion,
      },
      // Explicitly set all optional fields to undefined
      reasoning: undefined,
      files: undefined,
      toolCalls: undefined,
      request: undefined,
      response: undefined,
      warnings: undefined,
      providerMetadata: undefined,
      sources: undefined,
      logprobs: undefined,
    };
  } catch (error) {
    console.error('Groq API error:', error);
    throw new Error(`Generation failed: ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function streamWithGroq(options: LanguageModelV1CallOptions) {
  const userPrompt = typeof options.prompt === 'string'
    ? options.prompt
    : Array.isArray(options.prompt)
      ? options.prompt
        .filter(m => m.role === 'user' && typeof m.content === 'string')
        .map(m => m.content as string)
        .join('\n')
      : '';

  // Create the stream
  const stream = await groq.chat.completions.create({
    model: 'llama3-8b-8192',
    messages: [{ role: 'user', content: userPrompt }],
    temperature: options.temperature ?? 0.7,
    max_tokens: options.maxTokens ?? 1024,
    stream: true,
  });

  // Track usage
  let usage = {
    promptTokens: 0,
    completionTokens: 0,
  };

  // Return a ReadableStream of ai-sdk events
  return {
    stream: new ReadableStream({
      async start(controller) {
        let finishReason: LanguageModelV1FinishReason = 'stop';

        for await (const chunk of stream) {
          if (chunk.usage) {
            usage = {
              promptTokens: chunk.usage.prompt_tokens ?? 0,
              completionTokens: chunk.usage.completion_tokens ?? 0,
            };
          }

          const choice = chunk.choices?.[0];
          if (!choice) continue;

          const delta = choice.delta?.content;
          if (delta) {
            controller.enqueue({ type: 'text-delta', textDelta: delta });
          }

          if (choice.finish_reason) {
            finishReason = mapFinishReason(choice.finish_reason);
          }
        }

        // Send finish event
        controller.enqueue({
          type: 'finish',
          finishReason,
          usage,
          logprobs: undefined,
        });

        controller.close();
      }
    }),
    rawCall: {
      rawPrompt: options.prompt,
      rawSettings: {
        model: 'llama3-8b-8192',
        temperature: options.temperature,
        max_tokens: options.maxTokens,
      },
    },
  };
}

export const myProvider = isTestEnvironment
  ? customProvider({
    languageModels: {
      'chat-model': chatModel,
      'chat-model-reasoning': reasoningModel,
      'title-model': titleModel,
      'artifact-model': artifactModel,
    },
  })
  : useGroq
    ? customProvider({
      languageModels: {
        'chat-model': {
          doGenerate: generateWithGroq,
          doStream: streamWithGroq,
          specificationVersion: 'v1',
          provider: 'groq',
          modelId: 'llama3-8b-8192',
          defaultObjectGenerationMode: undefined,
        },

      },
    })
    : customProvider({
      languageModels: {
        'chat-model': xai('grok-2-vision-1212'),
        'chat-model-reasoning': wrapLanguageModel({
          model: xai('grok-3-mini-beta'),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': xai('grok-2-1212'),
        'artifact-model': xai('grok-2-1212'),
      },
      imageModels: {
        'small-model': xai.image('grok-2-image'),
      },
    });