const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // false, 'class', 'media'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans TC', ...defaultTheme.fontFamily.sans], // 載入 Noto Sans TC
        'chillax': ['Chillax', ...defaultTheme.fontFamily.sans], // 載入 Chillax
      },
      colors: {
        white: '#FFFFFF',
        C_black: '#202020',
        C_red: '#F75147',
        C_gray: {
          100: '#F9F9F9',
          200: '#EFEFEF',
          300: '#E5E5E5',
          400: '#D8D8D8',
          500: '#BBBBBB',
          600: '#ADADAD',
          700: '#949494',
          800: '#808080',
          900: '#616161',
        },
        C_blue: {
          100: '#F4FAFF',
          200: '#E6F3FF',
          300: '#89AECD',
          400: '#6E92AF',
          500: '#567792',
          600: '#3B5B77',
          700: '#2C4458',
          800: '#1D2C3A',
          900: '#15202A',
        },
        C_green: {
          100: '#DFF5F1',
          200: '#C0EBE3',
          300: '#A1E2D5',
          400: '#63CEB9',
          500: '#40C3A9',
          600: '#33A28C',
          700: '#287F6E',
          800: '#236E5F',
          900: '#1D5C50',
        },
      },
      fontSize: {
        '2xs': '0.25rem',
        'xs': '0.5rem',
        'sm': '0.75rem',
        'md': '1rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2rem',
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
      },
      screens: {
        'mobile': '320px',
        'laptop': '768px',
        'desktop': '1920px',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px', // rounded 預設 8px
        lg: '16px',
        full: '9999px',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class', // only generate classes
    }),
  ],
}
