import React, { memo, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ThemedSwitch from 'common/ThemedSwitch';
import { OnSwitchToggle } from 'common/ThemedSwitch/ThemedSwitch.types';

import useTheme from 'utils/themeProvider/useTheme';

const Settings = () => {
  const [theme, { changeTheme, scheme }] = useTheme();
  const [checked, setChecked] = useState(scheme === 'dark' || scheme === 'no-preference');

  useEffect(() => {
    setChecked(scheme === 'dark' || scheme === 'no-preference');
  }, [scheme]);

  const handleDarkModeToggle = ({ checked }: OnSwitchToggle) => {
    setChecked(checked);
    changeTheme({ colorScheme: checked ? 'dark' : 'light' });
  };
  return (
    <View style={settingsStyles.container}>
      <ThemedSwitch checked={checked} onToggle={handleDarkModeToggle} label="Scheme" />
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
