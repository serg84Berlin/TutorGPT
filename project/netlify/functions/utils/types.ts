export interface ChatCompletionMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface TutorRequest {
  topic: string;
  language?: string;
  platform?: 'microsoft' | 'google' | 'salesforce';
}

export interface TutorResponse {
  steps: string[];
  error?: string;
}