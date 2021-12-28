import React, { FC, memo, useMemo } from 'react';
import { Animated } from 'react-native';

import useTheme from 'utils/themeProvider/useTheme';

import textStyles from './HelperText.styles';
import HelperTextProps from './HelperText.types';

const HelperText: FC<HelperTextProps> = ({ text, isError = false, styles = {} }) => {
  const [theme] = useTheme();

  const helperTextStyles = useMemo(
    () => ({
      color: isError ? theme.colors.error : theme.colors.gray,
      ...textStyles(theme),
      ...styles,
    }),
    [styles, isError, theme]
  );

  return <Animated.Text style={helperTextStyles}>{text}</Animated.Text>;
};

export default memo(HelperText);
