import { useMemo, useState, useCallback } from 'react';
import { LearningGoal } from '../types/learning';
import { Category } from '../constants/categories';
import { Platform } from '../constants/platforms';
import { LEARNING_GOALS } from '../constants/learningGoals';
import { filterGoalsByCategory, filterGoalsByPlatform, searchGoals } from '../utils/learning/filters';
import { groupGoalsByCategory, groupGoalsByPlatform } from '../utils/learning/grouping';
import { sortGoalsByLabel, sortGoalsByPopularity } from '../utils/learning/sorting';

export function useLearningGoals() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const allGoals = useMemo(() => LEARNING_GOALS, []);

  const filteredGoals = useMemo(() => {
    let result = [...allGoals];

    if (searchTerm) {
      result = searchGoals(result, searchTerm);
    }

    if (selectedCategory) {
      result = filterGoalsByCategory(result, selectedCategory);
    }

    if (selectedPlatform) {
      result = filterGoalsByPlatform(result, selectedPlatform);
    }

    return result;
  }, [allGoals, searchTerm, selectedCategory, selectedPlatform]);

  const groupedByCategory = useMemo(() => 
    groupGoalsByCategory(filteredGoals), [filteredGoals]);

  const groupedByPlatform = useMemo(() => 
    groupGoalsByPlatform(filteredGoals), [filteredGoals]);

  const sortedGoals = useMemo(() => 
    sortGoalsByLabel(filteredGoals), [filteredGoals]);

  const findGoalById = useCallback((id: string) => 
    allGoals.find(goal => goal.id === id), [allGoals]);

  return {
    allGoals,
    filteredGoals,
    sortedGoals,
    groupedByCategory,
    groupedByPlatform,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedPlatform,
    setSelectedPlatform,
    findGoalById,
  };
}