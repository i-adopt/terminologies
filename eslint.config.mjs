import { fileURLToPath } from 'node:url';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default defineConfig(
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    rules: { // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
      // see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      'no-undef': 'off',
      'indent': [
        'warn',
        2,
        {
          'VariableDeclarator': { 'var': 2, 'let': 2, 'const': 3 },
          'SwitchCase': 1,
          'MemberExpression': 1,
          'CallExpression': { 'arguments': 'first' },
          'ArrayExpression': 'first',
          'ObjectExpression': 'first',
          'ignoredNodes': ['ConditionalExpression']
        },
      ],
      'quotes': [
        'warn',
        'single'
      ],
      'semi': [
        'warn',
        'always'
      ],
      'no-console': [
        'warn',
        { allow: ['warn', 'error'] }
      ],
      'no-trailing-spaces': [
        'warn'
      ]
    },
  },
  {
    files: [
      '**/*.svelte',
      '**/*.svelte.ts',
      '**/*.svelte.js',
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        svelteConfig
      }
    }
  }
);
