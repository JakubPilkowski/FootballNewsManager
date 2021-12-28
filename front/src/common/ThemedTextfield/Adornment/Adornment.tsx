import React, { memo, ReactNode } from 'react';
import { Pressable, ActivityIndicator } from 'react-native';

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
}) => {
  const [theme] = useTheme();

  if (isError) {
    return <>{errorAdornment || <ErrorIcon />}</>;
  }

  if (isLoading) {
    return (
      <>
        {loadingAdornment || <ActivityIndicator size="small" color={theme.colors.layoutInverse} />}
      </>
    );
  }
  if (isPasswordField) {
    return (
      <Pressable onPress={onTextSecureClick}>
        {isTextSecured
          ? textSecuredAdornment || <EyeShowedIcon />
          : textInsecuredAdornment || <EyeHiddenIcon />}
      </Pressable>
    );
  }

  if (isClearField) {
    return <Pressable onPress={onClearClick}>{clearAdornment || <ClearIcon />}</Pressable>;
  }

  if (customAdornment) {
    return <>{customAdornment}</>;
  }
  return null;
};

export default memo(Adornment);
