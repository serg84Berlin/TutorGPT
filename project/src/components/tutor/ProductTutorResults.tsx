import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';

interface ProductTutorResultsProps {
  steps: string[];
}

export function ProductTutorResults({ steps }: ProductTutorResultsProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {t('tutor.product.results.title')}
      </h3>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
          >
            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
            <p className="text-gray-700 dark:text-gray-300">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}