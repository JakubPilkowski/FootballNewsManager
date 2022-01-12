import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import useTheme from 'utils/themeProvider/useTheme';

const ArrowDown = () => {
  const [theme] = useTheme();
  return (
    <Svg viewBox="0 0 24 24" width={24} height={24}>
      <Path
        d="M 16.59 8.59 L 12 13.17 L 7.41 8.59 L 6 10 L 12 16 L 18 10 Z"
        fill={theme.colors.textLight}
      />
    </Svg>
  );
};

export default memo(ArrowDown);
