/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    fontFamily:{
      'heading': ['Russo One', 'sans-serif'],
      'nunito' : ['Nunito', 'sans-serif'],
      'edu' : ['Edu SA Beginner', 'cursive'], 
    },
    extend: {
    },
  },
  plugins: [],
}

