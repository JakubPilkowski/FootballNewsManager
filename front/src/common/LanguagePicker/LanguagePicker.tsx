import React, { memo, useEffect, useRef, useState } from 'react';
import { ScrollViewProps, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';

import useTheme from 'utils/themeProvider/useTheme';

import { LANGUAGE_CODE_TYPE } from 'i18n/languageDetector';
import LANGUAGES from 'i18n/languages';

import ClickAway from 'common/ClickAway';

import ArrowDown from 'assets/svgs/ArrowDown';
import ArrowUp from 'assets/svgs/ArrowUp';

import getPickerStyles from './LanguagePicker.styles';

const scrollViewProps = {
  decelerationRate: 'fast',
  overScrollMode: 'never',
  // fadingEdgeLength: 20,
  persistentScrollbar: true,
  style: {
    backgroundColor: '#6bba62',
  },
  contentContainerStyle: {
    backgroundColor: '#6bba62',
  },
} as ScrollViewProps;

const LanguagePicker = () => {
  const { t, i18n } = useTranslation();
  const childrenIds = useRef([]);
  const [theme] = useTheme();

  const pickerStyles = getPickerStyles(theme);

  const [language, setLanguage] = useState<LANGUAGE_CODE_TYPE>(i18n.language as LANGUAGE_CODE_TYPE);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(
    LANGUAGES.map((lng) => ({ label: t(lng.key), value: lng.key }))
  );

  const handleImageChange = (val: ValueType | ValueType[] | null) => {
    i18n.changeLanguage(val as LANGUAGE_CODE_TYPE);
  };

  useEffect(() => {
    setItems(LANGUAGES.map((lng) => ({ label: t(lng.key), value: lng.key })));
  }, [language]);

  return (
    <>
      <ClickAway
        show={open}
        onClickOutside={() => setOpen(false)}
        childrenIds={childrenIds.current}
      />
      <View
        ref={(component) => {
          childrenIds.current = component?._children[0]._children.map((el) => el._nativeTag);
        }}>
        <DropDownPicker
          items={items}
          value={language}
          disableBorderRadius
          onChangeValue={handleImageChange}
          setValue={setLanguage}
          open={open}
          setOpen={setOpen}
          setItems={setItems}
          style={pickerStyles.styles}
          dropDownContainerStyle={pickerStyles.dropDownContainerStyles}
          listItemContainerStyle={pickerStyles.listItemContainerStyles}
          labelStyle={pickerStyles.labelStyles}
          listItemLabelStyle={pickerStyles.listItemLabelStyles}
          selectedItemContainerStyle={pickerStyles.selectedItemContainerStyles}
          selectedItemLabelStyle={pickerStyles.selectedItemLabelStyles}
          showTickIcon={false}
          ArrowDownIconComponent={() => <ArrowDown />}
          ArrowUpIconComponent={() => <ArrowUp />}
          mode="SIMPLE"
          listMode="SCROLLVIEW"
          scrollViewProps={scrollViewProps}
        />
      </View>
    </>
  );
};

export default memo(LanguagePicker);
