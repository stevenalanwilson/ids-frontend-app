import Link from 'next/link'

const transistionStyles = [
  'transition',
  'duration-500',
  'ease-in-out'
]

function Card ({ data }) {

  const ctaButtonStyles = {
    outer: [
      ...transistionStyles,
      data.size,
      'group',
      'card',
      'hover:bg-ids-orange',
      'hover:-translate-y-1', 
      'hover:scale-105',
      'bg-white',
      'border-b-8',
      'border-ids-orange',
      'transform'
    ],
    inner: [
      'font-open-sans',
      'font-light',
      'text-black',
      'group-hover:text-white',
      'p-4',
      'text-lg'
    ]
  }

  return (
    <div className={ctaButtonStyles.outer.join(' ').toString()}>
      <Link href={data.fields?.name}>
        <a href={data.fields?.name} title={data.fields?.name}>
          <img src={data.fields.graphic.fields.file?.url} alt={data.fields.graphic.fields?.title} />
          <div className='min-h-85px'>
            <p className={ctaButtonStyles.inner.join(' ').toString()}>
              {data.fields?.name}
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Card
