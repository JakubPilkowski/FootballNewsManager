import React, { FC, memo } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';

import useTheme from 'utils/themeProvider/useTheme';

import getLoadingDialogStyles from './LoadingDialog.styles';
import LoadingDialogProps from './LoadingDialog.types';

const LoadingDialog: FC<LoadingDialogProps> = ({ size = 54, visible = false }) => {
  const [theme] = useTheme();

  const { wrapperOuterStyles, wrapperInnerStyles } = getLoadingDialogStyles(theme);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      supportedOrientations={['portrait', 'landscape']}
      statusBarTranslucent>
      <View style={wrapperOuterStyles}>
        <View style={wrapperInnerStyles}>
          <ActivityIndicator color={theme.colors.primary} size={size} />
        </View>
      </View>
    </Modal>
  );
};

export default memo(LoadingDialog);
