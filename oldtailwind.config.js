/** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto"', 'sans'],
      }
    }
  }
  // safelist: [
  //   'bg-primary',
  // ],
  // theme: {
  //   colors: {
  //     transparent: 'transparent',
  //     current: 'currentColor',
  //     black: colors.black,
  //     white: colors.white,
  //     gray: colors.gray,
  //     emerald: colors.emerald,
  //     indigo: colors.indigo,
  //     yellow: colors.yellow,
  //     red: colors.red,
  //     blue: colors.blue,
  //     primary: '#779ecb',
  //     //secondary: '#CECD19'
  //   },
  //   extend: {},
    
  // },
  // plugins: [],
}

