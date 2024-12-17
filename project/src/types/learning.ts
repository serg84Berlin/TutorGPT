import { Category } from '../constants/categories';
import { Platform } from '../constants/platforms';

export interface LearningGoal {
  id: string;
  label: string;
  value: string;
  category: Category;
  platform: Platform;
}

export interface LearningPath {
  url: string;
  title: string;
  description: string;
  platform: Platform;
  category: Category;
}

export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

export interface UserPreferences {
  goal: string;
  experience: ExperienceLevel;
  timeCommitment: string;
}