/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/main.js"],
  theme: {
    extend: {
      colors: {
        primary: '#F1F4ED'
      }
    }
  },
  plugins: [],
}

