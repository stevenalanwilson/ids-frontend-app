import Link from 'next/link'
import CallToActionLink from '../components/CallToActionLink'
import MenuLink from '../components/MenuLink'
import EnquiryForm from '../components/EnquiryForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const howCanWeHelp = {
  name: 'How can we help?',
  alt: 'Close',
  link: '/contect',
  size: 'text-base'
}

const menuData = [
  {
    id: 0,
    name: 'Services',
    link: '/services'
  },
  {
    id: 1,
    name: 'Sectors',
    link: '/sectors'
  },
  {
    id: 2,
    name: 'Case Studies',
    link: '/casestudies'
  }
]
const transistionStyles = [
  'transition',
  'duration-500',
  'ease-in-out'
]

const stickyHeaderStyle = [
  'lg:bg-white',
  'border-b-4',
  'border-grey',
  'border-opacity-25'
]

function Header ({ sticky, element, isFormOpen, handleToggleVisibility }) {
  const formStyles = [
    ...transistionStyles,
    'bg-ids-orange',
    'fixed',
    'z-40',
    'top-0',
    'left-0',
    'w-full',
    isFormOpen ? '' : 'hidden'
  ]
  const headerStyle = [
    ...transistionStyles,
    'lg:py-4',
    'fixed',
    'z-50',
    'top-0',
    'left-0',
    'w-full',
    'bg-white',
    'lg:bg-transparent',
    isFormOpen ? 'bg-white' : ''
  ]
  return (
    <>
      <div className={formStyles.join(' ').toString()}>
        <div id='enquiry' className='container mx-auto px-4 pt-20 h-600px'>
          <div className='w-full px-10 pt-10 pb-5'>
            <h2 className='text-5xl text-white font-open-sans font-light'>How can we help?</h2>
          </div>
          <EnquiryForm />
        </div>
      </div>
      <header className={sticky ? headerStyle.join(' ').toString() + ' ' + stickyHeaderStyle.join(' ').toString() : headerStyle.join(' ').toString()}>
        <nav className='lg:container lg:mx-auto lg:px-4'>
          <ul className='lg:flex lg:items-center'>
            <li className='mr-6 hidden lg:inline-block'>
              <Link href='/index'>
                <a href='#'>
                  <img src='../ids-logo.svg' alt='Logo' className='h-16' />
                </a>
              </Link>
            </li>

            {menuData.map(function (val) {
              return <MenuLink key={val.key} data={val} />
            })}

            <li className='ml-auto  hidden lg:inline-block'>
              <CallToActionLink
                data={howCanWeHelp}
                handleToggleVisibility={handleToggleVisibility}
                isFormOpen={isFormOpen}
              />
              <Link href='tel:5554280940 hidden lg:inline-block'>
                <a className='inline-block py-1 px-3 ml-2 font-open-sans font-light text-black cursor-not-allowed' href='tel:5554280940'>01889 568573</a>
              </Link>
            </li>
          </ul>
        </nav>
        <ul className='flex lg:hidden  items-center'>
          <li className='ml-2'>
            <Link href='/index'>
              <a href='#'>
                <img src='../ids-logo.svg' alt='Logo' className='p-1 h-16' />
              </a>
            </Link>
          </li>
          <li>
            <Link href='tel:5554280940'>
              <a className='inline-block py-1 px-3 ml-2 font-open-sans font-light text-black cursor-not-allowed' href='tel:5554280940'>01889 568573</a>
            </Link>
          </li>
          <li className='ml-auto'>
            <Link href='/index'>
              <a href='#' className='bg-ids-orange m-0 text-white inline-block lg:hidden'>
                <FontAwesomeIcon size='lg' icon={faBars} className='m-6' />
              </a>
            </Link>
          </li>
        </ul>

      </header>
    </>
  )
}

export default Header
