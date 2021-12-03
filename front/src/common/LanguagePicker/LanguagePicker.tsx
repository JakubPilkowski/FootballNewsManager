import React, { memo, useState } from 'react';
import { ScrollViewProps } from 'react-native';
import { useTranslation } from 'react-i18next';
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';

import { LANGUAGE_CODE_TYPE } from 'i18n/languageDetector';
import LANGUAGES from 'i18n/languages';

import {
  containerStyles,
  dropDownContainerStyles,
  labelStyles,
  listItemContainerStyles,
  listItemLabelStyles,
  selectedItemContainerStyles,
  selectedItemLabelStyles,
  styles,
} from './LanguagePicker.styles';

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

  const [language, setLanguage] = useState<LANGUAGE_CODE_TYPE>(i18n.language as LANGUAGE_CODE_TYPE);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(
    LANGUAGES.map((lng) => ({ label: t(lng.key), value: lng.key }))
  );

  const handleImageChange = (val: ValueType | ValueType[] | null) => {
    i18n.changeLanguage(val as LANGUAGE_CODE_TYPE);
  };

  return (
    <DropDownPicker
      items={items}
      value={language}
      disableBorderRadius
      onChangeValue={handleImageChange}
      setValue={setLanguage}
      open={open}
      setOpen={setOpen}
      setItems={setItems}
      style={styles}
      containerStyle={containerStyles}
      dropDownContainerStyle={dropDownContainerStyles}
      listItemContainerStyle={listItemContainerStyles}
      labelStyle={labelStyles}
      listItemLabelStyle={listItemLabelStyles}
      selectedItemContainerStyle={selectedItemContainerStyles}
      selectedItemLabelStyle={selectedItemLabelStyles}
      itemSeparator
      showTickIcon={false}
      mode="SIMPLE"
      listMode="SCROLLVIEW"
      scrollViewProps={scrollViewProps}
    />
  );
};

export default memo(LanguagePicker);
