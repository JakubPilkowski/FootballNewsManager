import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';

import useTheme from 'utils/themeProvider/useTheme';

const ArrowUp = () => {
  const [theme] = useTheme();
  return (
    <Svg viewBox="0 0 24 24" width={24} height={24}>
      <Path
        d="M 12 8 L 6 14 L 7.41 15.41 L 12 10.83 L 16.59 15.41 L 18 14 Z"
        fill={theme.colors.textLight}
      />
    </Svg>
  );
};

export default memo(ArrowUp);
