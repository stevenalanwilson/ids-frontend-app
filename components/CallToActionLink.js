import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const transistionStyles = [
  'transition',
  'duration-500',
  'ease-in-out'
]

const ctaButtonStyles = [
  ...transistionStyles,
  'inline-block',
  'border',
  'bg-ids-orange',
  'border-ids-orange',
  'rounded',
  'text-white',
  'hover:border-ids-orange',
  'hover:bg-white',
  'hover:text-black',
  'py-3',
  'px-6',
  'font-open-sans',
  'font-light'
]

function CallToActionLink ({ data }) {
  return (
    <Link href={data.link}>
      <a className={data.size + ' ' + ctaButtonStyles.join(' ').toString()} href={data.link}>
        {data.name}
        <FontAwesomeIcon size='lg' icon={faArrowCircleRight} className='ml-2' />
      </a>
    </Link>
  )
}

export default CallToActionLink
