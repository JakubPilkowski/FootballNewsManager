import { Theme } from 'assets/styles/themes';
import { TextStyle } from 'react-native';

export default (theme: Theme): TextStyle => {
  const { fonts, layout } = theme;
  return {
    ...fonts.fontS,
    flex: 1,
    marginLeft: layout.marginXS,
    marginTop: 2,
  };
};
