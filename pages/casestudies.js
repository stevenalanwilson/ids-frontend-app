import { useEffect, useState, useRef } from 'react'

import Card from '../components/Card'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CaseStudiesHeader from '../components/CaseStudiesHeader'
import FilterLink from '../components/FilterLink'
import useSticky from '../hooks/useSticky.js'

import { getAllSectors, getAllServices, getAllCaseStuies, searchCaseStuies } from '../lib/api'

function Index ({ allSectors, allServices, sector, casestudies, current }) {
  const { isSticky, element } = useSticky()
  const [isFormOpen, setFormOpen] = useState(false)

  const handleToggleVisibility = (e) => {
    e.preventDefault()
    setFormOpen(!isFormOpen)
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
              <Header sticky={isSticky} isFormOpen={isFormOpen} handleToggleVisibility={handleToggleVisibility} />
              <CaseStudiesHeader element={element} />
            </div>
          </div>
          <div className='pb-4 bg-ids-dark-green'>
            <div className='container flex mx-auto '>
              <div className='hidden sm:block md:w-1/4 p-5'>
                <div className='md:p-5 lg:p-10 bg-white'>
                  <h2 className='text-3xl text-black font-open-sans font-light mb-4'>Filter</h2>

                  <h3 className='text-2xl text-black font-open-sans font-light mb-2'>Sectors</h3>

                  <ul className='list-none'>
                    {allSectors.items.map(entry => {
                      return <li className='py-1'><FilterLink data={entry} category='sector' current={current} /></li>
                    }
                    )}
                  </ul>

                  <h3 className='text-2xl text-black font-open-sans font-light mb-2'>Services</h3>

                  <ul className='list-none'>
                    {allServices.items.map(entry => {
                      return <li className='py-1'><FilterLink data={entry} category='service' current={current} /></li>
                    }
                    )}
                  </ul>
                </div>
              </div>
              <div className='w-full md:w-3/4 p-10'>
                <h2 className='text-5xl text-white font-open-sans font-light mb-4'>Case Studies</h2>
                <ul className='flex flex-wrap list-none'>
                  {casestudies.items.map(entry => {
                    return <li className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-none p-2'><Card data={entry} path='/casestudy' /></li>
                  }
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className='pb-4 bg-ids-green h-50px' />
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

export async function getServerSideProps (context) {
  let current = ''
  const allSectors = await getAllSectors()
  const allServices = await getAllServices()
  let casestudies = await getAllCaseStuies()
  const sector = allSectors.items[0]
  if (context.query.id) {
    current = context.query.id
    casestudies = await searchCaseStuies(context.query.id, context.query.category)
  }
  return {
    props: { allSectors, allServices, sector, casestudies, current }
  }
}

export default Index
