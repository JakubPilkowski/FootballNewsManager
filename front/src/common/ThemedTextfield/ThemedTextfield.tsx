import React, { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import {
  TextInput,
  View,
  Pressable,
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

const ThemedTextfield: React.FC<ThemedTextfieldProps> = ({
  label,
  autoFocus = false,
  name,
  value,
  onChange,
  disabled,
  wrapperStyles = {},
  containerStyles = {},
  inputStyles = {},
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
  startAdornment,
  errorAdornment,
  clearAdornment,
  loadingAdornment,
  customAdornment,
  onClearClick,
  onFocus = () => {},
  onBlur = () => {},
  onSubmit = () => {},
  props,
}) => {
  const textInputRef = useRef<TextInput>(null);

  const [theme, { scheme }] = useTheme();

  const [isFocused, { setTrue, setFalse }] = useToggle(autoFocus);

  const {
    wrapperStyles: wrapper,
    containerStyles: container,
    inputStyles: input,
  } = themedTextfieldStyles(theme);

  const textfieldWrapperStyles = useMemo(
    () => ({
      ...wrapper,
      ...wrapperStyles,
    }),
    [wrapper, wrapperStyles]
  );

  const textfieldContainerStyles = useMemo(
    () => ({
      ...container,
      ...containerStyles,
    }),
    [container, containerStyles]
  );

  const textfieldInputStyles = useMemo(
    () => ({
      ...input,
      ...inputStyles,
    }),
    [input, inputStyles]
  );

  useEffect(() => {
    if (isFocused && !textInputRef.current?.isFocused()) {
      textInputRef.current?.focus();
      onFocus(name);
    } else if (!isFocused && textInputRef.current?.isFocused()) {
      textInputRef.current.blur();
      onBlur(name);
    }
  }, [isFocused, name, onBlur, onFocus]);

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
    <View style={textfieldWrapperStyles}>
      <Pressable style={textfieldContainerStyles} onPress={setTrue}>
        {startAdornment}
        {label && (
          <Label
            label={label}
            open={isFocused || Boolean(value)}
            onLabelClick={setTrue}
            disabled={disabled}
          />
        )}
        <TextInput
          value={value}
          keyboardAppearance={scheme === 'no-preference' || scheme === 'dark' ? 'dark' : 'light'}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          autoCorrect={false}
          allowFontScaling={false}
          autoCompleteType="off"
          style={textfieldInputStyles}
          onFocus={setTrue}
          onBlur={setFalse}
          editable={!disabled}
          selectionColor={theme.colors.primary}
          ref={textInputRef}
          onChangeText={handleTextChange}
          secureTextEntry={isTextSecured}
          placeholder=""
          onSubmitEditing={handleSubmit}
          {...props}
        />
        <Adornment
          isClearField={!hideClearIcon && Boolean(value)}
          isError={Boolean(error)}
          isPasswordField={fieldType === 'passwordfield'}
          isTextSecured={isTextSecured}
          isLoading={isLoading}
          onClearClick={handleClearClick}
          onTextSecureClick={onTextSecureClick}
          clearAdornment={clearAdornment}
          customAdornment={customAdornment}
          errorAdornment={errorAdornment}
          loadingAdornment={loadingAdornment}
          textInsecuredAdornment={textInsecuredAdornment}
          textSecuredAdornment={textSecuredAdornment}
        />
      </Pressable>
      {Boolean(helperText) && <HelperText text={helperText} />}
      {Boolean(error) && <HelperText text={error} isError={Boolean(error)} />}
    </View>
  );
};

export default memo(ThemedTextfield);
