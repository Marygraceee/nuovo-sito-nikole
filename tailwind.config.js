/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark']
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#2B2024",
        "main": "#A80038",
        "hover": "#FD0054",
        "light": "#FBF9FA",
        "sfondi": "#e3e3e3",
      },
    },
    
  },
  plugins: [require('@tailwindcss/forms')],
}