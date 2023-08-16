/** @type {import('tailwindcss').Config} */
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
    },
    fontFamily: {
      text: ['Inter'],
      headings: ['Montserrat'],
    },
    extend: {
      spacing: {
        88: '24rem',
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
