import { createContext } from 'react';
import { ColorSchemeName } from 'react-native-appearance';

import { Theme } from 'assets/styles/themes';

export type ThemeContextType = {
  theme: Theme;
  changeTheme: ({ colorScheme }: { colorScheme: ColorSchemeName }) => void;
  scheme: ColorSchemeName;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
