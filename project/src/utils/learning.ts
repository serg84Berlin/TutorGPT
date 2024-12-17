import { LearningGoal } from '../types/learning';
import { Category } from '../constants/categories';
import { Platform } from '../constants/platforms';

export function filterGoalsByCategory(goals: LearningGoal[], category: Category): LearningGoal[] {
  return goals.filter(goal => goal.category === category);
}

export function filterGoalsByPlatform(goals: LearningGoal[], platform: Platform): LearningGoal[] {
  return goals.filter(goal => goal.platform === platform);
}

export function groupGoalsByCategory(goals: LearningGoal[]): Record<Category, LearningGoal[]> {
  return goals.reduce((acc, goal) => {
    if (!acc[goal.category]) {
      acc[goal.category] = [];
    }
    acc[goal.category].push(goal);
    return acc;
  }, {} as Record<Category, LearningGoal[]>);
}