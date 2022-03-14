module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        100: '#F9F9F9',
        200: '#EFEFEF',
        300: '#E5E5E5',
        700: '#949494',
        900: '#616161',
      },
      blue: {
        100: '#F4FAFF',
        200: '#A7CBEA',
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
        500: '#40C3A9',
        700: '#287F6E',
      },
    },
    fontSize: {
      '2xs': '0.25rem', // 4px
      'xs': '0.5rem', // 8px
      'sm': '0.75rem', // 12px
      'md': '1rem', // 16px
      'lg': '1.25rem', // 20px
      'xl': '1.5rem', // 24px
      '2xl': '1.75rem', // 28px
      '3xl': '2rem', // 32px
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
    },
    screens: {
      'sm': '320px', // @media (min-width: 320px) { ... }
      'md': '768px', // @media (min-width: 768px) { ... }
      'lg': '1920px', // @media (min-width: 1920px) { ... }
    },
    borderRadius: {
      DEFAULT: '8px', // rounded 預設 8px
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class', // only generate classes
    }),
  ],
}
