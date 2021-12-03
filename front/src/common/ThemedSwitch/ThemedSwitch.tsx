import React, { memo } from 'react';
import ToggleSwitch from 'toggle-switch-react-native';

export type OnSwitchToggle = { checked: boolean; name: string };

type ThemedSwitchProps = {
  checked: boolean;
  label: string;
  name?: string;
  onToggle: ({ checked, name }: OnSwitchToggle) => void;
  disabled?: boolean;
};

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
      // onColor=""
      // offColor=""
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
