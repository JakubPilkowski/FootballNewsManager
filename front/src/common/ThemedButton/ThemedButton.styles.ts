import { Theme } from 'assets/styles/themes';
import { StyleProp, TextStyle, View, ViewStyle, StyleSheet } from 'react-native';

import { ThemedButtonVariant } from './ThemedButton';

function getVariantButtonStyles(variant: ThemedButtonVariant, theme: Theme): ViewStyle {
  const { colors, layout } = theme;
  switch (variant) {
    case 'filled':
      return {
        backgroundColor: colors.primary,
        paddingHorizontal: layout.paddingXXL,
        paddingVertical: layout.paddingM,
        flex: 0,
        maxWidth: '80%',
        alignSelf: 'center',
        borderRadius: layout.borderRadiusSmall,
        elevation: 4,
        shadowColor: colors.textDark,
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowRadius: 4,
      };
    case 'outlined':
      return {
        backgroundColor: 'transparent',
        paddingHorizontal: layout.paddingXXL,
        paddingVertical: layout.paddingM,
        flex: 0,
        alignSelf: 'center',
        borderRadius: layout.borderRadiusSmall,
        borderColor: colors.primary,
        borderWidth: 1,
        elevation: 4,
        shadowColor: colors.textDark,
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowRadius: 4,
      };
    case 'underline':
      return {
        backgroundColor: 'transparent',
        flex: 0,
        paddingHorizontal: layout.paddingXS,
        paddingVertical: 2,
      };
  }
}

function getVariantTextStyles(variant: ThemedButtonVariant, theme: Theme): TextStyle {
  const { colors } = theme;

  switch (variant) {
    case 'filled':
      return {
        color: colors.textLight,
        textAlign: 'center',
      };
    case 'outlined':
      return {
        color: colors.primary,
        textAlign: 'center',
      };
    case 'underline':
      return {
        color: colors.textLight,
        textAlign: 'center',
        textDecorationColor: colors.textLight,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
      };
  }
}

export function themedButtonStyles(variant: ThemedButtonVariant, theme: Theme) {
  return getVariantButtonStyles(variant, theme);
}

export function themedButtonTextStyles(variant: ThemedButtonVariant, theme: Theme) {
  return {
    ...theme.fonts.fontL,
    fontWeight: 'bold',
    letterSpacing: 0.7,
    ...getVariantTextStyles(variant, theme),
  };
}
