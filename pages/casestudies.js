import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'

import casestudiesData from '../data/casestudies'
import sectorsData from '../data/sectors'
import servicesData from '../data/services'

export default function casestudies (props) {
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
            <h1 className='text-4xl'>Case Studies</h1>
            <h2 className='text-2xl'>{props.category}</h2>
          </div>
        </div>

        <div className='flex flex-wrap mb-4'>
          {props.casestudies.map(function (val) {
            return <div className='w-1/4' key={val.id}><Card data={val} /></div>
          })}
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

casestudies.getInitialProps = async (context) => {
  const { type } = context.query
  const { id } = context.query

  const categoryType = type => {
    switch (type) {
      case 'service':
        return 'Service:  ' + servicesData[id].name
      case 'sector':
        return 'Sector:  ' + sectorsData[id].name
      default:
        return ''
    }
  }

  const filterCasestudies = type => {
    switch (type) {
      case 'service':
        return casestudiesData.filter(function (casestudy) {
          return casestudy.services.includes(servicesData[id].id)
        })
      case 'sector':
        return casestudiesData.filter(function (casestudy) {
          return casestudy.sectors.includes(sectorsData[id].id)
        })
      default:
        return casestudiesData
    }
  }

  console.log(casestudies)

  return {
    category: categoryType(type),
    casestudies: filterCasestudies(type)
  }
}
