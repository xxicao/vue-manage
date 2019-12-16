module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    "no-extra-semi": 0,
    'vue/max-attributes-per-line': ['error', {
      'singleline': 5,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }]
  }
}
