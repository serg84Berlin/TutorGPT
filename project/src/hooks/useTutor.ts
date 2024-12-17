import { useState, useCallback } from 'react';
import { TutorPrompt, TutorState, TutorRequestStatus } from '../types/tutor';
import { generateTutorial } from '../services/tutor/api';

export function useTutor() {
  const [state, setState] = useState<TutorState>({
    isLoading: false,
    steps: [],
  });
  const [status, setStatus] = useState<TutorRequestStatus>('idle');

  const generateGuide = useCallback(async (request: TutorPrompt) => {
    setState(prev => ({ ...prev, isLoading: true }));
    setStatus('loading');
    
    try {
      const response = await generateTutorial(request);
      setState(prev => ({
        ...prev,
        isLoading: false,
        steps: response.steps,
        error: response.error,
      }));
      setStatus(response.error ? 'error' : 'success');
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      }));
      setStatus('error');
    }
  }, []);

  return {
    ...state,
    status,
    generateGuide,
    isIdle: status === 'idle',
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
  };
}