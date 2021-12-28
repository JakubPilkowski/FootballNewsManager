import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from 'assets/styles/themes';

export default (theme: Theme): ThemedTextFieldStyles => {
  const { fonts, layout, colors } = theme;
  return {
    wrapperStyles: {
      marginTop: layout.marginS,
      marginHorizontal: layout.marginXL,
      marginBottom: layout.marginXS,
    },
    containerStyles: {
      borderColor: colors.primary,
      borderWidth: 1,
      position: 'relative',
      padding: layout.paddingM,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: layout.borderRadiusHuge,
      zIndex: 5,
    },
    inputStyles: {
      ...fonts.fontL,
      flex: 1,
      height: 18,
    },
  };
};

export type ThemedTextFieldStyles = {
  wrapperStyles: ViewStyle;
  containerStyles: ViewStyle;
  inputStyles: TextStyle;
};
