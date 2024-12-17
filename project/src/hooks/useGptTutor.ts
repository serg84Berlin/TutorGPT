import { useState } from 'react';
import { generateTutorial, TutorPrompt, TutorResponse } from '../services/gptTutor';

interface TutorState extends TutorResponse {
  isLoading: boolean;
}

export function useGptTutor() {
  const [state, setState] = useState<TutorState>({
    isLoading: false,
    steps: [],
    resources: [],
  });

  const generateGuide = async (prompt: TutorPrompt) => {
    setState(prev => ({ ...prev, isLoading: true, error: undefined }));
    
    try {
      const response = await generateTutorial(prompt);
      setState(prev => ({
        ...prev,
        isLoading: false,
        steps: response.steps,
        resources: response.resources,
        error: response.error,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      }));
    }
  };

  return {
    ...state,
    generateGuide,
  };
}