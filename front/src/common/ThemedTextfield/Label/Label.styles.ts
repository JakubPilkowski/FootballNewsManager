import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from 'assets/styles/themes';

export default (theme: Theme): LabelStyles => {
  const { fonts, colors } = theme;
  return {
    wrapperStyles: {
      position: 'absolute',
      backgroundColor: colors.layoutPrimary,
      zIndex: 10,
    },
    labelStyles: {
      ...fonts.fontM,
      color: colors.gray,
    },
  };
};

export type LabelStyles = {
  wrapperStyles: ViewStyle;
  labelStyles: TextStyle;
};
