import { LearningGoal, UserPreferences } from '../../types/learning';
import { CATEGORIES } from '../../constants/categories';
import { PLATFORMS } from '../../constants/platforms';
import { EXPERIENCE_LEVELS } from '../../utils/constants';

export function validateLearningGoal(goal: Partial<LearningGoal>): void {
  if (!goal.id?.trim()) {
    throw new Error('Goal ID is required');
  }

  if (!goal.label?.trim()) {
    throw new Error('Goal label is required');
  }

  if (!goal.value?.trim()) {
    throw new Error('Goal value is required');
  }

  if (!Object.values(CATEGORIES).includes(goal.category)) {
    throw new Error(`Invalid category. Must be one of: ${Object.values(CATEGORIES).join(', ')}`);
  }

  if (!Object.values(PLATFORMS).includes(goal.platform)) {
    throw new Error(`Invalid platform. Must be one of: ${Object.values(PLATFORMS).join(', ')}`);
  }
}

export function validateUserPreferences(preferences: Partial<UserPreferences>): void {
  if (!preferences.goal?.trim()) {
    throw new Error('Learning goal is required');
  }

  if (!EXPERIENCE_LEVELS.includes(preferences.experience)) {
    throw new Error(`Invalid experience level. Must be one of: ${EXPERIENCE_LEVELS.join(', ')}`);
  }

  if (!preferences.timeCommitment?.trim()) {
    throw new Error('Time commitment is required');
  }
}