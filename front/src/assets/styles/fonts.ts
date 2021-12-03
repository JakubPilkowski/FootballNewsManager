import { TextStyle } from 'react-native';

export default {
  fontXS: {
    fontSize: 8,
    lineHeight: 10,
  },
  fontS: {
    fontSize: 12,
    lineHeight: 14,
  },
  fontM: {
    fontSize: 14,
    lineHeight: 16,
  },
  fontL: {
    fontSize: 16,
    lineHeight: 18,
  },
  fontXL: {
    fontSize: 20,
    lineHeight: 22,
  },
} as Fonts;

export type Fonts = {
  [k: string]: TextStyle;
};
