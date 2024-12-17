import { Platform } from '../constants/platforms';
import { ExperienceLevel } from './learning';

export interface TutorConfig {
  model: string;
  temperature: number;
  maxTokens: number;
}

export interface TutorPrompt {
  topic: string;
  language?: string;
  platform?: Platform;
  experienceLevel?: ExperienceLevel;
}

export interface TutorResponse {
  steps: string[];
  resources?: string[];
  error?: string;
}

export interface TutorState extends TutorResponse {
  isLoading: boolean;
}

export type TutorRequestStatus = 'idle' | 'loading' | 'success' | 'error';