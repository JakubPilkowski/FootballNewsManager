module.exports = {
  extends: ['prettier'],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-native', 'prettier'],
  parser: '@typescript-eslint/parser',
  // include: ['**/*.ts'],
  ignorePatterns: ['node_modules', 'babel.config.js', 'metro.config.js', 'jest.config.js'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['api', './src/api'],
          ['assets', './src/assets'],
          ['common', './src/common'],
          ['hooks', './src/hooks'],
          ['utils', './src/utils'],
          ['views', './src/views'],
          ['mutations', './src/api/mutations'],
          ['queries', './src/api/queries'],
          ['types', './src/types'],
          ['i18n', './src/i18n'],
        ],
      },
    },
  },
  rules: {
    // "import/no-unresolved": 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.ts', '.tsx'],
      },
    ],
    'react/boolean-prop-naming': ['warn'],
    'react/no-children-prop': 1,
    'react/no-array-index-key': 2,
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: [
          {
            char: '>',
            alternatives: ['&gt;'],
          },
        ],
      },
    ],
    'react/no-unknown-property': [1], // warns if we are using no camelCase props
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    // "@typescript-eslint/no-use-before-define": ["error"],
    'react/prop-types': 0, //default 0, but for knowledge
    // "no-shadow": "off",
    // "@typescript-eslint/no-shadow": ["error"],
    'react/jsx-boolean-value': 1, // send error if pass boolean props like this: props={true}
    'react/jsx-closing-bracket-location': [
      1,
      { selfClosing: 'line-aligned', nonEmpty: 'after-props' },
    ],
    'react/jsx-closing-tag-location': 1,
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-handler-names': [
      'warn',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
        checkLocalVariables: true,
      },
    ],
    'react/jsx-key': [1, { checkFragmentShorthand: true }],
    'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': [
      2,
      {
        androidPathRegex: '\\.android.(js|jsx|ts|tsx)$',
        iosPathRegex: '\\.ios.(js|jsx|ts|tsx)$',
      },
    ],
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 1,
    '@typescript-eslint/array-type': [1, { default: 'array-simple' }],
    '@typescript-eslint/await-thenable': 2,
    '@typescript-eslint/ban-types': [
      1,
      {
        types: {
          String: {
            message: 'Use string instead of String',
            fixWith: 'string',
          },
        },
      },
    ],
    '@typescript-eslint/consistent-indexed-object-style': [1, 'index-signature'], //disallow using Record
    '@typescript-eslint/explicit-member-accessibility': 0, // for typescript classes properties accessibility
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/method-signature-style': [1, 'property'],
    '@typescript-eslint/no-base-to-string': 2,
    '@typescript-eslint/no-confusing-non-null-assertion': 1,
    // '@typescript-eslint/no-empty-interface': [
    //   1,
    //   {
    //     allowSingleExtends: false,
    //   },
    // ],
    '@typescript-eslint/no-explicit-any': [
      1,
      {
        fixToUnknown: false,
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-implicit-any-catch': 2,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 1,
    '@typescript-eslint/no-unnecessary-condition': 1,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-call': 1,
    '@typescript-eslint/no-unsafe-member-access': 1,
    '@typescript-eslint/no-unsafe-return': 1,
    '@typescript-eslint/prefer-as-const': 1,
    '@typescript-eslint/prefer-enum-initializers': 1,
    '@typescript-eslint/prefer-reduce-type-parameter': 1,
    '@typescript-eslint/prefer-regexp-exec': 1,
    '@typescript-eslint/prefer-return-this-type': 1,
    '@typescript-eslint/promise-function-async': 2,
    '@typescript-eslint/restrict-plus-operands': 2,
    '@typescript-eslint/restrict-template-expressions': 2,
    '@typescript-eslint/switch-exhaustiveness-check': 1,
    '@typescript-eslint/unified-signatures': 1,
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 2,
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 1,
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 1,
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 1,
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 2,
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 2,
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      1,
      {
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
      },
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // "@typescript-eslint/explicit-function-return-type": [
        //   1,
        //   {
        //     "allowExpressions": true,
        //     "allowTypedFunctionExpressions": true,
        //     "allowHigherOrderFunctions": true,
        //     "allowDirectConstAssertionInArrowFunctions": true,
        //     "allowConciseArrowFunctionExpressionsStartingWithVoid": false
        //   }
        // ]
        '@typescript-eslint/explicit-member-accessibility': [
          2,
          {
            accessibility: 'explicit',
            overrides: {
              accessors: 'explicit',
              constructors: 'no-public',
              methods: 'explicit',
              properties: 'off',
              parameterProperties: 'explicit',
            },
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': [
          'off',
          // {
          //   "allowArgumentsExplicitlyTypedAsAny": false,
          //   "allowDirectConstAssertionInArrowFunctions": true,
          //   "allowHigherOrderFunctions": true,
          //   "allowTypedFunctionExpressions": true,
          //   "allowedNames": ["children"]
          // }
        ],
      },
    },
  ],
};
