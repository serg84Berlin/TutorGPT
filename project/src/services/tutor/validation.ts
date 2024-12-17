import { TutorPrompt } from '../../types/tutor';
import { SUPPORTED_FEATURES } from './config';

export function validateTutorPrompt(prompt: TutorPrompt): void {
  if (!prompt.topic?.trim()) {
    throw new Error('Topic is required and cannot be empty');
  }

  if (prompt.platform && !SUPPORTED_FEATURES.platforms.includes(prompt.platform)) {
    throw new Error(`Platform must be one of: ${SUPPORTED_FEATURES.platforms.join(', ')}`);
  }

  if (prompt.language && !SUPPORTED_FEATURES.languages.includes(prompt.language as any)) {
    throw new Error(`Language must be one of: ${SUPPORTED_FEATURES.languages.join(', ')}`);
  }

  if (prompt.experienceLevel && !SUPPORTED_FEATURES.experienceLevels.includes(prompt.experienceLevel)) {
    throw new Error(`Experience level must be one of: ${SUPPORTED_FEATURES.experienceLevels.join(', ')}`);
  }
}