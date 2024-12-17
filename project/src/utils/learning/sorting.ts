import { LearningGoal } from '../../types/learning';

export function sortGoalsByLabel(goals: LearningGoal[], direction: 'asc' | 'desc' = 'asc'): LearningGoal[] {
  return [...goals].sort((a, b) => {
    const comparison = a.label.localeCompare(b.label);
    return direction === 'asc' ? comparison : -comparison;
  });
}

export function sortGoalsByPopularity(goals: LearningGoal[], popularityScores: Record<string, number>): LearningGoal[] {
  return [...goals].sort((a, b) => 
    (popularityScores[b.id] || 0) - (popularityScores[a.id] || 0)
  );
}