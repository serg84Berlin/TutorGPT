import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'ru', name: 'Русский' },
  { code: 'uk', name: 'Українська' },
] as const;

export function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-500 dark:text-gray-400" />
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="bg-transparent text-sm text-gray-600 dark:text-gray-300 focus:outline-none"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}