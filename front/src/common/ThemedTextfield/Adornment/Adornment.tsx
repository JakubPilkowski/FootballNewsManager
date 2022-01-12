import React, { memo } from 'react';
import { Pressable, ActivityIndicator, View } from 'react-native';

import useTheme from 'utils/themeProvider/useTheme';

import ErrorIcon from 'assets/svgs/ErrorIcon';
import ClearIcon from 'assets/svgs/CloseIcon';
import EyeShowedIcon from 'assets/svgs/EyeShowedIcon';
import EyeHiddenIcon from 'assets/svgs/EyeHiddenIcon';

import AdornmentProps from './Adornment.types';

const Adornment: React.FC<AdornmentProps> = ({
  isTextSecured,
  textSecuredAdornment,
  textInsecuredAdornment,
  onTextSecureClick,
  isLoading,
  errorAdornment,
  clearAdornment,
  loadingAdornment,
  customAdornment,
  onClearClick,
  isClearField,
  isError,
  isPasswordField,
  style,
}) => {
  const [theme] = useTheme();

  if (isError) {
    return <View style={style}>{errorAdornment || <ErrorIcon />}</View>;
  }

  if (isLoading) {
    return (
      <View style={style}>
        {loadingAdornment || <ActivityIndicator size="small" color={theme.colors.layoutInverse} />}
      </View>
    );
  }
  if (isPasswordField) {
    return (
      <Pressable style={style} onPress={onTextSecureClick}>
        {isTextSecured
          ? textSecuredAdornment || <EyeShowedIcon />
          : textInsecuredAdornment || <EyeHiddenIcon />}
      </Pressable>
    );
  }

  if (isClearField) {
    return (
      <Pressable style={style} onPress={onClearClick}>
        {clearAdornment || <ClearIcon />}
      </Pressable>
    );
  }

  if (customAdornment) {
    return <View style={style}>{customAdornment}</View>;
  }
  return null;
};

export default memo(Adornment);
