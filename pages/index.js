import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Link from 'next/link'
import Card from '../components/Card'

import sectorsData from '../data/sectors'
import servicesData from '../data/services'
import casestudyData from '../data/casestudies'
import clientData from '../data/clients'

import useSticky from '../hooks/useSticky.js'

import contentfulClient from '../clients/contentfulClient'
import config from '../config'

const randomTestimonial = casestudies => casestudies[Math.floor(Math.random() * (casestudies.length - 1))]
const testimonial = randomTestimonial(casestudyData)

const index = props => {
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

        <div className='pb-4 bg-ids-dark-green'>
          <div className='container mx-auto '>
            <div className='w-full pt-4 px-10 pb-10'>
              <h2 className='text-5xl text-white font-open-sans font-light mb-4'>Services</h2>
              <ul className='flex flex-wrap list-none'>
                {props.services.items.map(entry => {
                  return <li className='w-1/6 flex-none p-2'><Card data={entry} /></li>
                }
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className='pb-4 bg-ids-green'>
          <div className='container flex mx-auto '>
            <div className='w-1/2 p-10'>
              <h2 className='text-5xl text-white font-open-sans font-light mb-4'>Sectors</h2>
              <ul className='flex flex-wrap'>
                {props.services.items.map(entry => {
                  return <li className='w-1/3 flex-none p-2'><Card data={entry} /></li>
                }
                )}
              </ul>
            </div>

            <div className='w-1/2 p-10'>
              <h2 className='text-5xl text-white font-open-sans font-light mb-4'>Testimonials</h2>
              <p className='italic text-2xl font-open-sans font-light text-white'>"{testimonial.testimonials[0]}" - <Link href={testimonial.link}><a className='underline'>{testimonial.company}</a></Link></p>

            </div>
          </div>
        </div>

        <div className='pb-4'>
          <div className='container mx-auto '>
            <div className='w-full p-10 ml-5 '>
              <h2 className='text-5xl text-black font-open-sans font-light mb-4'>Who we work with</h2>
              <ul className='flex flex-wrap list-none'>
                {clientData.map(function (val) {
                  return <li className='w-1/3' key={val.id}> <Link href={val.link}><a href={val.link} title={val.name} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-700 hover:text-gray-200 mr-2 mb-2'>{val.name}</a></Link></li>
                })}
              </ul>

            </div>
          </div>
        </div>

        <div className='bg-black'>
          <div className='container mx-auto '>
            <div className='w-full'>
              <Footer />
            </div>
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
