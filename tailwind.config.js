import('tailwindcss').Config;
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    // screens: {
    //       mobile: '430px',
    //       tablet: '760px',
    //       laptop: '1024px'
    // },
    extend:{
      screens:{
        'con': '1200px',
        'card-w': '432px',
      },
      colors:{
        transparent: 'transparent',
        lightgrey: '#5F5F64',
        grey: '#535354',
        thingrey: '#767E7E',
        greylight: '#718176',
        lightblue: '#41B3F4',
        orange: '#E15C19',
      }
    }
  },
  plugins: [],
}