import { CompositeNavigationProp, useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import client from 'api/client';
import { RootStackParamList } from 'commmon/Routing/Routing';
import React, { memo } from 'react';
import { View, Text, Button } from 'react-native';
import { MainStackParamList } from 'views/Main/Main';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';

type NewsNavigationProp = CompositeNavigationProp<
  MaterialBottomTabNavigationProp<MainStackParamList, 'News'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const News = () => {
  const navigation = useNavigation<NewsNavigationProp>();

  const handleLogout = () => {
    client.resetStore().then(() => navigation.navigate('Login'));
  };
  return (
    <View>
      <Text style={{ marginTop: 50 }}>News</Text>
      <Button onPress={handleLogout} title="Logout" />
    </View>
  );
};

export default memo(News);
