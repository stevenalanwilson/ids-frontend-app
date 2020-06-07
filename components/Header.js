import Link from 'next/link'

function Header () {
  return (
    <header>
      <nav>
        <ul className='flex items-center'>
          <li className='mr-6'>
            <Link href='/index'>
              <a href='#'>
                <img src='../ids-logo.svg' alt='Logo' className='h-16' />
              </a>
            </Link>
          </li>
          <li className='mr-3'>
            <Link href='/services'>
              <a className='inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3' href='#'>Services</a>
            </Link>
          </li>
          <li className='mr-3'>
            <Link href='/sectors'>
              <a className='inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3' href='#'>Sectors</a>
            </Link>
          </li>
          <li className='mr-3'>
            <Link href='/casestudies'>
              <a className='inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3' href='#'>Case Studies</a>
            </Link>
          </li>
          <li className='mr-3'>
            <Link href='/contact'>
              <a className='inline-block border bg-blue-500 border-blue-500 rounded hover:border-blue-500 hover:text-blue-500 text-white hover:bg-gray-200 py-1 px-3' href='#'>How can we help you?</a>
            </Link>
          </li>
          <li className='ml-auto'>
            <a className='inline-block py-1 px-3  text-gray-400 cursor-not-allowed' href='#'>01889 568573</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
