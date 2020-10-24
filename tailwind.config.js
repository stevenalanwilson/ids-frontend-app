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
        'ids-dark-green': '01352F'
      }
    }
  },
  variants: {},
  plugins: []
}
