import { useState } from 'react';
import { ProductTutorState } from '../types/product';
import { TutorRequest } from '../types/tutor';
import { fetchTutorResponse } from '../services/tutorService';

const initialState: ProductTutorState = {
  isLoading: false,
  error: null,
  steps: [],
  selectedProduct: '',
};

export function useProductTutor() {
  const [state, setState] = useState<ProductTutorState>(initialState);

  const setSelectedProduct = (product: string) => {
    setState(prev => ({ ...prev, selectedProduct: product }));
  };

  const generateTutorial = async (request: TutorRequest) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const response = await fetchTutorResponse({
        ...request,
        platform: 'microsoft',
      });
      setState(prev => ({
        ...prev,
        isLoading: false,
        steps: response.steps,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      }));
    }
  };

  return {
    ...state,
    generateTutorial,
    setSelectedProduct,
  };
}