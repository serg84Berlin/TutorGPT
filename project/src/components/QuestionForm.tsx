import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface QuestionFormProps {
  currentStep: number;
  onNext: () => void;
  onPrev: () => void;
  updateAnswers: (field: string, value: string) => void;
  answers: {
    goal: string;
    experience: string;
    timeCommitment: string;
  };
}

export function QuestionForm({ currentStep, onNext, onPrev, updateAnswers, answers }: QuestionFormProps) {
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">What would you like to learn?</h2>
            <select
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={answers.goal}
              onChange={(e) => updateAnswers('goal', e.target.value)}
            >
              <option value="">Select your learning goal</option>
              <option value="azure">Azure Cloud</option>
              <option value="power-platform">Power Platform</option>
              <option value="security">Security & Compliance</option>
              <option value="ai">AI & Machine Learning</option>
              <option value="developer">Developer Tools</option>
            </select>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">What's your experience level?</h2>
            <div className="space-y-4">
              {['beginner', 'intermediate', 'advanced'].map((level) => (
                <label key={level} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="experience"
                    value={level}
                    checked={answers.experience === level}
                    onChange={(e) => updateAnswers('experience', e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 capitalize">{level}</span>
                </label>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">How much time can you commit weekly?</h2>
            <select
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={answers.timeCommitment}
              onChange={(e) => updateAnswers('timeCommitment', e.target.value)}
            >
              <option value="">Select time commitment</option>
              <option value="1-2">1-2 hours/week</option>
              <option value="3-5">3-5 hours/week</option>
              <option value="5-10">5-10 hours/week</option>
              <option value="10+">10+ hours/week</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {renderStep()}
      <div className="flex justify-between pt-6">
        {currentStep > 1 && (
          <button
            onClick={onPrev}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </button>
        )}
        <button
          onClick={onNext}
          className="ml-auto flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {currentStep === 3 ? 'Get Recommendations' : 'Next'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}