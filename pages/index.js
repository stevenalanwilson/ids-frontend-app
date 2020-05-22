import Head from 'next/head'

export default function Home () {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>IDS Website - Prototype</title>
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <main>

        <div className='flex my-4'>
          <div className='w-full p-2'>

            <header>
              <div className='flex items-center'>
                <div>
                  <img src='ids-logo.svg' alt='Logo' className='h-16' />
                </div>
                <div className='ml-6'>
                  <h1 className='text-l text-gray-400'>IDS Website Prototype</h1>
                </div>
              </div>

            </header>
          </div>
        </div>

        <div className='flex my-4'>
          <div className='w-full p-2'>
            <nav>
              <ul className='flex'>
                <li className='mr-3'>
                  <a className='inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' href='#'>Home</a>
                </li>
                <li className='mr-3'>
                  <a className='inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3' href='#'>Services</a>
                </li>
                <li className='mr-3'>
                  <a className='inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3' href='#'>Case Studies</a>
                </li>
                <li className='mr-3'>
                  <a className='inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3' href='#'>Contact</a>
                </li>
                <li className='ml-auto'>
                  <a className='inline-block py-1 px-3  text-gray-400 cursor-not-allowed' href='#'>01889 568573</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className='flex my-4'>
          <div className='w-full bg-gray-100 rounded overflow-hidden shadow-lg'>
            <img src='tmp-hero.jpg' className='object-cover h-200 w-full' />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>Latest Case Study: New Homes in Derby</div>
              <p className='text-gray-700 text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 rounded'>
                 Read more
              </button>
            </div>
          </div>
        </div>

        <div className='flex mb-4'>
          <div className='w-1/2 h-12' />
          <div className='w-1/2 h-12' />
        </div>

      </main>

      <footer />

      <style jsx>{`
       
      `}
      </style>

    </div>
  )
}
