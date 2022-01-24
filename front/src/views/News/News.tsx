import React, { memo } from 'react';
import { View, Text, Button } from 'react-native';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';

import client from 'api/client';

import { RootStackParamList } from 'common/Routing/Routing';

import { MainStackParamList } from 'views/Main/Main';
import useAuthentication from 'common/Routing/useAuthentication';

type NewsNavigationProp = CompositeNavigationProp<
  MaterialBottomTabNavigationProp<MainStackParamList, 'News'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const News = () => {
  const navigation = useNavigation<NewsNavigationProp>();
  const { logout } = useAuthentication();

  return (
    <View>
      <Text style={{ marginTop: 50 }}>News</Text>
      <Button onPress={logout} title="Logout" />
    </View>
  );
};

export default memo(News);
