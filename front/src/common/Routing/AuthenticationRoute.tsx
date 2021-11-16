import React, { memo, ReactElement, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { VALIDATE_TOKEN, ValidateTokenResponse, ValidateTokenVariables } from 'mutations/auth';

type AuthenticationRouteProps = {
  children: (result: boolean) => ReactElement;
};

const AuthenticationRoute: React.FC<AuthenticationRouteProps> = ({ children }) => {
  const [verifyToken, { data, loading, error }] = useMutation<
    ValidateTokenResponse,
    ValidateTokenVariables
  >(VALIDATE_TOKEN);

  const [isTokenFetching, setTokenFetching] = useState(true);
  const [authToken, setAuthToken] = useState<string | null>();

  useEffect(() => {
    AsyncStorage.getItem('authentication_token').then((token) => {
      if (token) {
        setAuthToken(token);
        verifyToken({ variables: { token } });
      }
      setTokenFetching(false);
    });
  }, [verifyToken]);

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  if (!isTokenFetching && !authToken) {
    return <>{children(!!authToken)}</>;
  }

  if (!data || loading || isTokenFetching) {
    return (
      <View>
        <Text>Ładowanie...</Text>
      </View>
    );
  }

  const { success } = data.verifyToken;
  return <>{children(success)}</>;
};

export default memo(AuthenticationRoute);
