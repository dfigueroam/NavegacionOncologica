/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf9',
          100: '#ccfbef',
          200: '#99f6df',
          300: '#5ceacc',
          400: '#2dd4b3',
          500: '#14b89c',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        clinical: {
          teal: '#0d9488',
          green: '#16a34a',
          amber: '#d97706',
          red: '#dc2626',
          purple: '#7c3aed',
        }
      }
    },
  },
  plugins: [],
}
