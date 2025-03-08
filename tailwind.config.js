/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DCFF50',
        secondary: '#FFFFFF',
        dark: '#000000',
        'dark-light': '#0A0A0A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6.5rem',
        '9xl': '8rem',
      },
      letterSpacing: {
        tighter: '-0.05em',
        'super-tight': '-0.075em',
      },
    },
  },
  plugins: [],
};