import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Text, View } from 'react-native';
import * as Sentry from '@sentry/react-native';

import client from 'api/client';

Sentry.init({
  dsn: 'https://c7ff552fc1e44978889493cba750543c@o982648.ingest.sentry.io/5937927',
  enableNative: false,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View>
        <Text>Halo halo</Text>
      </View>
    </ApolloProvider>
  );
}
