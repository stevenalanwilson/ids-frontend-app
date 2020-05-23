import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home () {
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
          <div className='w-full bg-gray-100 rounded overflow-hidden shadow-lg'>
            <img src='tmp-hero.jpg' className='object-cover h-200 w-full' />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Latest Case Study: New Homes in Derby</div>
              <p className='text-gray-700 text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 rounded'>
                 Read more
              </button>
            </div>
          </div>
        </div>

        <div className='flex mb-4 '>
          <div className='w-1/2 p-10 mr-5 rounded overflow-hidden shadow-lg'>
            <h2 className='text-2xl mb-4'>Services</h2>
            <ul className='list-disc flex flex-wrap list-inside'>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Service</a></li>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Service</a></li>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Service</a></li>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Service</a></li>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Service</a></li>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Service</a></li>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Service</a></li>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Service</a></li>
            </ul>
          </div>
          <div className='w-1/2 p-10 ml-5 rounded overflow-hidden shadow-lg'>
            <h2 className='text-2xl mb-4'>Sectors</h2>
            <ul className='list-disc flex flex-wrap list-inside'>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Sector</a></li>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Sector</a></li>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Sector</a></li>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Sector</a></li>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Sector</a></li>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Sector</a></li>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Sector</a></li>
              <li className='w-1/3'><a href='#' title='#' className='text-blue-500'>Sector</a></li>
            </ul>
          </div>
        </div>

      </main>

      <div className='flex my-4'>
        <div className='w-full'>
          <Footer />
        </div>
      </div>

      <style jsx>{`
       
      `}
      </style>

    </div>
  )
}
