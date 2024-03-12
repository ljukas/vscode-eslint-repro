import eslint from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ['./apps/*/tsconfig.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
    },
    rules: reactPlugin.configs['jsx-runtime'].rules,
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.tsx'],
    plugins: {
      'react-hooks': hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  prettierPlugin,
  {
    rules: {
      'prettier/prettier': 'warn',
    },
  },
  {
    ignores: [
      'eslint.config.mjs',
      'codegen.ts',
      'scripts/',
      '**/scripts/',
      '**/_generated/',
      '**/.*',
      '**/babel.config.js',
      '**/build/',
      '**/config-plugin-caret-color/app.plugin.js',
      '**/dist/',
      '**/expo-env.d.ts',
      '**/generated/',
      '**/metro.config.js',
      '**/metro.config.ts',
      '**/native/app.config.js',
      '**/native/app.config.ts',
      '**/native/colors.js',
      '**/native/plugins/',
      '**/tailwind.config.js',
      '**/jest.config.ts',
    ],
  },
);
