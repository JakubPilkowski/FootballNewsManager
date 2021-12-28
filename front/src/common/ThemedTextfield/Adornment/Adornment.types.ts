import { ReactNode } from 'react';

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
};

export default AdornmentProps;
