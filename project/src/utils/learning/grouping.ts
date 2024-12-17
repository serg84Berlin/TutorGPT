import { LearningGoal } from '../../types/learning';
import { Category } from '../../constants/categories';
import { Platform } from '../../constants/platforms';

export function groupGoalsByCategory(goals: LearningGoal[]): Record<Category, LearningGoal[]> {
  return goals.reduce((acc, goal) => {
    if (!acc[goal.category]) {
      acc[goal.category] = [];
    }
    acc[goal.category].push(goal);
    return acc;
  }, {} as Record<Category, LearningGoal[]>);
}

export function groupGoalsByPlatform(goals: LearningGoal[]): Record<Platform, LearningGoal[]> {
  return goals.reduce((acc, goal) => {
    if (!acc[goal.platform]) {
      acc[goal.platform] = [];
    }
    acc[goal.platform].push(goal);
    return acc;
  }, {} as Record<Platform, LearningGoal[]>);
}