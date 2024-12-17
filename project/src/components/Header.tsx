import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import { LanguageSelector } from './ui/LanguageSelector';
import { ThemeToggle } from './ui/ThemeToggle';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('header.title')}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}