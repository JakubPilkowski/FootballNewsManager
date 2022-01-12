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
  fontTitle: {
    fontSize: 32,
    lineHeight: 36,
  },
} as Fonts;

export type FontType = {
  fontSize: number;
  lineHeight: number;
};

export type Fonts = {
  fontXS: FontType;
  fontS: FontType;
  fontM: FontType;
  fontL: FontType;
  fontXL: FontType;
  fontTitle: FontType;
};
