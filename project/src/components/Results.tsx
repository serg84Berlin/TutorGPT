import React from 'react';
import { BookOpen, Clock, Trophy } from 'lucide-react';

interface ResultsProps {
  answers: {
    goal: string;
    experience: string;
    timeCommitment: string;
  };
  onReset: () => void;
}

export function Results({ answers, onReset }: ResultsProps) {
  const getLearningPath = () => {
    // This would be replaced with actual AI recommendations
    const paths = {
      azure: {
        beginner: 'https://learn.microsoft.com/training/paths/azure-fundamentals/',
        intermediate: 'https://learn.microsoft.com/training/paths/architect-great-solutions-azure/',
        advanced: 'https://learn.microsoft.com/training/paths/azure-solution-architect/',
      },
      'power-platform': {
        beginner: 'https://learn.microsoft.com/training/paths/power-platform-fundamentals/',
        intermediate: 'https://learn.microsoft.com/training/paths/power-apps-advanced-dev/',
        advanced: 'https://learn.microsoft.com/training/paths/power-platform-architect/',
      },
    };

    return paths[answers.goal]?.[answers.experience] || paths.azure.beginner;
  };

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Personalized Learning Path</h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Trophy className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Selected Goal</h3>
              <p className="text-gray-600 capitalize">{answers.goal.replace('-', ' ')}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <BookOpen className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Experience Level</h3>
              <p className="text-gray-600 capitalize">{answers.experience}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Time Commitment</h3>
              <p className="text-gray-600">{answers.timeCommitment} hours per week</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Learning Path</h3>
        <a
          href={getLearningPath()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Start Learning
        </a>
      </div>

      <button
        onClick={onReset}
        className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
      >
        ← Start Over
      </button>
    </div>
  );
}