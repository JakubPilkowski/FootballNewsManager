import React, { memo, useEffect, useState } from 'react';
import { StatusBar, View, Text, ViewStyle } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@apollo/client';

import { LOGIN, LoginResponse, LoginVariables } from 'api/mutations/auth';

import { RootStackParamList } from 'common/Routing/Routing';
import LanguagePicker from 'common/LanguagePicker';

import { MainStackParamList } from 'views/Main/Main';
import { useTranslation } from 'react-i18next';
import { NAMESPACES } from 'i18n/i18n';
import ThemedButton from 'common/ThemedButton/ThemedButton';
import useTheme from 'utils/themeProvider/useTheme';
import ThemedSwitch, { OnSwitchToggle } from 'common/ThemedSwitch/ThemedSwitch';
import ViewWrapper from 'common/ViewWrapper';

type LoginProps = {};

// type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type LoginNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Login'>,
  MaterialBottomTabNavigationProp<MainStackParamList>
>;

const loginButtonStyles = {
  // marginTop: 40,
} as ViewStyle;

const Login: React.FC<LoginProps> = () => {
  const { t } = useTranslation<NAMESPACES>('auth');

  const [theme, { changeTheme, scheme }] = useTheme();
  const [checked, setChecked] = useState(scheme === 'dark' || scheme === 'no-preference');

  useEffect(() => {
    setChecked(scheme === 'dark' || scheme === 'no-preference');
  }, [scheme]);

  const handleDarkModeToggle = ({ checked }: OnSwitchToggle) => {
    setChecked(checked);
    changeTheme({ colorScheme: checked ? 'dark' : 'light' });
  };

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
    <ViewWrapper>
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
      {/* <View style={{ backgroundColor: 'red', marginBottom: 20, height: 500 }}>
        <Text>Hello</Text>
      </View>
      <View style={{ backgroundColor: 'red', marginBottom: 20, height: 500 }}>
        <Text>Hello</Text>
      </View>
      <View style={{ backgroundColor: 'red', marginBottom: 20, height: 500 }}>
        <Text>Hello</Text>
      </View>
      <View style={{ backgroundColor: 'red', marginBottom: 20, height: 500 }}>
        <Text>Hello</Text>
      </View>
      <View style={{ backgroundColor: 'red', marginBottom: 20, height: 500 }}>
        <Text>Hello</Text>
      </View>
      <View style={{ backgroundColor: 'red', marginBottom: 20, height: 500 }}>
        <Text>Hello</Text>
      </View> */}

      <ThemedSwitch checked={checked} onToggle={handleDarkModeToggle} label="Scheme" />
    </ViewWrapper>
  );
};

export default memo(Login);
