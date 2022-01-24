import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

import { NAMESPACES } from 'i18n/i18n';

import ThemedButton from 'common/ThemedButton';
import ViewWrapper from 'common/ViewWrapper';

import useTheme from 'utils/themeProvider/useTheme';

import PlayerIcon from 'assets/svgs/PlayerIcon';

import useResendActivationEmail from './useResendActivationEmail';
import getVerifyAccountStyles from './AccountVerification.styles';

type AccountVerificationProps = {
  email: string;
};

const AccountVerification: FC<AccountVerificationProps> = ({ email }) => {
  const { t } = useTranslation<NAMESPACES>('auth');
  const [theme] = useTheme();

  const {
    titleStyles,
    infoTextStyles,
    buttonWrapperStyles,
    containerStyles,
    errorTextStyles,
    messageTextStyles,
  } = getVerifyAccountStyles(theme);

  const {
    onResendActivationEmail,
    loading,
    resendActivationEmailMessage,
    resendActivationEmailError,
  } = useResendActivationEmail(email);

  return (
    <ViewWrapper loading={loading}>
      <View style={containerStyles}>
        <PlayerIcon />

        <Text style={titleStyles}>{t('verify_account')}</Text>
        <Text style={infoTextStyles}>{t('verify_account_info_1')}</Text>
        <Text style={infoTextStyles}>{t('verify_account_info_2')}</Text>

        <ThemedButton
          onPress={onResendActivationEmail}
          wrapperStyles={buttonWrapperStyles}
          title={t('resend_activation_email')}
        />

        {resendActivationEmailError && (
          <Text style={errorTextStyles}>{resendActivationEmailError}</Text>
        )}
        {resendActivationEmailMessage && (
          <Text style={messageTextStyles}>{resendActivationEmailMessage}</Text>
        )}
      </View>
    </ViewWrapper>
  );
};

export default memo(AccountVerification);
