import { Handler } from '@netlify/functions';
import { createChatCompletion } from './utils/openai';
import { validateTutorRequest } from './utils/validation';
import { createTutorPrompt, createSystemPrompt } from './utils/prompts';
import { createSuccessResponse, createErrorResponse } from './utils/response';

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return createErrorResponse(new Error('Method not allowed'));
  }

  try {
    const request = validateTutorRequest(event.body || '{}');
    
    const completion = await createChatCompletion([
      { role: 'system', content: createSystemPrompt() },
      { role: 'user', content: createTutorPrompt(request) },
    ]);

    const steps = completion.choices[0].message.content
      .split('\n')
      .filter(step => step.trim())
      .map(step => step.replace(/^\d+\.\s*/, '').trim());

    return createSuccessResponse(steps);
  } catch (error) {
    return createErrorResponse(error instanceof Error ? error : new Error('Unknown error'));
  }
};

export { handler };