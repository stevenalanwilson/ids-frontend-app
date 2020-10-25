import Link from 'next/link'
import CallToActionLink from '../components/CallToActionLink'
import MenuLink from '../components/MenuLink'

const howCanWeHelp = {
  name: 'How can we help',
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
    link: '/services'
  },
  {
    id: 2,
    name: 'Case Studios',
    link: '/casestudies'
  }
]

function Header () {
  return (
    <header className='py-4 fixed z-50 top-0 left-0 w-full bg-white bg-opacity-75'>
      <nav className='container mx-auto px-4'>
        <ul className='flex items-center'>
          <li className='mr-6'>
            <Link href='/index'>
              <a href='#'>
                <img src='../ids-logo.svg' alt='Logo' className='h-16' />
              </a>
            </Link>
          </li>

          {menuData.map(function (val) {
            return <MenuLink key={val.key} data={val} />
          })}

          <li className='ml-auto'>
            <CallToActionLink data={howCanWeHelp} />
            <Link href='tel:5554280940'>
              <a className='inline-block py-1 px-3 ml-2 font-open-sans font-light text-black cursor-not-allowed' href='tel:5554280940'>01889 568573</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
