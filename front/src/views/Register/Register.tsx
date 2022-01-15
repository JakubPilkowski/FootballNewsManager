import React, { memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TextInput } from 'react-native';
import { isEmpty } from 'lodash';

import { NAMESPACES } from 'i18n/i18n';

import useForm from 'hooks/useForm';
import useToggle from 'hooks/useToggle';

import ThemedButton from 'common/ThemedButton';
import ThemedTextfield from 'common/ThemedTextfield';
import ViewWrapper from 'common/ViewWrapper';

import useTheme from 'utils/themeProvider/useTheme';

import PlayerIcon from 'assets/svgs/PlayerIcon';

import useRegister from './useRegister';
import getRegisterViewStyles from './Register.styles';

const Register = () => {
  const { t } = useTranslation<NAMESPACES>('auth');
  const emailRef = useRef<TextInput>(null);
  const firstPasswordRef = useRef<TextInput>(null);
  const secondPasswordRef = useRef<TextInput>(null);
  const [theme] = useTheme();

  const { titleStyles, buttonWrapperStyles, containerStyles, errorTextStyles } =
    getRegisterViewStyles(theme);

  const [isFirstPasswordTextSecured, { toggle: secureFirstPasswordTextToggle }] = useToggle(true);
  const [isSecondPasswordTextSecured, { toggle: secureSecondPasswordTextToggle }] = useToggle(true);

  const [
    {
      email: { value: emailValue, error: emailError },
      password1: { value: password1Value, error: password1Error },
      password2: { value: password2Value, error: password2Error },
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
    password1: {
      value: '',
      validators: [
        {
          validator: /[a-zA-Z0-9].{8,24}/g,
          error: 'invalid_login_password',
        },
      ],
      error: '',
    },
    password2: {
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
    Boolean(emailError) ||
    isEmpty(emailValue) ||
    Boolean(password1Error) ||
    isEmpty(password1Value) ||
    Boolean(password2Error) ||
    isEmpty(password2Value);

  const { onRegister, loading, registerError } = useRegister(
    emailValue,
    password1Value,
    password2Value,
    isLoginButtonDisabled
  );

  return (
    <ViewWrapper loading={loading}>
      <View style={containerStyles}>
        <PlayerIcon />

        <Text style={titleStyles}>{t('auth:register')}</Text>

        <ThemedTextfield
          value={emailValue}
          onChange={onChange}
          name="email"
          label={t('email')}
          onClearClick={onChange}
          onSubmit={() => firstPasswordRef.current?.focus()}
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
          value={password1Value}
          onChange={onChange}
          name="password1"
          label={t('password')}
          fieldType="passwordfield"
          onClearClick={onChange}
          onSubmit={() => secondPasswordRef.current?.focus()}
          isTextSecured={isFirstPasswordTextSecured}
          onTextSecureClick={secureFirstPasswordTextToggle}
          props={{
            returnKeyType: 'next',
            blurOnSubmit: false,
          }}
          ref={firstPasswordRef}
          error={password1Error && t(`auth:${password1Error}`)}
          hasErrorAdornment={false}
        />

        <ThemedTextfield
          value={password2Value}
          onChange={onChange}
          name="password2"
          label={t('repeat_password')}
          fieldType="passwordfield"
          onClearClick={onChange}
          onSubmit={onRegister}
          isTextSecured={isSecondPasswordTextSecured}
          onTextSecureClick={secureSecondPasswordTextToggle}
          props={{
            returnKeyType: 'go',
          }}
          ref={secondPasswordRef}
          error={password2Error && t(`auth:${password2Error}`)}
          hasErrorAdornment={false}
        />

        <ThemedButton
          onPress={onRegister}
          wrapperStyles={buttonWrapperStyles}
          title={t('register')}
          disabled={isLoginButtonDisabled}
        />

        <Text style={errorTextStyles}>{registerError}</Text>
      </View>
    </ViewWrapper>
  );
};

export default memo(Register);
