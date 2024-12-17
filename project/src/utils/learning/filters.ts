import { LearningGoal } from '../../types/learning';
import { Category } from '../../constants/categories';
import { Platform } from '../../constants/platforms';
import { ExperienceLevel } from '../../types/learning';

export function filterGoalsByCategory(goals: LearningGoal[], category: Category): LearningGoal[] {
  return goals.filter(goal => goal.category === category);
}

export function filterGoalsByPlatform(goals: LearningGoal[], platform: Platform): LearningGoal[] {
  return goals.filter(goal => goal.platform === platform);
}

export function filterGoalsByExperience(goals: LearningGoal[], level: ExperienceLevel): LearningGoal[] {
  // This assumes you add an experienceLevel field to LearningGoal
  return goals.filter(goal => goal.experienceLevel === level);
}

export function searchGoals(goals: LearningGoal[], searchTerm: string): LearningGoal[] {
  const term = searchTerm.toLowerCase();
  return goals.filter(goal => 
    goal.label.toLowerCase().includes(term) || 
    goal.value.toLowerCase().includes(term)
  );
}