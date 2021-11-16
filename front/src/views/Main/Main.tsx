import React, { memo } from 'react';
import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import images from 'assets/images';

import News from 'views/News';
import Sites from 'views/Sites';
import Teams from 'views/Teams';

import { bottomNavigationBarStyles, tabBarImageStyles } from './styles';

export type MainStackParamList = {
  News: undefined;
  Sites: undefined;
  Teams: undefined;
};

const BottomNavigation = createMaterialBottomTabNavigator<MainStackParamList>();

const Main = () => {
  return (
    <BottomNavigation.Navigator
      backBehavior="order"
      shifting
      activeColor="#6bba62"
      inactiveColor="#fff"
      barStyle={bottomNavigationBarStyles}>
      <BottomNavigation.Group>
        <BottomNavigation.Screen
          name="News"
          component={News}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={tabBarImageStyles}
                resizeMode="contain"
                source={focused ? images.logoGreen : images.logoWhite}
              />
            ),
          }}
        />
        <BottomNavigation.Screen
          name="Sites"
          component={Sites}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={tabBarImageStyles}
                resizeMode="contain"
                source={focused ? images.sitesGreen : images.sitesWhite}
              />
            ),
          }}
        />
        <BottomNavigation.Screen
          name="Teams"
          component={Teams}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={tabBarImageStyles}
                resizeMode="contain"
                source={focused ? images.shieldGreen : images.shieldWhite}
              />
            ),
          }}
        />
      </BottomNavigation.Group>
    </BottomNavigation.Navigator>
  );
};

export default memo(Main);
