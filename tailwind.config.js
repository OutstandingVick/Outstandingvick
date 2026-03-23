const { GrUbuntu } = require('react-icons/gr');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['Bungee Shade', 'sans-serif'],
        cardo: ['Cardo', 'serif'],
        ubuntu: ['Ubuntu Sans', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        advent: ['Advent Pro', 'sans-serif'],
        jersey: ['Jersey 25', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
      },
      colors: {
        main: '#F5B700',
        second: '#9B2915',
        dain: '#1C110A',
        decond: '#E4D6A7',
        bell: '#3B28CC',
      },
    },
  },
  plugins: [],
};
