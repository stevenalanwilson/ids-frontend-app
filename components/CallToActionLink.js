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
  'hover:border-ids-orange',
  'hover:text-ids-orange',
  'text-white hover:bg-white',
  'py-1',
  'px-3'
]

function CallToActionLink ({ data }) {
  return (
    <Link href={data.link}>
      <a className={ctaButtonStyles.join(' ').toString()} href={data.link}>
        {data.name}
        <FontAwesomeIcon size='lg' icon={faArrowCircleRight} className='ml-2' />
      </a>
    </Link>
  )
}

export default CallToActionLink
