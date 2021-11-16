import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Settings = () => {
  return (
    <View style={settingsStyles.container}>
      <Text>Settings</Text>
    </View>
  );
};

const settingsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(Settings);
