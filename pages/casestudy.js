import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CaseStudyHeader from '../components/CaseStudyHeader'

import useSticky from '../hooks/useSticky.js'

import { getACaseSudyByID } from '../lib/api'

function Index({ casestudy }) {
  const { isSticky, element } = useSticky()
  return (
    <>
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
            <CaseStudyHeader element={element} entity={casestudy} />
          </div>
        </div>
      <div className='pb-4 bg-white'>
        <div className='container flex mx-auto '>
          <div className='w-3/4 p-5'>
            <h2 className='text-3xl text-black font-open-sans font-light mb-4'>{casestudy.fields.name}</h2>
          </div>
          <div className='w-1/4 p-10'></div>
        </div>
      </div>
      <div className='pb-4 bg-ids-green h-50px'></div>
      <div className='bg-black'>
          <div className='container mx-auto '>
            <div className='w-full'>
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export async function getServerSideProps(context) {
  if(context.query.id) {
    const casestudy = await getACaseSudyByID(context.query.id)
    return {
      props: { casestudy }
    }
  } 
}


export default Index