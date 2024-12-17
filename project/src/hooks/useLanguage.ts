import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../utils/constants';

export function useLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    if (SUPPORTED_LANGUAGES.includes(language as any)) {
      i18n.changeLanguage(language);
    }
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    supportedLanguages: SUPPORTED_LANGUAGES,
  };
}