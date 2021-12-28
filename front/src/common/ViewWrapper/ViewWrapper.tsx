import React, { memo, useMemo } from 'react';
import { ScrollView, StatusBar, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useTheme from 'utils/themeProvider/useTheme';

import styles from './ViewWrapper.styles';
import ViewWrapperProps from './ViewWrapper.types';

const ViewWrapper: React.FC<ViewWrapperProps> = ({ style = {}, children }) => {
  const [theme, { scheme }] = useTheme();

  const wrapperStyles = useMemo(
    () => ({
      ...style,
      ...styles(theme),
    }),
    [style, theme]
  );

  return (
    <ScrollView style={wrapperStyles} keyboardShouldPersistTaps="handled">
      <StatusBar
        barStyle={
          scheme === 'dark' || scheme === 'no-preference' ? 'light-content' : 'dark-content'
        }
        translucent
        backgroundColor="transparent"
      />
      <SafeAreaView>{children}</SafeAreaView>
    </ScrollView>
  );
};

export default memo(ViewWrapper);
