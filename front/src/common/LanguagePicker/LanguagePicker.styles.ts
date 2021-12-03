import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export const styles = {
  backgroundColor: '#e2e2e2',
  borderColor: 'transparent',
  width: '40%',
  minWidth: '40%',
  maxWidth: '100%',
  alignSelf: 'flex-end',
  marginRight: 15,
  padding: 0,
  borderRadius: 0,
} as StyleProp<ViewStyle>;

export const containerStyles = {
  marginBottom: 15,
} as StyleProp<ViewStyle>;

export const dropDownContainerStyles = {
  backgroundColor: '#ddd',
  alignSelf: 'flex-end',
  borderColor: 'transparent',
  width: '40%',
  minWidth: '40%',
  maxWidth: '100%',
  right: 20,
  borderRadius: 0,
} as StyleProp<ViewStyle>;

export const listItemContainerStyles = {
  backgroundColor: '#e2e2e2',
} as StyleProp<ViewStyle>;

export const labelStyles = {
  color: '#fff',
  fontSize: 16,
} as StyleProp<TextStyle>;

export const listItemLabelStyles = {
  color: '#fff',
  fontSize: 16,
} as StyleProp<TextStyle>;

export const selectedItemContainerStyles = {
  backgroundColor: '#6bba62',
} as StyleProp<ViewStyle>;

export const selectedItemLabelStyles = {
  color: '#fff',
} as StyleProp<TextStyle>;
