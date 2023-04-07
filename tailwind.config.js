/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ["Poppins", 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#3252DF',
        'grayish': '#152C5B',
      },
    },
  },
  plugins: [],
}

