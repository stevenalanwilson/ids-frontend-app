import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Link from 'next/link'

import sectorsData from '../data/sectors'
import servicesData from '../data/services'
import casestudyData from '../data/casestudies'
import clientData from '../data/clients'

import contentfulClient from '../clients/contentfulClient'
import config from '../config'

const randomTestimonial = casestudies => casestudies[Math.floor(Math.random() * (casestudies.length - 1))]
const testimonial = randomTestimonial(casestudyData)

const index = props => {
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

      <main className='relative w-full'>
        <div>
          <div>
            <Header />
            <Hero />
          </div>
        </div>

        <div className='flex mb-4 '>
          <div className='w-1/2 p-10 mr-5 rounded overflow-hidden shadow-lg'>
            <h2 className='text-2xl mb-4'>Services</h2>
            <ul className='flex flex-wrap list-none'>
              {props.services.items.map(entry => {
                return <li className='w-1/3' key={entry.fields.serviceName}> <Link href={entry.fields.serviceName}><a href={entry.fields.serviceName} title={entry.fields.serviceName} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-700 hover:text-gray-200 mr-2 mb-2'>{entry.fields.serviceName}</a></Link></li>
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

        <div className='flex mb-4 '>
          <div className='w-1/2 p-10 mr-5 rounded overflow-hidden shadow-lg'>
            <h2 className='text-2xl mb-4'>Testimonials</h2>
            <p className='italic text-lg text-gray-500'>"{testimonial.testimonials[0]}" - <Link href={testimonial.link}><a className='underline'>{testimonial.company}</a></Link></p>

          </div>
          <div className='w-1/2 p-10 ml-5 rounded overflow-hidden shadow-lg'>
            <h2 className='text-2xl mb-4'>Who we work with</h2>
            <ul className='flex flex-wrap list-none'>
              {clientData.map(function (val) {
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

index.getInitialProps = async () => {
  const client = contentfulClient(config)

  const services = await client.getEntries({
    content_type: 'service'
  })

  return {
    services: services
  }
}

export default index
