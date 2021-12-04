import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Sentry from '@sentry/react-native';

import client from 'api/client';

import i18n from 'i18n/i18n';

import Routing from 'common/Routing';

import ThemeProvider from 'utils/themeProvider/ThemeProvider';

// Sentry.init({
//   dsn: 'https://c7ff552fc1e44978889493cba750543c@o982648.ingest.sentry.io/5937927',
//   enableNative: false,
// });

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <ThemeProvider>
            <Routing />
          </ThemeProvider>
        </SafeAreaProvider>
      </ApolloProvider>
    </I18nextProvider>
  );
}
