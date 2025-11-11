/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sketch: ['"Cabin Sketch"', 'cursive'],
        cardo: ['Cardo', 'serif'],
        lato: ['Lato', 'sans-serif'],
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
      },
    },
  },
  plugins: [],
};
