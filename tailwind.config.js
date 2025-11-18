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
        support: '#0F110C',
        side: '#F93943',
        dain: '#001A23',
        dide: '#27FB6B',
        caro: '#6DAEDB',
        cele: '#2892D7',
        tange: '#F58A07',
        purp: '#5F00BA',
        jas: '#F4D06F',
        neon: '#ED217C',
        deep: '#30C5FF',
      },
    },
  },
  plugins: [],
};
