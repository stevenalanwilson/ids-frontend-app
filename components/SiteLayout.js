import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

import useSticky from '../hooks/useSticky'

const SiteLayout = ({ children }) => {
  const { isSticky, element } = useSticky()

  return (
    <>
      <main className='relative w-full'>
        <div>
          <div>
            <Header sticky={isSticky} />
            <Hero element={element} />
          </div>
        </div>
        {children}
        <div className='bg-black'>
          <div className='container mx-auto '>
            <div className='w-full'>
              <Footer />
            </div>
          </div>
        </div>
      </main>

    </>
  )
}

export default SiteLayout
