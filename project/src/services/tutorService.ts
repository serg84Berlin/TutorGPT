import { TutorRequest, TutorResponse } from '../types/tutor';

const API_URL = '/.netlify/functions/gpt-tutor';

export async function fetchTutorResponse(request: TutorRequest): Promise<TutorResponse> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch tutorial');
  }

  return response.json();
}