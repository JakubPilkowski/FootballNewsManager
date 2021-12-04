import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { EventSubscription } from 'react-native';
import {
  Appearance,
  AppearanceProvider,
  ColorSchemeName,
  useColorScheme,
} from 'react-native-appearance';

import useAsyncStorage from 'hooks/useAsyncStorage';

import themes from 'assets/styles/themes';

import { ThemeContext } from './ThemeContext';

type ThemeProviderProps = { [key: string]: unknown };

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme();

  const [scheme, setScheme] = useAsyncStorage('scheme', colorScheme);

  const theme = useMemo(() => themes[scheme as ColorSchemeName], [scheme]);

  const changeTheme = useCallback(
    ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
      console.log('colorScheme');
      console.log(colorScheme);
      // TODO: expo eject to android/ios app
      // changeNavigationBarColor('#80b3ff', true, true);
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
