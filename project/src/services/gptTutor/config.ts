import { TutorConfig } from './types';

export const DEFAULT_CONFIG: TutorConfig = {
  model: 'gpt-4',
  temperature: 0.7,
  maxTokens: 2048,
};

export const SUPPORTED_LANGUAGES = ['en', 'de', 'ru', 'uk'] as const;

export const SUPPORTED_PLATFORMS = [
  'microsoft',
  'google',
  'salesforce',
  'atlassian',
] as const;

export const EXPERIENCE_LEVELS = [
  'beginner',
  'intermediate',
  'advanced',
] as const;