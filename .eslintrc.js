module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:promise/recommended',
    // 'plugin:unicorn/recommended',
    'plugin:react/recommended',
    'plugin:react-perf/recommended',
    'plugin:lodash/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/all',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'promise',
    // 'unicorn',
    'array-func',
    'eslint-comments',
    'react',
    'react-perf',
    'react-hooks',
    'lodash',
    'jest',
  ],
  rules: {
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    eqeqeq: ['error', 'always'],

    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    'import/no-extraneous-dependencies': ['error', { packageDir: __dirname }],
    'css-colonexpected': 'off',

    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    // 'jsx-a11y/anchor-is-valid': [
    //   'error',
    //   {
    //     aspects: ['noHref', 'invalidHref', 'preferButton'],
    //     components: ['Link'],
    //     specialLink: ['to'],
    //   },
    // ],

    // Ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'no-async-promise-executor': 'error',

    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'no-await-in-loop': 'error',

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'no-console': [
      'off',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    'no-loop-func': 'error',
    'no-magic-numbers': ['warn', { ignore: [-1, 0, 1, 2] }],
    'no-return-await': 'error',
    'no-unmodified-loop-condition': 'error',
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'promise/always-return': 'off',
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': 'error',
    radix: ['error', 'as-needed'],
    'react/boolean-prop-naming': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-handler-names': 'error',
    'react/jsx-no-bind': 'off',
    'react/no-direct-mutation-state': 'error',
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: true },
    ],
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': ['error', 'static public field'],
    'react-perf/jsx-no-new-object-as-prop': 'off',
    'require-await': 'error',
    // 'unicorn/filename-case': [
    //   'error',
    //   {
    //     cases: {
    //       camelCase: true,
    //       kebabCase: true,
    //       pascalCase: true,
    //     },
    //   },
    // ],
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prefer-spread': 'off',
    // 'unicorn/prevent-abbreviations': [
    //   'error',
    //   {
    //     checkProperties: false,
    //     replacements: {
    //       props: false,
    //     },
    //   },
    // ],
    'vars-on-top': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'lodash/prefer-lodash-typecheck': 'warn',
    'lodash/prefer-lodash-method': ['warn', { ignoreObjects: ['history'] }],
    'react/jsx-no-literals': 'off',
    'jest/no-large-snapshots': 'off',
    'react/jsx-max-depth': ['error', { max: 5 }],
    'react/prop-types': 'off',
    'react-perf/jsx-no-new-function-as-prop': 'off',
    'no-unused-vars': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-nested-ternary': 'warn',
    'no-undef': 'warn',
    'consistent-return': 'off',
    'no-sequences': 'warn',
    'no-restricted-globals': 'warn',
    'prefer-const': 'warn',
  },
};
