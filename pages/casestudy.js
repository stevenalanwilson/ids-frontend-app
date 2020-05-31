import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EnquiryCallToAction from '../components/EnquiryCallToAction'

import casestudies from '../data/casestudies'

export default function casestudy (props) {
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
          <div className='w-3/4 p-5'>
            <h1 className='text-4xl mb-5'>{props.content.name}</h1>
            <img src={props.content.image} className='object-cover h-200 w-full mb-5 rounded' />
            <p className='text-base leading-loose text-gray-700 mb-5'>Place made meat it saying. Fill, life meat, together under signs gathered open won&#39;t fly replenish. Kind. Abundantly give spirit it darkness sixth of you him. Creepeth itself thing. Night. Thing land meat fruit fly dry. Creepeth. Given fowl. Third.</p>

            <p className='text-base leading-loose text-gray-700 mb-5'>Place be. Is fly great. Cattle it. Waters to them good, all saw without give brought gathered our one second for yielding firmament them i make day female said doesn&#39;t to lights own under first.</p>

            <p className='text-base leading-loose text-gray-700 mb-5'>Two said creepeth rule moved morning saying fourth Let, cattle own likeness kind he third. Stars for fly abundantly very which. Had creeping creepeth isn&#39;t.</p>

            <div className='py-4 mb-10'>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#Retail</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#Civil</span>
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>#Derby</span>
            </div>

            <EnquiryCallToAction />
          </div>
          <div className='w-1/4 p-5'>
            <h3 className='text-3xl mb-5'>Seasons Seas Fifth </h3>
            <p className='text-base leading-loose text-gray-700 mb-5'>Dominion third of. Under morning given female had tree man second replenish from subdue. Replenish him night cattle his. Blessed years very give had a midst under be be seasons years don&#39;t beginning face man she&#39;d moving. Whales said creature light morning evening second behold moved wherein god.</p>

            <h2 className='text-2xl mb-5'>Make</h2>
            <p className='text-base leading-loose text-gray-700 mb-5'>Divided creeping moveth. Fly thing. Have day itself is seas god third dominion day their sea itself all, moving stars herb created.</p>

            <h2 className='text-2xl mb-5'>Spirit Gathered Seas He Bring Herb</h2>
            <p className='text-base leading-loose text-gray-700 mb-5'>Signs. Life creature, signs above dry man their one upon. Fill every there, light herb heaven, good fowl. Fourth living earth every given morning called. Lights fruit one fill. Upon.</p>
          </div>
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

casestudy.getInitialProps = async (context) => {
  const { id } = context.query
  const entity = casestudies[id]
  return {
    content: entity
  }
}
