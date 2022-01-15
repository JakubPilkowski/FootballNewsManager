import React, { useState } from 'react';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ForgotPassword from 'views/ForgotPassword';
import Login from 'views/Login';
import Main from 'views/Main';
import Register from 'views/Register';
import ConfirmEmail from 'views/ConfirmEmail';
// import Settings from 'views/Settings';
// import ContentView from 'views/ContentView';
import { MainStackParamList } from 'views/Main/Main';

import AuthenticationRoute from './AuthenticationRoute';
import { View } from 'react-native';
import useTheme from 'utils/themeProvider/useTheme';

export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  ConfirmEmail: undefined;
  Main: NavigatorScreenParams<MainStackParamList>;
  ContentView: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routing: React.FC = () => {
  const [theme] = useTheme();
  return (
    <View style={{ backgroundColor: theme.colors.layoutPrimary, flex: 1 }}>
      <NavigationContainer>
        <AuthenticationRoute>
          {(authenticated) => (
            <Stack.Navigator initialRouteName={authenticated ? 'Main' : 'Login'}>
              <Stack.Group
                screenOptions={{
                  headerTransparent: true,
                  title: '',
                  headerShadowVisible: false,
                  headerShown: false,
                  animation: 'none',
                  // animationTypeForReplace: ''
                }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
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
    </View>
  );
};

export default Routing;
