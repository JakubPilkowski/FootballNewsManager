import { Theme } from 'assets/styles/themes';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

type LanguagePickerStyles = {
  styles: ViewStyle;
  dropDownContainerStyles: ViewStyle;
  listItemContainerStyles: ViewStyle;
  labelStyles: TextStyle;
  listItemLabelStyles: TextStyle;
  selectedItemContainerStyles: ViewStyle;
  selectedItemLabelStyles: TextStyle;
};

export default (theme: Theme): LanguagePickerStyles => {
  const { colors, fonts } = theme;
  return {
    styles: {
      backgroundColor: 'transparent',
      borderColor: colors.primary,
      width: '50%',
      alignSelf: 'flex-end',
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 0,
      borderRadius: 0,
    },
    dropDownContainerStyles: {
      backgroundColor: 'transparent',
      alignSelf: 'flex-end',
      borderColor: colors.primary,
      width: '50%',
      borderRadius: 0,
    },
    listItemContainerStyles: {
      backgroundColor: colors.textDark,
    },
    labelStyles: {
      ...fonts.fontL,
      color: colors.textLight,
    },
    listItemLabelStyles: {
      ...fonts.fontL,
      color: colors.textLight,
    },
    selectedItemContainerStyles: {
      backgroundColor: colors.primary,
    },
    selectedItemLabelStyles: {
      color: colors.textLight,
    },
  };
};
