import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

type AdornmentProps = {
  isTextSecured: boolean;
  textSecuredAdornment?: ReactNode;
  textInsecuredAdornment?: ReactNode;
  onTextSecureClick: () => void;
  isLoading: boolean;
  errorAdornment?: ReactNode;
  clearAdornment?: ReactNode;
  loadingAdornment?: ReactNode;
  customAdornment?: ReactNode;
  onClearClick: () => void;
  isClearField: boolean;
  isError: boolean;
  isPasswordField: boolean;
  style?: ViewStyle;
};

export default AdornmentProps;
