import { Theme } from 'assets/styles/themes';
import { TextStyle, ViewStyle } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type LoginStyles = {
  loginContainer: ViewStyle;
  loginButtonWrapper: ViewStyle;
  titleStyles: TextStyle;
  buttonWrapper: ViewStyle;
  underlineButtonStyles: TextStyle;
  loginErrorTextStyles: TextStyle;
};

export default function getLoginViewStyles(theme: Theme): LoginStyles {
  const { layout, fonts, colors } = theme;
  return {
    loginContainer: {
      marginHorizontal: layout.marginXL,
      flex: 1,
    },
    loginButtonWrapper: {
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
    buttonWrapper: {
      marginBottom: layout.marginXS,
    },
    underlineButtonStyles: {
      textAlign: 'right',
      color: colors.textLight,
      ...fonts.fontM,
    },
    loginErrorTextStyles: {
      ...fonts.fontL,
      color: colors.error,
      marginVertical: layout.marginM,
    },
  };
}
