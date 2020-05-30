import Link from 'next/link'

function Card ({ data }) {
  return (
    <div className='w-full p-5'>
      <div className='w-full rounded overflow-hidden shadow-lg'>
        <Link href={data.link}>
          <a href={data.link}>
            <img className='w-full' src='tmp-hero.jpg' alt='Sunset in the mountains' />
          </a>
        </Link>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{data.name}</div>
          <p className='text-gray-700 text-base'>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
