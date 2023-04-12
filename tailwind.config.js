/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,jsx}",
    "./src/components/*/*.{js,jsx}",
    "./src/parts/*.{js,jsx}",
    "./src/pages/*.{js,jsx}"
  ],
  theme: {
    fontFamily: {
      'poppins': ["Poppins", 'sans-serif']
    },
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
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

