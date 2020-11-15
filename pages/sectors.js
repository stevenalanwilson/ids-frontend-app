import Card from '../components/Card'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import useSticky from '../hooks/useSticky.js'



import { getAllSectors, getASectorByID, getAllCaseStuies, getCaseStuiesBySector } from '../lib/api'

function Index({ allSectors, sector, casestudies}) {
  const { isSticky, element } = useSticky()
  return (
    <>
    <div className='shadow-md mx-auto'>
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

      <main className='relative w-full'>
        <div>
          <div>
            <Header sticky={isSticky} />
            <PageHeader element={element}  entity={sector} />
          </div>
        </div>
      <div className='pb-4 bg-ids-dark-green'>
        <div className='container mx-auto '>
          <div className='w-full pt-4 px-10 pb-10'>
            <ul className='flex flex-wrap list-none'>
              {allSectors.items.map(entry => {
                return <li className='w-1/6 flex-none p-2'><Card data={entry} path='/sectors'/></li>
              }
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className='pb-4 bg-ids-green h-50px'></div>
      <div className='pb-4 bg-gray-100'>
        <div className='container mx-auto '>
          <div className='w-full pt-4 px-10 pb-10'>
            <h2 className='text-5xl text-black font-open-sans font-light mb-4'>Case studies</h2>
            <ul className='flex flex-wrap list-none'>
              {casestudies.items.map(entry => {
                return <li className='w-1/6 flex-none p-2'><Card data={entry} path='/casestudy'/></li>
              }
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-black'>
          <div className='container mx-auto '>
            <div className='w-full'>
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export async function getServerSideProps(context) {
  console.log(context.query.id)
  const allSectors = await getAllSectors()
  let casestudies = await getAllCaseStuies()
  let sector = allSectors.items[0]
  if(context.query.id) {
    sector = await getASectorByID(context.query.id)
    casestudies = await getCaseStuiesBySector(context.query.id)
  } 
  return {
    props: { allSectors, sector, casestudies },
  }

}

export default Index