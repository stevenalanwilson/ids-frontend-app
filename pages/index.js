import { useEffect, useState, useRef } from 'react'

import Link from 'next/link'
import Card from '../components/Card'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import useSticky from '../hooks/useSticky.js'

import casestudyData from '../data/casestudies'

import { getAllServices, getAllSectors, getAllClients, getAllCaseStuies } from '../lib/api'

const randomTestimonial = casestudies => casestudies[Math.floor(Math.random() * (casestudies.length - 1))]

const testimonial = randomTestimonial(casestudyData)

export default function Index ({ allServices, allSectors, allClients, allCaseStudies }) {
  const { isSticky, element } = useSticky()
  const [isFormOpen, setFormOpen] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleToggleVisibility = (e) => {
    e.preventDefault()
    setFormOpen(!isFormOpen)
  }

  const handleMobileMenuToggleVisibility = (e) => {
    e.preventDefault()
    setMobileMenuOpen(!isMobileMenuOpen)
  }

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
              <Header
                sticky={isSticky}
                isFormOpen={isFormOpen}
                handleToggleVisibility={handleToggleVisibility}
                isMobileMenuOpen={isMobileMenuOpen}
                handleMobileMenuToggleVisibility={handleMobileMenuToggleVisibility}
              />
              <Hero element={element} data={allCaseStudies.items} />
            </div>
          </div>
          <div className='pb-4 bg-ids-dark-green'>
            <div className='container mx-auto '>
              <div className='w-full pt-4 px-10 pb-10'>
                <h2 className='text-5xl text-white font-open-sans font-light mb-4'>Services</h2>
                <ul className='flex flex-wrap list-none'>
                  {allServices.items.map(entry => {
                    return <li className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 flex-none p-2'><Card data={entry} path='/services' /></li>
                  }
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className='pb-4 bg-ids-green'>
            <div className='container flex flex-wrap mx-auto '>
              <div className='w-full md:w-1/2 p-10'>
                <h2 className='text-5xl text-white font-open-sans font-light mb-4'>Sectors</h2>
                <ul className='flex flex-wrap'>
                  {allSectors.items.map(entry => {
                    return <li className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 flex-none p-2'><Card data={entry} path='/services' /></li>
                  }
                  )}
                </ul>
              </div>

              <div className='w-full md:w-1/2 p-10'>
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
                  {allClients.items.map(entry => {
                    return <li className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 flex-none p-2'><img src={entry.fields.logo.fields.file.url} alt={entry.fields.logo.fields.title} /></li>
                  }
                  )}
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
      </div>
    </>
  )
}

export async function getStaticProps () {
  const allServices = await getAllServices()
  const allSectors = await getAllSectors()
  const allClients = await getAllClients()
  const allCaseStudies = await getAllCaseStuies()
  return {
    props: { allServices, allSectors, allClients, allCaseStudies }
  }
}
