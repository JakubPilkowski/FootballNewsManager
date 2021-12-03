import { Theme } from 'assets/styles/themes';
import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeContext';

type UseTheme = [
  Theme,
  {
    changeTheme: ThemeContextType['changeTheme'];
    scheme: ThemeContextType['scheme'];
  }
];

export default function useTheme(): UseTheme {
  const context = useContext<ThemeContextType | null>(ThemeContext) as ThemeContextType;
  return [context.theme, { changeTheme: context.changeTheme, scheme: context.scheme }];
}
