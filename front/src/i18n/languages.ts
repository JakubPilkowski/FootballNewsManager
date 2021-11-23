import { nanoid } from 'nanoid/non-secure';

import images from 'assets/images';

const LANGUAGES = [
  {
    id: nanoid(),
    key: 'pl',
    label: '🇵🇱  ',
    // icon: images.polishFlag,
  },
  {
    id: nanoid(),
    key: 'en',
    label: '🇬🇧  ',
    // icon: images.englishFlag,
  },
  {
    id: nanoid(),
    key: 'it',
    label: '🇮🇹  ',
    // icon: images.italyFlag,
  },
  {
    id: nanoid(),
    key: 'de',
    label: '🇩🇪  ',
    // icon: images.germanFlag,
  },
  {
    id: nanoid(),
    key: 'es',
    label: '🇪🇸  ',
    // icon: images.spanishFlag,
  },
  {
    id: nanoid(),
    key: 'fr',
    // icon: images.frenchFlag,
  },
];

export default LANGUAGES;
