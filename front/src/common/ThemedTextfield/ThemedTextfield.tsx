import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import {
  TextInput,
  View,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import { isFunction } from 'lodash';

import useToggle from 'hooks/useToggle';
import useTheme from 'utils/themeProvider/useTheme';

import Adornment from './Adornment';
import HelperText from './HelperText';
import Label from './Label';

import themedTextfieldStyles from './ThemedTextfield.styles';
import ThemedTextfieldProps from './ThemedTextfield.types';

const ThemedTextfield = forwardRef<TextInput, ThemedTextfieldProps>(
  (
    {
      label,
      autoFocus = false,
      name,
      value,
      onChange,
      disabled,
      wrapperStyles = {},
      containerStyles = {},
      inputStyles = {},
      boxStyles = {},
      adornmentStyles = {},
      keyboardType = 'default',
      fieldType = 'textfield',
      helperText = '',
      error = '',
      isTextSecured = false,
      textSecuredAdornment,
      textInsecuredAdornment,
      onTextSecureClick = () => {},
      hideClearIcon = false,
      isLoading = false,
      hasLoadingAdornment = true,
      startAdornment,
      errorAdornment,
      hasErrorAdornment = true,
      clearAdornment,
      hasClearAdornment = true,
      hasPasswordAdornment = true,
      loadingAdornment,
      customAdornment,
      onClearClick,
      onFocus = () => {},
      onBlur = () => {},
      onSubmit = () => {},
      props,
    },
    ref
  ) => {
    const textInputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => textInputRef.current as TextInput);

    const [theme, { scheme }] = useTheme();

    const [isFocused, { setTrue, setFalse }] = useToggle(autoFocus);

    const hasAdornment =
      (!hideClearIcon && Boolean(value)) ||
      Boolean(error) ||
      fieldType === 'passwordfield' ||
      isTextSecured ||
      isLoading;

    const textfieldStyles = themedTextfieldStyles(theme, {
      wrapperStyles,
      containerStyles,
      boxStyles,
      inputStyles,
      adornmentStyles,
      hasAdornment,
    });

    const handleFocus = () => {
      setTrue();
      onFocus(name);
    };

    const handleBlur = () => {
      setFalse();
      onBlur(name);
    };

    useEffect(() => {
      if (isFocused && !textInputRef.current?.isFocused()) {
        textInputRef.current?.focus();
      } else if (!isFocused && textInputRef.current?.isFocused()) {
        textInputRef.current.blur();
      }
    }, [isFocused, name]);

    const handleTextChange = useCallback(
      (text: string) => {
        onChange({ name: name || '', value: text });
      },
      [name, onChange]
    );

    const handleClearClick = useCallback(() => {
      if (isFunction(onClearClick)) onClearClick({ name: name || '', value: '' });
    }, [name, onClearClick]);

    const handleSubmit = useCallback(
      (props: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        onSubmit(name, props);
      },
      [name, onSubmit]
    );

    return (
      <View style={textfieldStyles.wrapperStyles}>
        <View style={textfieldStyles.containerStyles}>
          {startAdornment}
          {label && (
            <Label
              label={label}
              open={isFocused || Boolean(value)}
              onLabelClick={setTrue}
              disabled={disabled}
            />
          )}
          <View style={textfieldStyles.boxStyles} />
          <TextInput
            value={value}
            keyboardAppearance={scheme === 'no-preference' || scheme === 'dark' ? 'dark' : 'light'}
            keyboardType={keyboardType}
            autoFocus={autoFocus}
            autoCorrect={false}
            allowFontScaling={false}
            autoCompleteType="off"
            style={textfieldStyles.inputStyles}
            onFocus={handleFocus}
            onBlur={handleBlur}
            editable={!disabled}
            selectionColor={theme.colors.primary}
            ref={textInputRef}
            onChangeText={handleTextChange}
            secureTextEntry={isTextSecured}
            placeholder=""
            onSubmitEditing={handleSubmit}
            disableFullscreenUI
            {...props}
          />
          <Adornment
            isClearField={!hideClearIcon && Boolean(value) && hasClearAdornment}
            isError={Boolean(error) && hasErrorAdornment}
            isPasswordField={fieldType === 'passwordfield' && hasPasswordAdornment}
            isTextSecured={isTextSecured}
            isLoading={isLoading && hasLoadingAdornment}
            onClearClick={handleClearClick}
            onTextSecureClick={onTextSecureClick}
            clearAdornment={clearAdornment}
            customAdornment={customAdornment}
            errorAdornment={errorAdornment}
            loadingAdornment={loadingAdornment}
            textInsecuredAdornment={textInsecuredAdornment}
            textSecuredAdornment={textSecuredAdornment}
            style={textfieldStyles.adornmentStyles}
          />
        </View>
        {Boolean(helperText) && <HelperText text={helperText} />}
        {Boolean(error) && <HelperText text={error} isError={Boolean(error)} />}
      </View>
    );
  }
);

export default memo(ThemedTextfield);
