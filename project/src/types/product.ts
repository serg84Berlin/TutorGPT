export interface Product {
  id: string;
  name: string;
  category: 'cloud' | 'tools';
}

export interface ProductTutorState {
  isLoading: boolean;
  error: string | null;
  steps: string[];
  selectedProduct: string;
}