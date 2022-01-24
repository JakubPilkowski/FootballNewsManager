import React, { memo, useRef } from 'react';
import { View, TextInput, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash';

import useForm from 'hooks/useForm';
import useToggle from 'hooks/useToggle';

import { NAMESPACES } from 'i18n/i18n';

import useTheme from 'utils/themeProvider/useTheme';

import LanguagePicker from 'common/LanguagePicker';
import ThemedButton from 'common/ThemedButton/ThemedButton';
import ViewWrapper from 'common/ViewWrapper';
import ThemedTextfield from 'common/ThemedTextfield';

import PlayerIcon from 'assets/svgs/PlayerIcon';

import useLogin from './useLogin';
import getLoginViewStyles from './Login.styles';

type LoginProps = { [key: string]: never };

const Login: React.FC<LoginProps> = () => {
  const { t } = useTranslation<NAMESPACES>('auth');
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const [theme] = useTheme();
  const {
    underlineButtonStyles,
    titleStyles,
    loginButtonWrapper,
    loginContainer,
    loginErrorTextStyles,
  } = getLoginViewStyles(theme);

  const [isTextSecured, { toggle: secureTextToggle }] = useToggle(true);

  const [
    {
      email: { value: emailValue, error: emailError },
      password: { value: passwordValue, error: passwordError },
    },
    { onChange },
  ] = useForm({
    email: {
      value: '',
      validators: [
        {
          validator: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          error: 'invalid_email',
        },
      ],
      error: '',
    },
    password: {
      value: '',
      validators: [
        {
          validator: /[a-zA-Z0-9].{8,24}/g,
          error: 'invalid_login_password',
        },
      ],
      error: '',
    },
  });

  const isLoginButtonDisabled =
    Boolean(emailError) || isEmpty(emailValue) || Boolean(passwordError) || isEmpty(passwordValue);

  const { onLogin, onNavigate, loading, loginError } = useLogin(
    emailValue,
    passwordValue,
    isLoginButtonDisabled
  );

  return (
    <ViewWrapper loading={loading}>
      <View style={loginContainer}>
        <LanguagePicker />

        <PlayerIcon />

        <Text style={titleStyles}>Football News Manager</Text>

        <ThemedTextfield
          value={emailValue}
          onChange={onChange}
          name="email"
          label={t('email')}
          onClearClick={onChange}
          onSubmit={() => passwordRef.current?.focus()}
          props={{
            returnKeyType: 'next',
            blurOnSubmit: false,
            keyboardType: 'email-address',
          }}
          ref={emailRef}
          error={emailError && t(`auth:${emailError}`)}
          hasErrorAdornment={false}
        />

        <ThemedTextfield
          value={passwordValue}
          onChange={onChange}
          name="password"
          label={t('password')}
          fieldType="passwordfield"
          onClearClick={onChange}
          onSubmit={onLogin}
          isTextSecured={isTextSecured}
          onTextSecureClick={secureTextToggle}
          props={{
            returnKeyType: 'go',
          }}
          ref={passwordRef}
          error={passwordError && t(`auth:${passwordError}`)}
          hasErrorAdornment={false}
        />

        <ThemedButton
          onPress={onLogin}
          wrapperStyles={loginButtonWrapper}
          title={t('login')}
          disabled={isLoginButtonDisabled}
        />

        <ThemedButton
          onPress={onNavigate('Register')}
          textStyles={underlineButtonStyles}
          title={t('register')}
          variant="underline"
        />
        <ThemedButton
          onPress={onNavigate('ForgotPassword')}
          textStyles={underlineButtonStyles}
          title={t('forgot_password')}
          variant="underline"
        />

        <Text style={loginErrorTextStyles}>{loginError}</Text>
      </View>
    </ViewWrapper>
  );
};

export default memo(Login);
