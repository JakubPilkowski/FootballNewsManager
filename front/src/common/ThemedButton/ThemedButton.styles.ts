import { StyleProp, TextStyle, View, ViewStyle, StyleSheet } from 'react-native';

import { ThemedButtonVariant } from './ThemedButton';

function getVariantButtonStyles(variant: ThemedButtonVariant): ViewStyle {
  switch (variant) {
    case 'filled':
      return {
        backgroundColor: '#6bba62',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 1,
        elevation: 4,
        shadowColor: '#222222',
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowRadius: 4,
      };
    case 'outlined':
      return {
        backgroundColor: 'transparent',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 1,
        borderColor: '#6bba62',
        borderWidth: 1,
        elevation: 4,
        shadowColor: '#222222',
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowRadius: 4,
      };
    case 'underline':
      return {
        backgroundColor: 'transparent',
        paddingHorizontal: 5,
        paddingVertical: 2,
      };
  }
}

function getVariantTextStyles(variant: ThemedButtonVariant): TextStyle {
  switch (variant) {
    case 'filled':
      return {
        color: '#fff',
        textAlign: 'center',
      };
    case 'outlined':
      return {
        color: '#6bba62',
        textAlign: 'center',
      };
    case 'underline':
      return {
        color: '#fff',
        textAlign: 'center',
        textDecorationColor: '#fff',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
      };
  }
}

export function themedButtonStyles(variant: ThemedButtonVariant) {
  //   const styles = StyleSheet.create({
  //     button: getVariantButtonStyles(variant),
  //   });

  //   return styles.button as Partial<StyleProp<any>>;
  return getVariantButtonStyles(variant);
}

export function themedButtonTextStyles(variant: ThemedButtonVariant) {
  //   const styles = StyleSheet.create({
  //     text: getVariantTextStyles(variant),
  //   });

  return getVariantTextStyles(variant);

  //   return styles.text as Partial<StyleProp<any>>;
}
