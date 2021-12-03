import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LANGUAGE_DETECTOR from './languageDetector';

import baseEn from 'assets/locales/en/base.json';
import basePl from 'assets/locales/pl/base.json';
import baseIt from 'assets/locales/it/base.json';
import baseFr from 'assets/locales/fr/base.json';
import baseDe from 'assets/locales/de/base.json';
import baseEs from 'assets/locales/es/base.json';

import authEn from 'assets/locales/en/auth.json';
import authPl from 'assets/locales/pl/auth.json';
import authIt from 'assets/locales/it/auth.json';
import authFr from 'assets/locales/fr/auth.json';
import authDe from 'assets/locales/de/auth.json';
import authEs from 'assets/locales/es/auth.json';

import newsEn from 'assets/locales/en/news.json';
import newsPl from 'assets/locales/pl/news.json';
import newsIt from 'assets/locales/it/news.json';
import newsFr from 'assets/locales/fr/news.json';
import newsDe from 'assets/locales/de/news.json';
import newsEs from 'assets/locales/es/news.json';

import settingsEn from 'assets/locales/en/settings.json';
import settingsPl from 'assets/locales/pl/settings.json';
import settingsIt from 'assets/locales/it/settings.json';
import settingsFr from 'assets/locales/fr/settings.json';
import settingsDe from 'assets/locales/de/settings.json';
import settingsEs from 'assets/locales/es/settings.json';

import sitesEn from 'assets/locales/en/sites.json';
import sitesPl from 'assets/locales/pl/sites.json';
import sitesIt from 'assets/locales/it/sites.json';
import sitesFr from 'assets/locales/fr/sites.json';
import sitesDe from 'assets/locales/de/sites.json';
import sitesEs from 'assets/locales/es/sites.json';

import teamsEn from 'assets/locales/en/teams.json';
import teamsPl from 'assets/locales/pl/teams.json';
import teamsIt from 'assets/locales/it/teams.json';
import teamsFr from 'assets/locales/fr/teams.json';
import teamsDe from 'assets/locales/de/teams.json';
import teamsEs from 'assets/locales/es/teams.json';

export type NAMESPACES = 'base' | 'auth' | 'news' | 'settings' | 'sites' | 'teams';

export const resources = {
  en: {
    base: baseEn,
    auth: authEn,
    news: newsEn,
    settings: settingsEn,
    sites: sitesEn,
    teams: teamsEn,
  },
  pl: {
    base: basePl,
    auth: authPl,
    news: newsPl,
    settings: settingsPl,
    sites: sitesPl,
    teams: teamsPl,
  },
  it: {
    base: baseIt,
    auth: authIt,
    news: newsIt,
    settings: settingsIt,
    sites: sitesIt,
    teams: teamsIt,
  },
  fr: {
    base: baseFr,
    auth: authFr,
    news: newsFr,
    settings: settingsFr,
    sites: sitesFr,
    teams: teamsFr,
  },
  de: {
    base: baseDe,
    auth: authDe,
    news: newsDe,
    settings: settingsDe,
    sites: sitesDe,
    teams: teamsDe,
  },
  es: {
    base: baseEs,
    auth: authEs,
    news: newsEs,
    settings: settingsEs,
    sites: sitesEs,
    teams: teamsEs,
  },
} as Resource;

i18n
  // .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    defaultNS: 'base',
    resources,
    compatibilityJSON: 'v3',
    keySeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
