import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { EventSubscription } from 'react-native';
import {
  Appearance,
  AppearanceProvider,
  ColorSchemeName,
  useColorScheme,
} from 'react-native-appearance';

import themes, { Theme } from 'assets/styles/themes';

import { ThemeContext } from './ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAsyncStorage from 'hooks/useAsyncStorage';

const ThemeProvider: React.FC = ({ children }) => {
  const colorScheme = useColorScheme();

  const [scheme, setScheme] = useAsyncStorage('scheme', colorScheme);

  const theme = useMemo(() => themes[scheme as ColorSchemeName], [scheme]);

  const changeTheme = useCallback(
    ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
      setScheme(colorScheme);
    },
    [setScheme]
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(changeTheme) as EventSubscription;
    return () => subscription.remove();
  }, [changeTheme]);

  const themeContext = useMemo(
    () => ({
      theme,
      changeTheme,
      scheme: scheme as ColorSchemeName,
    }),
    [theme, changeTheme, scheme]
  );

  return (
    <AppearanceProvider>
      <ThemeContext.Provider value={themeContext}>{children}</ThemeContext.Provider>
    </AppearanceProvider>
  );
};

export default memo(ThemeProvider);
