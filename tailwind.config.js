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
        "dark": "#210808",
        "main": "#732222",
        "hover": "#963f3f",
        "light": "#FBF9FA",
        "sfondi": "#e3e3e3",
      },
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}