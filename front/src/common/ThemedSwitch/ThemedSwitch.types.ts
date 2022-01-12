export type OnSwitchToggle = { checked: boolean; name: string };

type ThemedSwitchProps = {
  checked: boolean;
  label: string;
  name?: string;
  onToggle: ({ checked, name }: OnSwitchToggle) => void;
  disabled?: boolean;
};

export default ThemedSwitchProps;
