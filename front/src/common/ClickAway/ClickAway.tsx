import React, { FC, memo, useState } from 'react';
import { Touchable, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';

import useTheme from 'utils/themeProvider/useTheme';

import ClickAwayProps, { ViewLayout } from './ClickAway.types';
import styles from './ClickAway.styles';

const ClickAway: FC<ClickAwayProps> = ({ childrenIds, onClickOutside, show }) => {
  const [theme] = useTheme();
  const [layout, setLayout] = useState<ViewLayout | null>(null);

  const clickAwayStyles = styles(theme, { layout, show });

  return (
    <View
      onStartShouldSetResponder={(evt) => {
        if (!childrenIds.includes(evt.target)) {
          onClickOutside();
        }
        return false;
      }}
      onLayout={(event) => {
        event.target.measure(
          (x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
            if (!layout) {
              setLayout({ x, y, width, height, pageX, pageY });
            }
          }
        );
      }}
      style={clickAwayStyles.clickAway}
    />
  );
};

export default memo(ClickAway);
