import { Theme } from 'assets/styles/themes';
import { ViewStyle } from 'react-native';

type LayoutStyles = {
  layoutStyles: ViewStyle;
};

export default function getLayoutStyles(theme: Theme): LayoutStyles {
  const { colors } = theme;
  return {
    layoutStyles: {
      backgroundColor: colors.layoutPrimary,
      flex: 1,
    },
  };
}
