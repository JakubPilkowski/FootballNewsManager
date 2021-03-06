import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApolloError, useMutation } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { LOGIN, LoginResponse, LoginVariables } from 'api/mutations/auth';

import { RootStackParamList } from 'common/Routing/Routing';

import { MainStackParamList } from 'views/Main/Main';
import useAuthentication from 'common/Routing/useAuthentication';

type LoginNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Login'>,
  MaterialBottomTabNavigationProp<MainStackParamList>
>;
export default function useLogin(email: string, password: string, isDisabled: boolean) {
  const { t } = useTranslation();
  const navigation = useNavigation<LoginNavigationProp>();
  const { login } = useAuthentication();

  const [loginError, setLoginError] = useState<string | null>(null);

  const [tokenAuth, { loading }] = useMutation<LoginResponse, LoginVariables>(LOGIN);

  const onNavigate = useCallback(
    (route: keyof RootStackParamList | keyof MainStackParamList) => () => {
      navigation.navigate(route);
    },
    [navigation]
  );

  const onLogin = useCallback(() => {
    if (isDisabled) return;
    setLoginError('');
    tokenAuth({
      variables: {
        email,
        password,
      },
    })
      .then(({ data }) => {
        if (data?.tokenAuth.errors) {
          setLoginError(t(`auth:${data.tokenAuth.errors.nonFieldErrors[0]?.code}`));
        } else {
          login(data?.tokenAuth.token as string);
          // AsyncStorage.setItem('authentication_token', data?.tokenAuth.token as string);
          // onNavigate('Main')();
        }
      })
      .catch((err: any) => {
        if (err instanceof ApolloError) setLoginError(err.message);
      });
  }, [isDisabled, tokenAuth, email, password, t, login]);

  return {
    onLogin,
    onNavigate,
    loading,
    loginError,
  };
}
