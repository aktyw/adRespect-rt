/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'light-gray': '#F5F0EC',
      'light-black': '#111111',
      green: '#1B5B31',
      white: '#ffffff',
      black: '#000000',
      beige: '#DCC1AB',
      gray: colors.gray,
      transparent: 'transparent',
    },
    fontFamily: {
      text: ['Inter'],
      headings: ['Montserrat'],
    },
    extend: {
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
      spacing: {
        15: '60px',
        27: '110px',
        30: '120px',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
