import React, { memo, useEffect, useState } from 'react';
import { Platform, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getOrientationAsync } from 'expo-screen-orientation';
import useTheme from 'utils/themeProvider/useTheme';

import styles from './ViewWrapper.styles';
import ViewWrapperProps from './ViewWrapper.types';
import LoadingDialog from 'common/LoadingDialog';
import { useOrientation } from 'hooks/useOrientation';

const ViewWrapper: React.FC<ViewWrapperProps> = ({
  wrapperStyles = {},
  wrapperContainerStyles = {},
  containerStyles = {},
  loading = false,
  children,
}) => {
  const [theme, { scheme }] = useTheme();

  const orientation = useOrientation();

  const viewWrapperStyles = styles(theme, {
    wrapperStyles,
    wrapperContainerStyles,
    containerStyles,
  });

  return (
    <KeyboardAwareScrollView
      style={viewWrapperStyles.wrapperStyles}
      contentContainerStyle={viewWrapperStyles.wrapperContainerStyles}
      scrollEnabled
      extraScrollHeight={orientation === 'PORTRAIT' ? 100 : 0}
      overScrollMode="never"
      keyboardShouldPersistTaps="handled"
      enableOnAndroid>
      <StatusBar
        barStyle={
          scheme === 'dark' || scheme === 'no-preference' ? 'light-content' : 'dark-content'
        }
        translucent
        backgroundColor="transparent"
      />
      <SafeAreaView style={viewWrapperStyles.containerStyles}>{children}</SafeAreaView>
      <LoadingDialog visible={loading} />
    </KeyboardAwareScrollView>
  );
};

export default memo(ViewWrapper);
