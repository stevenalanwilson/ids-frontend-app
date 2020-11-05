import Link from 'next/link'
import Card from '../components/Card'

import casestudyData from '../data/casestudies'

import contentfulClient from '../clients/contentfulClient'

const randomTestimonial = casestudies => casestudies[Math.floor(Math.random() * (casestudies.length - 1))]
const testimonial = randomTestimonial(casestudyData)

const index = props => {


  return (
    <>
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
              {props.sectors.items.map(entry => {
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
              {props.clients.items.map(entry => {
                return <li className='w-1/6 flex-none p-2'><img src={entry.fields.logo.fields.file.url} alt={entry.fields.logo.fields.title} /></li>
              }
              )}
            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

index.getInitialProps = async () => {

  const client = contentfulClient()

  const clients = await client.getEntries({
    content_type: 'client'
  })

  const services = await client.getEntries({
    content_type: 'service'
  })

  const sectors = await client.getEntries({
    content_type: 'sector'
  })

  return {
    services: services,
    sectors: sectors,
    clients: clients
  }
}

export default index
