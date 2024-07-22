/** @type {import('tailwindcss').Config} */
const AnimateCSS = require('animated-tailwindcss')

module.exports = AnimateCSS({
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation:{
        upDown:'upDown 3s linear infinite',
        leftRight:'leftRight 3s linear infinite',
      },
      keyframes:{
        upDown:{
          '0%':{paddingTop:'0px'},
          '50%':{paddingTop:'40px'},
          '100%':{paddingTop:'0px'}
        },
        leftRight:{
          '0%':{paddingLeft:'0px'},
          '50%':{paddingLeft:'40px'},
          '100%':{paddingLeft:'0px'}
        }
      },
      colors: {
        magenta: {
          DEFAULT: '#FF00FF',
          '50': '#FFD9FF',
          '100': '#FFB3FF',
          '200': '#FF80FF',
          '300': '#FF4DFF',
          '400': '#FF1AFF',
          '500': '#FF00FF',
          '600': '#CC00CC',
          '700': '#990099',
          '800': '#660066',
          '900': '#330033',
        },
        digiYellow:{
          DEFAULT:'#feff01'
        },
        digiCyan:{
          DEFAULT:'#04c5fe'
        },
        digiMagenta:{
          DEFAULT:'#fe238a'
        }
      },
    },
  },
  plugins: [],
})
