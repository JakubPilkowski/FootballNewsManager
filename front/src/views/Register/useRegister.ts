import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApolloError, useMutation } from '@apollo/client';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { REGISTER, RegisterResponse, RegisterVariables, ResponseError } from 'api/mutations/auth';

import { RootStackParamList } from 'common/Routing/Routing';

import { MainStackParamList } from 'views/Main/Main';

type RegisterNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Register'>,
  MaterialBottomTabNavigationProp<MainStackParamList>
>;
export default function useLogin(
  email: string,
  password1: string,
  password2: string,
  isDisabled: boolean
) {
  const { t } = useTranslation();
  const navigation = useNavigation<RegisterNavigationProp>();

  const [registerError, setRegisterError] = useState<string | null>(null);

  const [register, { loading }] = useMutation<RegisterResponse, RegisterVariables>(REGISTER);

  const onRegister = useCallback(() => {
    if (isDisabled) return;
    if (password1 !== password2) {
      setRegisterError(t('auth:passwords_do_not_match'));
      return;
    }
    setRegisterError('');
    register({
      variables: {
        email,
        password1,
        password2,
      },
    })
      .then(({ data }) => {
        if (data?.register.errors) {
          const errors = data.register.errors;
          const errorKeys = Object.keys(errors) as [keyof ResponseError];
          const firstError = errorKeys[0];
          setRegisterError(t(`auth:register_${firstError}_${errors[firstError][0].code}`));
        } else {
          navigation.replace('ConfirmEmail');
        }
      })
      .catch((err: any) => {
        if (err instanceof ApolloError) setRegisterError(err.message);
      });
  }, [email, isDisabled, navigation, password1, password2, register, t]);

  return {
    onRegister,
    loading,
    registerError,
  };
}
