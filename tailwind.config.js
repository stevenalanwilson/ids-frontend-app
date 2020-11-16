module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ids-orange': '#E55B13',
        'ids-green': '#7A871E',
        'ids-dark-green': '#01352F'
      },
      height: {
        '50px': '50px',
        '100px': '100px',
        '200px': '200px',
        '300px': '300px',
        '400px': '400px',
        '500px': '500px',
        '600px': '600px'
      },
      width: {
        inherit: 'inherit'
      },
      minHeight: {
        '40px': '40px',
        '80px': '80px',
        '85px': '85px'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif;']
      },
      inset: {
        '15px': '15px',
        '25px': '25px',
        '50px': '50px',
        '100px': '100px',
        '150px': '150px'
      }
    }
  },
  variants: {},
  plugins: []
}
