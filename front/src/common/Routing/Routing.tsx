import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';

import ForgotPassword from 'views/ForgotPassword';
import Login from 'views/Login';
import Main from 'views/Main';
import Register from 'views/Register';
import AccountVerification from 'views/AccountVerification';
// import Settings from 'views/Settings';
// import ContentView from 'views/ContentView';
import { MainStackParamList } from 'views/Main/Main';

import useAuthentication from './useAuthentication';

export type RootStackParamList = {
  Register: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Main: NavigatorScreenParams<MainStackParamList>;
  ContentView: undefined;
  Settings: undefined;
  AccountVerification: { email: string };
};

const prefix = Linking.createURL('/');

const config = {
  screens: {
    Register: 'register',
    Login: 'login',
    ForgotPassword: 'forgot-password',
    Main: {
      path: 'main',
      screens: {
        News: 'news',
        Sites: 'sites',
        Teams: 'teams',
      },
    },
    // ContentView: '',
    // Settings: '';
    AccountVerification: 'account-verification',
  },
};

const linking = {
  prefixes: [prefix],
  config,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routing: React.FC = () => {
  const { isLoggedIn } = useAuthentication();
  return (
    <NavigationContainer linking={linking} fallback={<Text>Ładowanie...</Text>}>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Group
            screenOptions={{
              headerTransparent: true,
              title: '',
              headerShadowVisible: false,
              headerShown: false,
              animation: 'none',
              // animationTypeForReplace: ''
            }}>
            <Stack.Screen name="Main" component={Main} />
          </Stack.Group>
        ) : (
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
            <Stack.Screen name="AccountVerification" component={AccountVerification} />
            {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
           <Stack.Screen name="ContentView" component={ContentView} /> 
             <Stack.Screen name="Settings" component={Settings} /> 
             </Stack.Group> */}
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
