import { Theme } from 'assets/styles/themes';
import { TextStyle, ViewStyle } from 'react-native';

import { ThemedButtonVariant } from './ThemedButton';

function getVariantButtonStyles(
  variant: ThemedButtonVariant,
  theme: Theme,
  disabled: boolean
): ViewStyle {
  const { colors, layout } = theme;
  switch (variant) {
    case 'filled':
      return {
        backgroundColor: colors.primary,
        paddingHorizontal: layout.paddingXXL,
        paddingVertical: layout.paddingM,
        flex: 0,
        opacity: disabled ? 0.4 : 1,
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
        opacity: disabled ? 0.4 : 1,
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
        opacity: disabled ? 0.4 : 1,
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
        color: colors.buttonColor,
        textAlign: 'center',
      };
    case 'outlined':
      return {
        color: colors.primary,
        textAlign: 'center',
      };
    case 'underline':
      return {
        color: colors.textDark,
        textAlign: 'center',
        textDecorationColor: colors.textDark,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
      };
  }
}

export function wrapper(variant: ThemedButtonVariant, theme: Theme, disabled: boolean): ViewStyle {
  return getVariantButtonStyles(variant, theme, disabled);
}

export function text(variant: ThemedButtonVariant, theme: Theme): TextStyle {
  return {
    ...theme.fonts.fontL,
    fontWeight: 'bold',
    letterSpacing: 0.7,
    ...getVariantTextStyles(variant, theme),
  };
}
