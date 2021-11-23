import React from 'react';
import { ApolloProvider } from '@apollo/client';
import * as Sentry from '@sentry/react-native';
import Routing from 'common/Routing';

import client from 'api/client';
import i18n from 'i18n/i18n';
import { I18nextProvider } from 'react-i18next';

// Sentry.init({
//   dsn: 'https://c7ff552fc1e44978889493cba750543c@o982648.ingest.sentry.io/5937927',
//   enableNative: false,
// });

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ApolloProvider client={client}>
        <Routing />
      </ApolloProvider>
    </I18nextProvider>
  );
}
