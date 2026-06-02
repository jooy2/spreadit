import { defineConfig, globalIgnores } from 'eslint/config';
import pluginJs from '@eslint/js';
import pluginNode from 'eslint-plugin-n';
import configPrettier from 'eslint-config-prettier';

import globals from 'globals';

export default defineConfig([
  pluginJs.configs.recommended,
  pluginNode.configs['flat/recommended-script'],
  globalIgnores([
    '**/.idea',
    '**/.vscode',
    '**/node_modules',
    '**/dist',
    '**/package-lock.json'
  ]),
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node
      }
    },
    rules: {
      eqeqeq: 'error',
      "no-undef": 0,
      "no-throw-literal": 0,
      "no-unused-expressions": 1,
      "no-unused-vars": 1,
      "class-methods-use-this": 1
    }
  },
  configPrettier
]);
