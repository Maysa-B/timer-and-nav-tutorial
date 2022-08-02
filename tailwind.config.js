/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#EEBE6B',
        'soft-purple': '#AC9FBB',
        'gray-purple': '#838295',
        'light-ocean': '#AED9E0',
        'green-ocean': '#7AC1CD',
        'custom-gray': '#DEE1EB',
        'custom-purple': '#686AA1',
        'dark-gray': '#59656F',
        'dark-violet': '#3F4064',
        'dark-purple': '#311C39',
      },
      fontFamily: {
        'epilogue': 'Epilogue',
      },
      animation: {
        openmenu: 'openmenu 1s ease-in',
        closemenu: 'closemenu 1s ease-in',
      },
      keyframes: {
        openmenu: {
          '0%': {left: '-224px'},
          '100%': {left: '0px'}
        },
        closemenu: {
          '0%': {left: '0px'},
          '100%': {left: '-224px'}
        },
      }
    },
  },
  plugins: [],
}
