const webpackConfig = require('./webpack.config');

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: Object.entries(webpackConfig.resolve.alias),
      },
    },
  },
  rules: {
    'no-console': ['warn', { allow: ['log'] }],
    'no-shadow': ['error', { allow: ['_'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
