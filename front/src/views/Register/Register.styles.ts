import { Theme } from 'assets/styles/themes';
import { TextStyle, ViewStyle } from 'react-native';

type RegisterStyles = {
  containerStyles: ViewStyle;
  buttonWrapperStyles: ViewStyle;
  titleStyles: TextStyle;
  errorTextStyles: TextStyle;
};

export default function getRegisterViewStyles(theme: Theme): RegisterStyles {
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
    errorTextStyles: {
      ...fonts.fontL,
      color: colors.error,
      marginVertical: layout.marginM,
    },
  };
}
