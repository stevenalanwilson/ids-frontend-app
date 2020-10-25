import Link from 'next/link'

function Card ({ data }) {
  return (
    <div className='card bg-white border-b-8 border-ids-orange'>
      <Link href={data.fields.name}>
        <a href='{data.fields.serviceName}' title='{data.fields.serviceName}'>
          <img src={data.fields.graphic.fields.file.url} alt={data.fields.graphic.fields.title} />
        </a>
      </Link>
      <div className='details min-h-85px'>
        <p className='font-open-sans font-light text-black p-4  text-lg border-'>
          <Link href={data.fields.name}>
            <a href='{data.fields.name}' title='{data.fields.name}'>
              {data.fields.name}
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Card
