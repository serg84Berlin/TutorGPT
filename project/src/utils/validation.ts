import { TutorRequest } from '../types/tutor';

export function validateTutorRequest(request: TutorRequest): void {
  if (!request.topic) {
    throw new Error('Topic is required');
  }

  if (request.platform && !['microsoft', 'google', 'salesforce'].includes(request.platform)) {
    throw new Error('Invalid platform specified');
  }

  if (request.language && !['en', 'de', 'ru', 'uk'].includes(request.language)) {
    throw new Error('Invalid language specified');
  }
}