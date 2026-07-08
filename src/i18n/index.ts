import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import es from './locales/es.json'
import en from './locales/en.json'
import eu from './locales/eu.json'

export const supportedLngs = ['es', 'en', 'eu'] as const
export type SupportedLng = (typeof supportedLngs)[number]
export const defaultLng: SupportedLng = 'en'

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      eu: { translation: eu },
    },
    fallbackLng: defaultLng,
    supportedLngs: [...supportedLngs],
    load: 'languageOnly',
    nonExplicitSupportedLngs: false,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'lng',
    },
    interpolation: { escapeValue: false },
    returnNull: false,
  })

const syncLang = (lng: string) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng
  }
}

syncLang(i18n.resolvedLanguage ?? i18n.language ?? defaultLng)
i18n.on('languageChanged', syncLang)

export default i18n
