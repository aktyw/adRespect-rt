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
      gray: '#dbd8d5',
      'light-black': '#111111',
      green: '#1B5B31',
      darkgreen: '#0f4221',
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
        15: '60px',
        27: '110px',
        30: '120px',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionDuration: {
        1500: '1500ms',
        2000: '2000ms',
      },
    },
  },
  plugins: [],
};
