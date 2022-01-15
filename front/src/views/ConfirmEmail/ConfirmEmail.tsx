import React, { memo } from 'react';
import { View, Text } from 'react-native';

const ConfirmEmail = () => {
  return (
    <View>
      <Text>Na podany adres mailowy został wysłany link aktywacyjny</Text>
      <Text>Jeżeli nie otrzymałeś linku kliknij przycisk poniżej</Text>
    </View>
  );
};

export default memo(ConfirmEmail);
