import { TutorPrompt, TutorResponse, TutorConfig } from '../../types/tutor';
import { TUTOR_CONFIG, API_ENDPOINTS } from './config';
import { createSystemPrompt, createTutorPrompt } from './prompts';
import { validateTutorPrompt } from './validation';

export async function generateTutorial(
  prompt: TutorPrompt,
  config: Partial<TutorConfig> = {}
): Promise<TutorResponse> {
  try {
    validateTutorPrompt(prompt);

    const mergedConfig = { ...TUTOR_CONFIG, ...config };
    const response = await fetch(API_ENDPOINTS.TUTOR, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: createTutorPrompt(prompt),
        systemPrompt: createSystemPrompt(),
        config: mergedConfig,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    return {
      steps: [],
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
}