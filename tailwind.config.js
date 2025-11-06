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
        main: '#DFA06E',
        support: '#1A1423',
        side: '#FFD131',
        dain: '#412722',
        caro: '#6DAEDB',
        cele: '#2892D7',
      },
    },
  },
  plugins: [],
};
