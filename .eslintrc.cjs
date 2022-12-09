/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,

  env: {

    node: true

  },

  extends: [

    'plugin:vue/essential',

    // '@vue/standard'    // 必需注释 @vue/standard

  ],

  parserOptions: {

    parser: 'babel-eslint'

  },

  rules: {

    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

  }

}
