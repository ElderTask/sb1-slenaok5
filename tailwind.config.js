/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f7f7f8',
          100: '#eeeef1',
          200: '#d5d5db',
          300: '#b0b0bc',
          400: '#858597',
          500: '#636378',
          600: '#4b4b5f',
          700: '#3d3d4f',
          800: '#2d2d3d',
          900: '#1a1a24',
          950: '#0f0f15',
        },
        primary: {
          50: '#faf5ff',
          100: '#f3e6ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
      },
    },
  },
  plugins: [],
};