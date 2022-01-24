import React, { memo, ReactNode, useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

import client from 'api/client';

import { VALIDATE_TOKEN, ValidateTokenResponse, ValidateTokenVariables } from 'mutations/auth';

import { AuthenticationContext } from './AuthenticationContext';
import { useTranslation } from 'react-i18next';
import LoadingDialog from 'common/LoadingDialog';

type AuthenticationProviderProps = {
  children: ReactNode;
};

const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({ children }) => {
  const [verifyToken, { loading }] = useMutation<ValidateTokenResponse, ValidateTokenVariables>(
    VALIDATE_TOKEN
  );

  const { t } = useTranslation('base');
  const [isTokenFetching, setTokenFetching] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('authentication_token').then((token) => {
      if (token) {
        verifyToken({ variables: { token } }).then((data) => {
          setLoggedIn(Boolean(data.data?.verifyToken.success));
        });
      }
      setTokenFetching(false);
    });
  }, [verifyToken]);

  const handleLogin = useCallback(async (authToken) => {
    await AsyncStorage.setItem('authentication_token', authToken);
    setLoggedIn(true);
  }, []);

  const handleLogout = useCallback(async () => {
    await AsyncStorage.removeItem('authentication_token');
    await client.clearStore();
    setLoggedIn(false);
  }, []);

  if (loading || isTokenFetching) {
    return <LoadingDialog visible title={`${t('loading')}...`} />;
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isLoggedIn,
        login: handleLogin,
        logout: handleLogout,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
export default memo(AuthenticationProvider);
