export interface TutorPrompt {
  topic: string;
  language?: string;
  platform?: 'microsoft' | 'google' | 'salesforce' | 'atlassian';
  experienceLevel?: 'beginner' | 'intermediate' | 'advanced';
}

export interface TutorResponse {
  steps: string[];
  resources?: string[];
  error?: string;
}

export interface TutorConfig {
  model: string;
  temperature: number;
  maxTokens: number;
}

export type SupportedPlatform = 'microsoft' | 'google' | 'salesforce' | 'atlassian';