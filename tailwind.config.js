/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./dist/*.html'],
  content: [
    './App.tsx',
    './comps/**/*.{tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blackInk': '#1b1b1b',
      },
    },
  },
  plugins: [],
}
