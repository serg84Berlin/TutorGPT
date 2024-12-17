import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import deTranslation from './locales/de/translation.json';
import ruTranslation from './locales/ru/translation.json';
import ukTranslation from './locales/uk/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      de: {
        translation: deTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
      uk: {
        translation: ukTranslation,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;