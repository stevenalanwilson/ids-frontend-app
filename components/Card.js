import Link from 'next/link'

function Card ({ data }) {
  return (
    <div className='card bg-white border-b-8 border-ids-orange'>
      <Link href={data.fields.serviceName}>
        <a href='{data.fields.serviceName}' title='{data.name}'>
          <img src='/tmp-image-00011.jpeg' alt='alt text' />
        </a>
      </Link>
      <div className='details min-h-85px'>
        <p className='font-open-sans font-light text-black p-4  text-lg border-'>
          <Link href={data.fields.serviceName}>
            <a href='{data.fields.serviceName}' title='{data.fields.serviceName}'>
              {data.fields.serviceName}
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Card
