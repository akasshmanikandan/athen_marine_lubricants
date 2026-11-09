/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        marine: {
          50: '#f0fdf7',
          100: '#dbfceb',
          200: '#bbf7da',
          300: '#86efbf',
          400: '#48dda0',
          500: '#1fc182',
          600: '#149c67',
          700: '#137a53',
          800: '#005a36',
          900: '#004227',
          950: '#002616',
        },
        navy: {
          800: '#0a192f',
          900: '#06101e',
          950: '#030811',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
