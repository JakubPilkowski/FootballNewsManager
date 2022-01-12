import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from 'assets/styles/themes';

type StylesOptions = {
  wrapperStyles: ViewStyle;
  containerStyles: ViewStyle;
  boxStyles: ViewStyle;
  inputStyles: TextStyle;
  adornmentStyles: ViewStyle;
  hasAdornment: boolean;
};

export default (
  theme: Theme,
  {
    wrapperStyles,
    containerStyles,
    inputStyles,
    boxStyles,
    adornmentStyles,
    hasAdornment,
  }: StylesOptions
): ThemedTextFieldStyles => {
  const { fonts, layout, colors } = theme;
  return {
    wrapperStyles: {
      marginTop: layout.marginS,
      marginBottom: layout.marginXS,
      ...wrapperStyles,
    },
    containerStyles: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      ...containerStyles,
    },
    boxStyles: {
      position: 'absolute',
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: layout.borderRadiusHuge,
      alignSelf: 'flex-start',
      width: '100%',
      height: 45,
    },
    inputStyles: {
      ...fonts.fontL,
      paddingLeft: layout.paddingM,
      paddingRight: hasAdornment ? 40 : layout.paddingM,
      paddingVertical: layout.paddingM,
      flex: 1,
      color: colors.textLight,
      ...inputStyles,
    },
    adornmentStyles: {
      position: 'absolute',
      right: 10,
    },
  };
};

export type ThemedTextFieldStyles = {
  wrapperStyles: ViewStyle;
  containerStyles: ViewStyle;
  inputStyles: TextStyle;
  adornmentStyles: ViewStyle;
  boxStyles: ViewStyle;
};
