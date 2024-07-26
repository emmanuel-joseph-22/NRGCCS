/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {

    extend: {
      fontFamily: {
        'sans': ['sans-serif'],
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
      },
      colors: {
        customRed: '#A52639',
        footerRed: '#721C2F',
        redBtn: '#DD3745',
        lightRed: '#DD3745'
      }
    },
  },
  plugins: [],
}

