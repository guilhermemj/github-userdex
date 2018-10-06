module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      // Vuex stores
      files: ['src/store/**/*.js'],
      // Vuex is based on reassigning state inside mutations
      rules: { 'no-param-reassign': 'off' },
    },
    {
      // Unit tests
      files: ['**/?(*.)+(spec|test).js?(x)'],
      // Configure Jest env
      env: { jest: true },
    },
  ],
};
