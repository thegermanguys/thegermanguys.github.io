/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/main.js"],
  theme: {
    extend: {
      // add new class to define border-top-left-radius: 27%;
      borderRadius: {
        
      },
    }
  },
  plugins: [],
}

