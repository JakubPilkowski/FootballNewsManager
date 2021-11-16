import React, { useState } from 'react';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ForgotPassword from 'views/ForgotPassword';
import Login from 'views/Login';
import Main from 'views/Main';
import Register from 'views/Register';

import AuthenticationRoute from './AuthenticationRoute';
import Settings from 'views/Settings';
import ContentView from 'views/ContentView';
import { MainStackParamList } from 'views/Main/Main';

export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Main: NavigatorScreenParams<MainStackParamList>;
  ContentView: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routing = () => {
  return (
    <NavigationContainer>
      <AuthenticationRoute>
        {(authenticated) => (
          <Stack.Navigator initialRouteName={authenticated ? 'Main' : 'Login'}>
            <Stack.Group
              screenOptions={{
                headerTransparent: true,
                title: '',
                headerShadowVisible: false,
              }}>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name="Main" component={Main} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
              {/* <Stack.Screen name="ContentView" component={ContentView} /> */}
              {/* <Stack.Screen name="Settings" component={Settings} /> */}
            </Stack.Group>
          </Stack.Navigator>
        )}
      </AuthenticationRoute>
    </NavigationContainer>
  );
};

export default Routing;
