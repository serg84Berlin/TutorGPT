import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTutor } from '../../hooks/useTutor';
import { TutorInput } from './TutorInput';
import { TutorResults } from './TutorResults';
import { LoadingSpinner } from '../ui/LoadingSpinner';

export function TutorAssistant() {
  const { t } = useTranslation();
  const { isLoading, error, steps, generateTutorial } = useTutor();

  const handleSubmit = (topic: string) => {
    generateTutorial({
      topic,
      language: t('common.language'),
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('tutor.title')}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {t('tutor.description')}
          </p>
        </div>

        <TutorInput onSubmit={handleSubmit} isLoading={isLoading} />

        {isLoading && (
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
            {error}
          </div>
        )}

        <TutorResults steps={steps} />
      </div>
    </div>
  );
}