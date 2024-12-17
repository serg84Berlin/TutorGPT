import { TutorResponse } from './types';

export function createSuccessResponse(steps: string[]): {
  statusCode: number;
  body: string;
} {
  return {
    statusCode: 200,
    body: JSON.stringify({ steps }),
  };
}

export function createErrorResponse(error: Error): {
  statusCode: number;
  body: string;
} {
  return {
    statusCode: error.message.includes('Invalid') ? 400 : 500,
    body: JSON.stringify({ error: error.message }),
  };
}