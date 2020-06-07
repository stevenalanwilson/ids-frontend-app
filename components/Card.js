import Link from 'next/link'
import sectorData from '../data/sectors'
import serviceData from '../data/services'

function Card ({ data }) {
  const hasSectors = !!data.sectors
  const hasServices = !!data.services
  return (
    <div className='w-full p-5'>
      <div className='w-full rounded overflow-hidden shadow-lg'>
        <Link href={data.link}>
          <a>
            <img className='w-full' src={data.image} alt='Sunset in the mountains' />
          </a>
        </Link>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{data.name}</div>
          <p className='text-gray-700 text-base'>{data.description}</p>
        </div>
        <div class='px-6 py-1'>
          {hasSectors && data.sectors.map(function (sector) {
            return <Link href={sectorData.find(s => s.id === sector).link} key={sector}><a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' key={sector}>{sectorData.find(s => s.id === sector).name}</a></Link>
          })}
          {hasServices && data.services.map(function (sector) {
            return <Link href={serviceData.find(s => s.id === sector).link} key={sector}><a className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2' key={sector}>{serviceData.find(s => s.id === sector).name}</a></Link>
          })}
        </div>
      </div>
    </div>
  )
}

export default Card
