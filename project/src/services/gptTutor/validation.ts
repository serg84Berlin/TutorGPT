import { TutorPrompt } from './types';
import { SUPPORTED_LANGUAGES, SUPPORTED_PLATFORMS, EXPERIENCE_LEVELS } from './config';

export function validateTutorPrompt(prompt: TutorPrompt): void {
  if (!prompt.topic || typeof prompt.topic !== 'string') {
    throw new Error('Topic is required and must be a string');
  }

  if (prompt.language && !SUPPORTED_LANGUAGES.includes(prompt.language as any)) {
    throw new Error(`Language must be one of: ${SUPPORTED_LANGUAGES.join(', ')}`);
  }

  if (prompt.platform && !SUPPORTED_PLATFORMS.includes(prompt.platform as any)) {
    throw new Error(`Platform must be one of: ${SUPPORTED_PLATFORMS.join(', ')}`);
  }

  if (prompt.experienceLevel && !EXPERIENCE_LEVELS.includes(prompt.experienceLevel as any)) {
    throw new Error(`Experience level must be one of: ${EXPERIENCE_LEVELS.join(', ')}`);
  }
}