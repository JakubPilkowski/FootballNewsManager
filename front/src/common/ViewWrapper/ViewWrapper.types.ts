import React from 'react';
import { ViewStyle } from 'react-native';

type ViewWrapperProps = {
  wrapperStyles?: ViewStyle;
  wrapperContainerStyles?: ViewStyle;
  containerStyles?: ViewStyle;
  loading?: boolean;
  children: React.ReactNode;
};

export default ViewWrapperProps;
