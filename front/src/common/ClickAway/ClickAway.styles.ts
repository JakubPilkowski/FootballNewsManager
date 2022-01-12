/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Theme } from 'assets/styles/themes';
import { Dimensions, ViewStyle } from 'react-native';
import { ViewLayout } from './ClickAway.types';

type ClickAwayOptions = {
  show: boolean;
  layout: ViewLayout | null;
};

type ClickAwayStyles = {
  clickAway: ViewStyle;
};

export default (theme: Theme, options: ClickAwayOptions): ClickAwayStyles => {
  const { show, layout } = options;
  const { width, height } = Dimensions.get('window');
  return {
    clickAway: {
      position: 'absolute',
      width: show ? width : 0,
      height: show ? height : 0,
      left: layout ? layout.pageX * -1 : 0,
      top: layout ? layout.pageY * -1 : 0,
      zIndex: 50,
    },
  };
};
