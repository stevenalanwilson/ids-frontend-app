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
  'lg:inline-block',
  'lg:border',
  'lg:border-transparent',
  'lg:rounded',
  'lg:text-black',
  'lg:hover:border-ids-orange',
  'lg:hover:text-white',
  'lg:hover:bg-ids-orange',
  'lg:py-1',
  'lg:px-3',
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
    <li className='p-5 border-b lg:p-0 lg:border-0 lg:mr-6'>
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
