/** @type {import('tailwindcss').Config} */
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},

    colors: {
      black: '#292930',
      white: '#fff',
      gray: {
        ...colors.gray,
        DEFAULT: '#999fae',
        100: '#A0A0A0'
      },
      blue: {
        ...colors.blue,
        DEFAULT: '#2522ba'
      },
      purple: {
        ...colors.purple,
        100: '#5956e9',
        200: '#5C5AED'
      },
      pink: {
        ...colors.pink,
        100: '#FAB8C4',
        200: '#FFBFCF'
      },
      green: {
        ...colors.green,
        DEFAULT: '#90D0B1'
      },
      red: {
        ...colors.red,
        DEFAULT: '#C75C6F'
      }
    }
  },
  plugins: []
};
