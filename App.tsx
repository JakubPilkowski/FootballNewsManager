import React from 'react';
import { Text, View } from 'react-native';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://c7ff552fc1e44978889493cba750543c@o982648.ingest.sentry.io/5937927',
  enableNative: false,
});

export default function App() {
  return (
    <View>
      <Text>Halo halo</Text>
    </View>
  );
}
