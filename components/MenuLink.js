import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faFileAlt, faDraftingCompass } from '@fortawesome/free-solid-svg-icons'

const transistionStyles = [
  'transition',
  'duration-500',
  'ease-in-out'
]

const buttonStyles = [
  ...transistionStyles,
  'inline-block',
  'border',
  'border-transparent',
  'rounded',
  'text-black',
  'hover:border-ids-orange',
  'hover:text-white',
  'hover:bg-ids-orange',
  'py-1',
  'px-3',
  'font-open-sans',
  'font-light'
]
/* eslint-disable */
const map = {
  'Services': faDraftingCompass, 
  'Sectors': faBuilding, 
  'Case Studies': faFileAlt
}
/* eslint-enable */

function MenuLink ({ data }) {
  return (
    <li className='mr-6'>
      <Link href={data.link}>
        <a href='#' className={buttonStyles.join(' ').toString()}>
          {data.name}
          <FontAwesomeIcon size='lg' icon={map[data.name]} className='ml-2' />

        </a>

      </Link>
    </li>
  )
}

export default MenuLink
