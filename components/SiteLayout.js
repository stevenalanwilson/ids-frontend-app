import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import useSticky from '../hooks/useSticky.js'

const SiteLayout = ({ children }) => {
  const { isSticky, element } = useSticky()
  return (
    <div className='shadow-md mx-auto'>
      <Head>
        <title>IDS Website - Prototype</title>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <main className='relative w-full'>
        <div>
          <div>
            <Header sticky={isSticky} />
            <Hero element={element} />
          </div>
        </div>

        {children}

        <div className='bg-black'>
          <div className='container mx-auto '>
            <div className='w-full'>
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
};

export default SiteLayout;
