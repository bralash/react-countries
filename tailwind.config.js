/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'nav-dark':'#2B3844',
        'body-dark':'#202C36'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
