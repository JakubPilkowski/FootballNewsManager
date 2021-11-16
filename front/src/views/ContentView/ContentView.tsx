import React, { memo } from 'react';
import { WebView } from 'react-native-webview';

const ContentView = () => {
  return <WebView source={{ uri: 'https://transfery.info' }} />;
};

export default memo(ContentView);
