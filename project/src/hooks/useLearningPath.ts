import { useState } from 'react';
import { LEARNING_PATHS } from '../constants/learningPaths';
import { UserPreferences, LearningPath } from '../types/learning';

export function useLearningPath() {
  const [preferences, setPreferences] = useState<UserPreferences>({
    goal: '',
    experience: 'beginner',
    timeCommitment: '',
  });

  const getLearningPath = (): LearningPath | null => {
    if (!preferences.goal || !preferences.experience) {
      return null;
    }

    return LEARNING_PATHS[preferences.goal]?.[preferences.experience] || null;
  };

  const updatePreferences = (field: keyof UserPreferences, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return {
    preferences,
    updatePreferences,
    getLearningPath,
  };
}