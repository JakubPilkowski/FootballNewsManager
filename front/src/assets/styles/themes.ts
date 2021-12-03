import { Colors, darkThemeColors, lightThemeColors } from './colors';
import fonts, { Fonts } from './fonts';
import layout, { Layout } from './layout';

const themes = {
  dark: {
    colors: darkThemeColors,
    fonts,
    layout,
  },
  light: {
    colors: lightThemeColors,
    fonts,
    layout,
  },
  'no-preference': {
    colors: darkThemeColors,
    fonts,
    layout,
  },
} as Themes;

export type Theme = {
  colors: Colors;
  fonts: Fonts;
  layout: Layout;
};
export type Themes = {
  dark: Theme;
  light: Theme;
  'no-preference': Theme;
};
export type ThemeType = 'dark' | 'light';

export default themes;
