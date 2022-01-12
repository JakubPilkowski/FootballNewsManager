import React, { memo, ReactNode, useMemo } from 'react';
import {
  Text,
  PressableProps,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import useTheme from 'utils/themeProvider/useTheme';
import { wrapper, text } from './ThemedButton.styles';

export type ThemedButtonVariant = 'filled' | 'outlined' | 'underline';

export type ThemedButtonProps = {
  onPress: TouchableOpacityProps['onPress'];
  title: string;
  children?: ReactNode;
  wrapperStyles?: ViewStyle;
  textStyles?: TextStyle;
  variant?: 'filled' | 'outlined' | 'underline';
  disabled?: boolean;
};

const defaultStyles = {};

const ThemedButton: React.FC<ThemedButtonProps> = ({
  onPress,
  title,
  wrapperStyles = defaultStyles,
  textStyles = defaultStyles,
  variant = 'filled',
  disabled = false,
  children,
}) => {
  const [theme] = useTheme();

  const themedButtonWrapperStyles = useMemo(
    () => ({
      ...wrapper(variant, theme, disabled),
      ...wrapperStyles,
    }),
    [disabled, theme, variant, wrapperStyles]
  );

  const themedButtonTextStyles = useMemo(
    () => ({
      ...text(variant, theme),
      ...textStyles,
    }),
    [textStyles, theme, variant]
  );

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      style={themedButtonWrapperStyles}
      onPress={onPress}>
      {children ? children : <Text style={themedButtonTextStyles}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default memo(ThemedButton);
