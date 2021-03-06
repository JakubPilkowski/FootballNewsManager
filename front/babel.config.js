const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      // {
      //   lazyImports: true,
      // },
    ],
    plugins: [
      'lodash',
      'inline-dotenv',
      [
        'module-resolver',
        {
          root: path.resolve('./'),
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.tsx',
            '.android.ts',
            '.ios.tsx',
            '.ios.ts',
          ],
          alias: {
            // fonts: './assets/fonts',
            assets: './src/assets',
            // locales: './assets/locales',
            api: './src/api',
            common: './src/common',
            hooks: './src/hooks',
            utils: './src/utils',
            views: './src/views',
            mutations: './src/api/mutations',
            queries: './src/api/queries',
            types: './src/types',
            i18n: './src/i18n',
          },
        },
      ],
    ],
  };
};
