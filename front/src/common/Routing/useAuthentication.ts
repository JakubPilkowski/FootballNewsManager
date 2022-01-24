import { useContext } from 'react';
import { AuthenticationContext, AuthenticationContextType } from './AuthenticationContext';

export default function useAuthentication(): AuthenticationContextType {
  return useContext<AuthenticationContextType>(AuthenticationContext);
}
