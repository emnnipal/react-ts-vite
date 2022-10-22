/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        reactBg: '#282c34',
        reactLinks: '#61dafb',
      },
    },
    keyframes: {
      'react-logo-spin': {
        0: { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      'react-spin': 'react-logo-spin 20s infinite linear',
    },
  },
  plugins: [],
};
