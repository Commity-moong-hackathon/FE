import eslintPluginReact from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';

export default [
  {
    ignores: ['dist'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        requireConfigFile: false,
      },
    },
    plugins: {
      react: eslintPluginReact,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      indent: ['error', 4],
      'react/jsx-indent': ['error', 4],
      'react/jsx-indent-props': ['error', 4],
      quotes: ['error', 'single'],
      'no-console': 'off',
    },
  },
];
