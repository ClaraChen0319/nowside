/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended', // 自動排序套件須加上
  ],
  plugins: ['tailwindcss'], // 自動排序套件須加上
  rules: {
		// --- vue eslint 規則設定(Option) ---
    'vue/no-unused-vars': 'error',
    'vue/script-setup-uses-vars': 'off',
    'vue/multi-word-component-names': 'warn',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'never',
        },
        svg: 'never',
        math: 'never',
      },
    ],
		// --- 自動排序套件新增規則 ---
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
  },
}
