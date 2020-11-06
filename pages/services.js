import Link from 'next/link'
import Card from '../components/Card'

import { getAllServices, getAllSectors, getAllClients } from '../lib/api'

export default function Index({ allServices, allSectors, allClients }) {

  return (
    <>
      <div className='pb-4 bg-ids-dark-green'>
        <div className='container mx-auto '>
          <div className='w-full pt-4 px-10 pb-10'>
            <ul className='flex flex-wrap list-none'>
              {allServices.items.map(entry => {
                return <li className='w-1/6 flex-none p-2'><Card data={entry} /></li>
              }
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className='pb-4 bg-ids-green h-50px'></div>
      <div className='pb-4 bg-gray-100'>
        <div className='container mx-auto '>
          <div className='w-full pt-4 px-10 pb-10'>
            <h2 className='text-5xl text-black font-open-sans font-light mb-4'>Case studies</h2>
            <ul className='flex flex-wrap list-none'>
              {allServices.items.map(entry => {
                return <li className='w-1/6 flex-none p-2'><Card data={entry} /></li>
              }
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}


export async function getStaticProps() {
  const allServices = await getAllServices()
  const allSectors = await getAllSectors()
  const allClients = await getAllClients()
  return {
    props: { allServices, allSectors, allClients },
  }
}
