import AsyncStorage from '@react-native-async-storage/async-storage';
import { Module, Newable, NewableModule } from 'i18next';
import * as Localization from 'expo-localization';

export const LANGUAGE_CODES = ['pl', 'en', 'fr', 'it', 'es', 'de'] as const;
export type LANGUAGE_CODE_TYPE = typeof LANGUAGE_CODES[number];

const LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  detect: (callback: (lng: string) => void) => {
    AsyncStorage.getItem('user-language', (err, language) => {
      if (err || !language) {
        callback(Localization.locale.split('-')[0] || 'en');
        return;
      }
      callback(language);
    });
  },
  cacheUserLanguage: (language: string) => {
    AsyncStorage.setItem('user-language', language);
  },
} as Module | NewableModule<Module> | Newable<Module>;

export default LANGUAGE_DETECTOR;
