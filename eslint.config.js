import { FlatCompat } from '@eslint/eslintrc'
import { defineFlatConfig } from 'eslint-define-config'
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist'
import eslintPluginTypeScript from 'typescript-eslint'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
})

export default defineFlatConfig([
  {
    ignores: ['**/dist/', '**/.history/', '**/vite.config.ts']
  },
  ...compat.extends('eslint-config-standard'),
  ...compat.extends('eslint-config-prettier'),
  {
    plugins: {
      perfectionist: eslintPluginPerfectionist
    },
    rules: {
      ...eslintPluginPerfectionist.configs['recommended-alphabetical'].rules,
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'side-effect',
            'type',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown'
          ],
          'internal-pattern': ['@/**'],
          'newlines-between': 'always',
          order: 'asc',
          type: 'alphabetical'
        }
      ]
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: eslintPluginTypeScript.parser,
      parserOptions: {
        project: true
      }
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypeScript.plugin
    },
    rules: {
      ...eslintPluginTypeScript.configs.recommended.rules
    }
  }
])
