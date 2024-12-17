import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen } from 'lucide-react';

export function ProductTutorHeader() {
  const { t } = useTranslation();

  return (
    <div className="flex items-start space-x-3">
      <BookOpen className="h-6 w-6 text-blue-500 mt-1" />
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t('tutor.product.title')}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {t('tutor.product.description')}
        </p>
      </div>
    </div>
  );
}