import { ViewStyle } from 'react-native';
import alpha from 'color-alpha';

import { Theme } from 'assets/styles/themes';

type LoadingDialogStyles = {
  wrapperOuterStyles: ViewStyle;
  wrapperInnerStyles: ViewStyle;
};

export default function getLoadingDialogStyles(theme: Theme): LoadingDialogStyles {
  const { colors } = theme;
  return {
    wrapperOuterStyles: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: alpha(colors.textLight, 0.2),
    },
    wrapperInnerStyles: {
      backgroundColor: colors.textLight,
      borderRadius: 20,
      padding: 40,
      alignItems: 'center',
      shadowColor: colors.primary,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  };
}
