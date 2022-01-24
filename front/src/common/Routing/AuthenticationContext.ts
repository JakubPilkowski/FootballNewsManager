import { createContext } from 'react';

export type AuthenticationContextType = {
  login: (token: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
};

export const AuthenticationContext = createContext<AuthenticationContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
