import { Theme } from 'assets/styles/themes';
import { ViewStyle } from 'react-native';

export default (theme: Theme): ViewStyle => {
  return {
    backgroundColor: theme.colors.layoutMedium,
    flex: 1,
  };
};
