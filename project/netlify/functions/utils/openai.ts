import { ChatCompletionMessage } from './types';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

export async function createChatCompletion(messages: ChatCompletionMessage[]) {
  const response = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.statusText}`);
  }

  return response.json();
}