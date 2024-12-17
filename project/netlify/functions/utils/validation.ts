import { TutorRequest } from './types';

export function validateTutorRequest(body: string): TutorRequest {
  if (!body) {
    throw new Error('Request body is required');
  }

  const request = JSON.parse(body);

  if (!request.topic) {
    throw new Error('Topic is required');
  }

  if (request.platform && !['microsoft', 'google', 'salesforce'].includes(request.platform)) {
    throw new Error('Invalid platform specified');
  }

  return request;
}