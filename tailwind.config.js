/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sketch: ['"Cabin Sketch"', 'cursive'],
        cardo: ['Cardo', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        main: '#A8E0FF',
        support: '#1A1423',
        side: '#FFD131',
      },
    },
  },
  plugins: [],
};
