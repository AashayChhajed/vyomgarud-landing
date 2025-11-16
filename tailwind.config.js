/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff7b00',
          600: '#ff9500',
        }
      }
    },
  },
  plugins: [],
}