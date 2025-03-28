const { FlatCompat } = require('@eslint/eslintrc');
const globals = require('globals');
const babelParser = require('@babel/eslint-parser');
const emberPlugin = require('eslint-plugin-ember');
const nPlugin = require('eslint-plugin-n');
const qunitPlugin = require('eslint-plugin-qunit');
const prettierPlugin = require('eslint-plugin-prettier');
const eslint = require('eslint'); // Required for recommendedConfig

const compat = new FlatCompat();

// Move ignore patterns from .eslintignore here
const commonIgnores = [
  '/blueprints/*/files/',
  '/vendor/',
  'dist/',
  '/tmp/',
  '/bower_components/',
  '/node_modules/',
  '/coverage/',
  '/.node_modules.ember-try/',
  '/*.ember-try.*',
  '/*.eslintcache',
  '.prettierrc.js',
  '.template-lintrc.js',
  'config/**/*.js',
  '!/.*' // Allow dot files except those excluded
];

module.exports = [
  {
    ignores: commonIgnores
  },
  {
    files: ['**/*.js'],
    ignores: commonIgnores,
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
        }
      },
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    plugins: {
      ember: emberPlugin
    },
    rules: {
      ...emberPlugin.configs.recommended.rules,
      // Add Ember-specific rules here
      'ember/no-jquery': 'error',
      'ember/no-mixins': 'warn'
    }
  },
  // Node.js config
  {
    files: [
      './.eslintrc.js',
      './.prettierrc.js',
      './.template-lintrc.js',
      './ember-cli-build.js',
      './testem.js',
      './blueprints/*/index.js',
      './config/**/*.js',
      './lib/*/index.js',
      './server/**/*.js'
    ],
    languageOptions: {
      sourceType: 'script',
      globals: globals.node
    },
    plugins: {
      n: nPlugin
    },
    rules: {
      ...nPlugin.configs.recommended.rules,
      'n/no-missing-require': 'off', // Common in Ember addons
      'n/no-unpublished-require': 'off'
    }
  },
  // Test files
  {
    files: ['tests/**/*-test.js'],
    plugins: {
      qunit: qunitPlugin
    },
    rules: {
      ...qunitPlugin.configs.recommended.rules,
      'qunit/no-assert-equal': 'off', // Allowing equal for simplicity
      'qunit/require-expect': ['error', { exceptAsync: true }]
    }
  },
  // Prettier integration (directly merged)
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          printWidth: 100,
          trailingComma: 'none',
          endOfLine: 'auto'
        }
      ]
    }
  }
];
