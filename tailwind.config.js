/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        brown: ['Brown', 'sans-serif'],
      },
      fontSize: {
        h1: ['32px', '40px'],
        link: ['16px', '24px'],
      },
      colors: {
        darkRed: '#872020',
        naturalGray: '#898786',
        alto: '#D9D9D9',
      },
    },
  },
  plugins: [],
};
