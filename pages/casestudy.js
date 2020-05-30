import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EnquiryCallToAction from '../components/EnquiryCallToAction'

export default function casestudy () {
  return (
    <div className='container mx-auto'>
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

      <main>
        <div className='flex my-4'>
          <div className='w-full p-2'>
            <Header />
          </div>
        </div>

        <div className='flex my-4'>
          <div className='w-1/2'>
            <h1 className='text-4xl'>Case Study</h1>
          </div>
        </div>

        <div className='flex flex-wrap mb-4'>
          <p>hello word</p>
          <EnquiryCallToAction />
        </div>

        <div className='flex my-4'>
          <div className='w-full'>
            <Footer />
          </div>
        </div>
      </main>

      <style jsx>{`
       
      `}
      </style>

    </div>
  )
}
