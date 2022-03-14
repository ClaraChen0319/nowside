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
        500: '#40C3A9',
        700: '#287F6E',
      },
    },
    borderRadius: {
      DEFAULT: '8px', // rounded 默認 8px
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class', // only generate classes
    }),
  ],
}
