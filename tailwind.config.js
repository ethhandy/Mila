/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},

    colors: {
      black: '#292930',
      white: '#fff',
      gray: {
        100: '#999fae'
      },
      blue: {
        100: '#2522ba'
      },
      purple: {
        100: '#5956e9',
        200: '#5C5AED'
      },
      pink: {
        100: '#FAB8C4',
        200: '#FFBFCF'
      }
    }
  },
  plugins: []
};
