import Link from 'next/link'

function Card ({ data }) {
  console.log(data.fields.serviceGraphic.fields.title)
  return (
    <div className='card bg-white border-b-8 border-ids-orange'>
      <Link href={data.fields.serviceName}>
        <a href='{data.fields.serviceName}' title='{data.name}'>
          <img src={data.fields.serviceGraphic.fields.file.url} alt={data.fields.serviceGraphic.fields.title} />
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
