import Link from 'next/link'

const transistionStyles = [
  'transition',
  'duration-500',
  'ease-in-out'
]

const ctaButtonStyles = [
  ...transistionStyles,
  'group',
  'card',
  'hover:bg-ids-orange',
  'hover:-translate-y-1', 
  'hover:scale-105',
  'bg-white',
  'border-b-8',
  'border-ids-orange',
  'transform'
]


function Card ({ data, path }) {
  const graphic = data.fields.casestudyPhotos ? data.fields.casestudyPhotos[0].fields.file.url : data.fields.graphic.fields.file?.url

  return (
    <div className={data.size + ' ' + ctaButtonStyles.join(' ').toString()}>
      {/* <Link href={{
              pathname: path,
              query: { id: data.sys.id },
            }}>
        <a> */}
          <picture>
            <source media='(min-width: 800px)' srcset={graphic + '?fit=thumb&w=800&h=600&fm=webp&q=80'} />
            <source media='(min-width: 400px)' srcset={graphic + '?fit=thumb&w=400&h=300&fm=webp&q=80'} />
            <img src={graphic + '?fit=thumb&w=400&h=300&fm=webp&q=80'} alt='{data.fields?.name}' />
          </picture>
          <div className='details min-h-85px'>
            <p className='font-open-sans font-light text-black group-hover:text-white p-4  text-lg border-'>
              {data.fields?.name}
            </p>
          </div>
        {/* </a>
      </Link> */}
    </div>
  )
}

export default Card
