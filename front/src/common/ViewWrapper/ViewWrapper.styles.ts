import { Theme } from 'assets/styles/themes';
import { ViewStyle } from 'react-native';

type ViewWrapperStyles = {
  [k: string]: ViewStyle;
};

type ViewWrapperStyleAttributes = {
  wrapperStyles: ViewStyle;
  wrapperContainerStyles: ViewStyle;
  containerStyles: ViewStyle;
};

export default (
  theme: Theme,
  { wrapperStyles, wrapperContainerStyles, containerStyles }: ViewWrapperStyleAttributes
): ViewWrapperStyles => {
  return {
    wrapperStyles: {
      backgroundColor: theme.colors.layoutPrimary,
      ...wrapperStyles,
      flex: 1,
    },
    wrapperContainerStyles: {
      flexGrow: 1,
      ...wrapperContainerStyles,
    },
    containerStyles: {
      flex: 1,
      ...containerStyles,
    },
  };
};
