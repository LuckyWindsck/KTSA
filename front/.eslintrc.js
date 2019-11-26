module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
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
  rules: {
    'func-names': 0,
    'import/no-extraneous-dependencies': 0,
    'max-len': ['error', { code: 100 }],
    'no-console': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
    }],
  },
};
