import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProductTutorHeader } from './ProductTutorHeader';
import { ProductTutorForm } from './ProductTutorForm';
import { ProductTutorResults } from './ProductTutorResults';
import { ErrorMessage } from '../ui/ErrorMessage';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { useProductTutor } from '../../hooks/useProductTutor';
import { SUPPORTED_PRODUCTS } from '../../constants/products';

export function ProductTutor() {
  const { t } = useTranslation();
  const { isLoading, error, steps, selectedProduct, generateTutorial, setSelectedProduct } = useProductTutor();

  const handleSubmit = () => {
    if (selectedProduct) {
      generateTutorial({
        topic: selectedProduct,
        language: t('common.language'),
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="space-y-6">
        <ProductTutorHeader />
        
        <ProductTutorForm
          products={SUPPORTED_PRODUCTS}
          selectedProduct={selectedProduct}
          onProductChange={setSelectedProduct}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {steps.length > 0 && <ProductTutorResults steps={steps} />}
      </div>
    </div>
  );
}