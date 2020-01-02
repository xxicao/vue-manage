module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaFeatures: {
      modules: true
    }
  },
  plugins: [
    'vue'
  ],
  rules: {
    "semi": 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'no-console': 0,
    'func-names': 0,
    'no-plusplus': 0,
    'prefer-destructuring': 0,
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 5,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }]
  }
}
