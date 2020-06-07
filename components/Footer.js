import Link from 'next/link'

function Footer () {
  return (
    <footer className='p-10 bg-gray-800 rounded overflow-hidden shadow-lg'>

      <nav>
        <ul className='flex items-center'>
          <li className='mr-6'>
            <Link href='/index'>
              <a href='#'>
                <img src='../ids-logo-white.svg' alt='Logo' className='h-16' />
              </a>
            </Link>
          </li>
          <li className='mr-3'>
            <Link href='/index'>
              <a className='inline-block text-white py-1 px-3 hover:underline' href='#'>Home</a>
            </Link>
          </li>
          <li className='mr-3'>
            <Link href='/services'>
              <a className='inline-block text-white py-1 px-3 hover:underline' href='#'>Services</a>
            </Link>
          </li>
          <li className='mr-3'>
            <Link href='/sectors'>
              <a className='inline-block text-white py-1 px-3 hover:underline' href='#'>Sectors</a>
            </Link>
          </li>
          <li className='mr-3'>
            <Link href='/casestudies'>
              <a className='inline-block text-white py-1 px-3 hover:underline' href='#'>Case Studies</a>
            </Link>
          </li>
          <li className='mr-3'>
            <Link href='/contact'>
              <a className='inline-block text-white py-1 px-3 hover:underline' href='#'>Contact</a>
            </Link>
          </li>
          <li className='ml-auto'>
            <a className='inline-block py-1 px-3  text-white cursor-not-allowed' href='#'>01889 568573</a>
          </li>
        </ul>
      </nav>

    </footer>
  )
}

export default Footer
