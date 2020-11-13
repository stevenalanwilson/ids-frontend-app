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

function Card ({ data }) {
  return (
    <div className={data.size + ' ' + ctaButtonStyles.join(' ').toString()}>
      <Link href={{
              pathname: '/services',
              query: { id: data.sys.id },
            }}>
        <a>
          <img src={data.fields.graphic.fields.file?.url} alt={data.fields.graphic.fields?.title} />
          <div className='details min-h-85px'>
            <p className='font-open-sans font-light text-black group-hover:text-white p-4  text-lg border-'>
              {data.fields?.name}
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Card
