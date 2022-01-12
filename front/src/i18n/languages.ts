import { nanoid } from 'nanoid/non-secure';

import images from 'assets/images';

const LANGUAGES = [
  {
    id: nanoid(),
    key: 'pl',
    label: '🇵🇱  ',
  },
  {
    id: nanoid(),
    key: 'en',
    label: '🇬🇧  ',
  },
  {
    id: nanoid(),
    key: 'it',
    label: '🇮🇹  ',
  },
  {
    id: nanoid(),
    key: 'de',
    label: '🇩🇪  ',
  },
  {
    id: nanoid(),
    key: 'es',
    label: '🇪🇸  ',
  },
  {
    id: nanoid(),
    key: 'fr',
  },
];

export default LANGUAGES;
