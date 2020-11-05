import '../assets/scss/styles.scss'
import SiteLayout from '../components/SiteLayout'
import HomeSiteLayout from '../components/HomeSiteLayout'


import '@fortawesome/fontawesome-svg-core/styles.css'
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false /* eslint-disable import/first */

// This default export is required in a new `pages/_app.js` file.
export default function MyApp ({ Component, pageProps, router }) {
  console.log(router.pathname)
  if (router.pathname.startsWith('/index')) {
    return (
      <HomeSiteLayout>
        <Component {...pageProps}></Component>
      </HomeSiteLayout>
    )
  }

  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}
