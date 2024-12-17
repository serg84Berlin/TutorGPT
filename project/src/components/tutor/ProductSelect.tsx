import React from 'react';
import { useTranslation } from 'react-i18next';
import { Product } from '../../types/product';

interface ProductSelectProps {
  products: Product[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function ProductSelect({ products, value, onChange, disabled }: ProductSelectProps) {
  const { t } = useTranslation();

  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white disabled:opacity-50"
    >
      <option value="">{t('tutor.product.select.placeholder')}</option>
      
      {Object.entries(groupedProducts).map(([category, products]) => (
        <optgroup key={category} label={t(`tutor.product.categories.${category}`)}>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}