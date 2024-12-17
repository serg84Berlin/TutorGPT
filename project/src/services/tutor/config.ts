import { TutorConfig } from '../../types/tutor';
import { SUPPORTED_LANGUAGES } from '../../utils/constants';
import { PLATFORMS } from '../../constants/platforms';
import { EXPERIENCE_LEVELS } from '../../utils/constants';

export const TUTOR_CONFIG: TutorConfig = {
  model: 'gpt-4',
  temperature: 0.7,
  maxTokens: 2048,
};

export const API_ENDPOINTS = {
  TUTOR: '/.netlify/functions/gpt-tutor',
} as const;

export const SUPPORTED_FEATURES = {
  languages: SUPPORTED_LANGUAGES,
  platforms: Object.values(PLATFORMS),
  experienceLevels: EXPERIENCE_LEVELS,
} as const;