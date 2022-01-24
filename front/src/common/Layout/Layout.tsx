import React, { FC, memo, ReactNode } from 'react';
import { View } from 'react-native';

import useTheme from 'utils/themeProvider/useTheme';

import getLayoutStyles from './Layout.styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const [theme] = useTheme();

  const { layoutStyles } = getLayoutStyles(theme);

  return <View style={layoutStyles}>{children}</View>;
};

export default memo(Layout);
