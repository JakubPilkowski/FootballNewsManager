import React, { memo, useEffect } from 'react';
import { View, ViewStyle } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@apollo/client';

import { LOGIN, LoginResponse, LoginVariables } from 'api/mutations/auth';

import { RootStackParamList } from 'common/Routing/Routing';
import LanguageToggle from 'common/LanguageToggle';

import { MainStackParamList } from 'views/Main/Main';
import { useTranslation } from 'react-i18next';
import { NAMESPACES } from 'i18n/i18n';
import ThemedButton from 'common/ThemedButton/ThemedButton';

type LoginProps = {};

// type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type LoginNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Login'>,
  MaterialBottomTabNavigationProp<MainStackParamList>
>;

const loginButtonStyles = {
  marginTop: 40,
} as ViewStyle;

const Login: React.FC<LoginProps> = () => {
  const { t } = useTranslation<NAMESPACES>('auth');

  const navigation = useNavigation<LoginNavigationProp>();

  const [login] = useMutation<LoginResponse, LoginVariables>(LOGIN);

  const handleNavigate = (route: keyof RootStackParamList | keyof MainStackParamList) => () => {
    navigation.navigate(route);
  };

  const handleLogin = () => {
    login({
      variables: {
        email: 'pilkowskijakub@gmail.com',
        password: 'supersecretpassword',
      },
    })
      .then(({ data }) => {
        AsyncStorage.setItem('authentication_token', data?.tokenAuth.token as string);
        navigation.navigate('Main');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <View>
        <ThemedButton onPress={handleLogin} styles={loginButtonStyles} title={t('login')} />
        <ThemedButton
          onPress={handleNavigate('Register')}
          styles={loginButtonStyles}
          title={t('register')}
        />
        <ThemedButton
          onPress={handleNavigate('ForgotPassword')}
          styles={loginButtonStyles}
          title={t('forgot_password')}
        />
      </View>
      <LanguageToggle />
    </View>
  );
};

export default memo(Login);