const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans TC', ...defaultTheme.fontFamily.sans], // 載入 Noto Sans TC
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        red: '#F75147',
        gray: {
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
        blue: {
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
        green: {
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
        'md': '1rem', // 16px
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2rem',
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        bold: '600',
      },
      screens: {
        'sm': '320px',  // @media (min-width: 320px) { ... }
        'md': '768px',  // @media (min-width: 768px) { ... }
        'lg': '1920px', // @media (min-width: 1920px) { ... }
      },
      borderRadius: {
        DEFAULT: '8px', // rounded 預設 8px
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
