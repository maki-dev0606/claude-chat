import { anthropic } from '@ai-sdk/anthropic';
import { streamText, UIMessage } from 'ai';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const modelMessages = messages.map((m) => ({
    role: m.role as 'user' | 'assistant',
    content: m.parts
      .filter((p) => p.type === 'text')
      .map((p) => ('text' in p ? p.text : ''))
      .join(''),
  }));

  const result = streamText({
    model: anthropic('claude-sonnet-4-6'),
    messages: modelMessages,
  });

  return result.toUIMessageStreamResponse();
}
