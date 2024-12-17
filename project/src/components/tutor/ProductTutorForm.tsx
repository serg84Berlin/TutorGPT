import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import { Product } from '../../types/product';
import { ProductSelect } from './ProductSelect';

interface ProductTutorFormProps {
  products: Product[];
  selectedProduct: string;
  onProductChange: (product: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export function ProductTutorForm({
  products,
  selectedProduct,
  onProductChange,
  onSubmit,
  isLoading,
}: ProductTutorFormProps) {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProduct) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <ProductSelect
        products={products}
        value={selectedProduct}
        onChange={onProductChange}
        disabled={isLoading}
      />
      
      <button
        type="submit"
        disabled={isLoading || !selectedProduct}
        className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Search className="h-5 w-5 mr-2" />
        {t('tutor.product.button.getInstructions')}
      </button>
    </form>
  );
}