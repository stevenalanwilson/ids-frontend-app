import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Link from 'next/link'

import sectorsData from '../data/sectors'
import servicesData from '../data/services'

export default function index () {
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
          <Hero />
        </div>

        <div className='flex mb-4 '>
          <div className='w-1/2 p-10 mr-5 rounded overflow-hidden shadow-lg'>
            <h2 className='text-2xl mb-4'>Services</h2>
            <ul className='flex flex-wrap list-none'>
              {servicesData.map(function (val) {
                return <li className='w-1/3' key={val.id}> <Link href={val.link}><a href={val.link} title={val.name} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-700 hover:text-gray-200 mr-2 mb-2'>{val.name}</a></Link></li>
              })}
            </ul>
          </div>
          <div className='w-1/2 p-10 ml-5 rounded overflow-hidden shadow-lg'>
            <h2 className='text-2xl mb-4'>Sectors</h2>
            <ul className='flex flex-wrap'>
              {sectorsData.map(function (val) {
                return <li className='w-1/3' key={val.id}> <Link href={val.link}><a href={val.link} title={val.name} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-700 hover:text-gray-200 mr-2 mb-2'>{val.name}</a></Link></li>
              })}
            </ul>
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
