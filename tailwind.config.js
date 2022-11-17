/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#2B2024",
        "main": "#FD0054",
        "hover": "#A80038",
        "light": "#FBF9FA"
      },
    },
    
  },
  plugins: [],
}