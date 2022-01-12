import React, { memo } from 'react';
import ToggleSwitch from 'toggle-switch-react-native';

import ThemedSwitchProps from './ThemedSwitch.types';

const ThemedSwitch: React.FC<ThemedSwitchProps> = ({
  checked,
  label,
  name,
  onToggle,
  disabled = false,
}) => {
  const handleToggle = (isOn: boolean) => {
    onToggle({ checked: isOn, name: name || '' });
  };

  return (
    <ToggleSwitch
      isOn={checked}
      label={label}
      labelStyle={{}}
      onToggle={handleToggle}
      trackOnStyle={{}}
      trackOffStyle={{}}
      disabled={disabled}
    />
  );
};

export default memo(ThemedSwitch);
