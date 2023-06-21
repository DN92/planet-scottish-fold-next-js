module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'next/core-web-vitals',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    '@typescript-eslint',
  ],

  rules: {
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/no-var-requires': 1,
    'arrow-body-style': 0,
    'arrow-parens': 1,
    'consistent-return': 0,
    'css/emptyRules': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-unresolved': 1,
    indent: ['error', 2, { SwitchCase: 1 }],
    'jsx-a11y/label-has-associated-control': 0,
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': 0,
    'max-len': 0,
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
    'no-loop-func': 0,
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-trailing-spaces': 1,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 0,
    'no-use-before-define': 0,
    'no-useless-concat': 0,
    'no-useless-return': 1,
    'object-curly-newline': 0,
    'object-shorthand': 0,
    'operator-linebreak': 0,
    'padded-blocks': 0,
    'prefer-const': 0,
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx', 'css', 'json'] }],
    'react/jsx-no-bind': 0,
    'react/no-array-index-key': 0,
    'react/no-unknown-property': [1, { ignore: ['cell-coor'] }],
    'react/prop-types': 0,
    'react/require-default-props': 0,
    semi: 1,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
