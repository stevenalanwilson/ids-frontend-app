import '../assets/scss/styles.scss'

import '@fortawesome/fontawesome-svg-core/styles.css'
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false /* eslint-disable import/first */

// This default export is required in a new `pages/_app.js` file.
export default function MyApp ({ Component, pageProps, router }) {
  return (
  <Component {...pageProps}></Component>
  )
}
