import React, { memo, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/core';
import { RootStackParamList } from 'commmon/Routing/Routing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@apollo/client';
import { LOGIN, LoginResponse, LoginVariables } from 'api/mutations/auth';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { MainStackParamList } from 'views/Main/Main';

type LoginProps = {};

// type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type LoginNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Login'>,
  MaterialBottomTabNavigationProp<MainStackParamList>
>;

const Login: React.FC<LoginProps> = () => {
  const navigation = useNavigation<LoginNavigationProp>();

  const [login] = useMutation<LoginResponse, LoginVariables>(LOGIN);

  const handleGoRegister = () => {
    navigation.navigate('Register');
  };

  const handleGoForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  useEffect(() => {
    // AsyncStorage.setItem('authentication_token', '');
  }, []);

  const handleLogin = () => {
    login({
      variables: {
        email: 'pilkowskijakub@gmail.com',
        password: 'supersecretpassword',
      },
    })
      .then(({ data }) => {
        console.log(data);
        AsyncStorage.setItem('authentication_token', data?.tokenAuth.token as string);
        navigation.navigate('News');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <Text>Login</Text>
      <Button onPress={handleLogin} title="Login" />
      <Text>No Account?</Text>
      <Button onPress={handleGoRegister} title="Register" />
      <Text>Forgot Password?</Text>
      <Button onPress={handleGoForgotPassword} title="Forgot Password" />
    </View>
  );
};

export default memo(Login);
