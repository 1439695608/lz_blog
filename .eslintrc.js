module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  "globals": {
    "expect": true
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue'
  ],
  rules: {
    "no-restricted-syntax": ["error", {
      "selector":"ForInStatement",
      "message":"don't use for in"
    }],
    "eqeqeq":"off",
    'vue/this-in-template':'off',
    'camelcase':'off',
    'generator-star-spacing': 'off',
    //vue默认prop 要有默认值规则，取消掉
    'vue/require-default-prop':'off',
    //vue 取消v-for key值检验
    'vue/require-v-for-key':'off',
    //默认属性类型
    'vue/require-prop-types':'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': 'off',
    'no-eval': 'off',
    'no-implicit-coercion': 'error'
  }
}


