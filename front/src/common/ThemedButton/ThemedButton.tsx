import React, { memo, ReactNode, useMemo } from 'react';
import { Text, Pressable, PressableProps, ViewStyle } from 'react-native';
import { themedButtonStyles, themedButtonTextStyles } from './ThemedButton.styles';

export type ThemedButtonVariant = 'filled' | 'outlined' | 'underline';

export type ThemedButtonProps = {
  onPress: PressableProps['onPress'];
  title: string;
  children?: ReactNode;
  styles?: ViewStyle;
  //   styles?: StyleSheet.NamedStyles<any>;
  variant?: 'filled' | 'outlined' | 'underline';
  disabled?: boolean;
};

const ThemedButton: React.FC<ThemedButtonProps> = ({
  onPress,
  title,
  styles = {},
  variant = 'filled',
  disabled = false,
  children,
}) => {
  const buttonStyles = useMemo(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    () => ({
      ...themedButtonStyles(variant),
      ...styles,
    }),
    [styles, variant]
  );

  return (
    <Pressable disabled={disabled} style={buttonStyles} onPress={onPress}>
      {children ? children : <Text style={themedButtonTextStyles(variant)}>{title}</Text>}
    </Pressable>
  );
};

export default memo(ThemedButton);
