import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from 'assets/styles/themes';

type VerifyAccountStyles = {
  containerStyles: ViewStyle;
  buttonWrapperStyles: ViewStyle;
  infoTextStyles: TextStyle;
  titleStyles: TextStyle;
  errorTextStyles: TextStyle;
  messageTextStyles: TextStyle;
};

export default function getVerifyAccountStyles(theme: Theme): VerifyAccountStyles {
  const { layout, fonts, colors } = theme;
  return {
    containerStyles: {
      marginHorizontal: layout.marginXL,
      flex: 1,
    },
    buttonWrapperStyles: {
      width: '100%',
      borderRadius: layout.borderRadiusHuge,
      marginTop: layout.marginS,
      marginBottom: layout.marginXS,
    },
    titleStyles: {
      ...fonts.fontTitle,
      fontStyle: 'italic',
      fontWeight: 'bold',
      color: colors.textLight,
      textAlign: 'center',
      marginVertical: layout.marginS,
    },
    infoTextStyles: {
      ...fonts.fontM,
      color: colors.textLight,
      marginVertical: layout.marginS,
    },
    errorTextStyles: {
      ...fonts.fontL,
      color: colors.error,
      marginVertical: layout.marginM,
    },
    messageTextStyles: {
      ...fonts.fontL,
      color: colors.error,
      marginVertical: layout.marginM,
    },
  };
}
