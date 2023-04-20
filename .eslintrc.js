module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  parserOptions: {
    parser: '@babel/eslint-parser',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'max-len': ['error', { code: 999 }],
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'no-shadow': 'off',
  },

};
