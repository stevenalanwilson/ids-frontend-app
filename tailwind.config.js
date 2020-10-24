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
        '200px': '200px',
        '400px': '400px',
        '600px': '600px'
      },
      width: {
        inherit: 'inherit'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif;']
      },
      inset: {
        '100px': '100px',
        '150px': '150px'
      }
    }
  },
  variants: {},
  plugins: []
}
