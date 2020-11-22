import { useEffect, useState, useRef } from 'react'

import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CaseStudyHeader from '../components/CaseStudyHeader'
import Gallery from 'react-photo-gallery'
import Card from '../components/Card'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

import useSticky from '../hooks/useSticky.js'

import { getACaseSudyByID, getAllCaseStuies } from '../lib/api'

const { richTextFromMarkdown } = require('@contentful/rich-text-from-markdown')

function Index ({ casestudy, body, photos, casestudies }) {
  const { isSticky, element } = useSticky()
  const [isFormOpen, setFormOpen] = useState(false)

  const handleToggleVisibility = (e) => {
    e.preventDefault()
    setFormOpen(!isFormOpen)
  }

  const renderInlineImage = file => <div dangerouslySetInnerHTML={{ __html: `<img alt='${file.alt}' src='${file.url}' class='mb-4' />` }} />

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return renderInlineImage(node.data.target.feilds.file)
      },
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className='heading-1 text-6xl font-open-sans font-light'>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className='heading-2 text-5xl font-open-sans font-light'>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className='heading-3 text-4xl font-open-sans font-light'>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className='heading-4 text-3xl font-open-sans font-light'>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className='heading-5 text-2xl font-open-sans font-light'>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className='heading-6 text-xl font-open-sans font-light'>{children}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <h6 className='leading-loose mb-4 font-open-sans font-light'>{children}</h6>
      )
    }
  }

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
              <Header sticky={isSticky} isFormOpen={isFormOpen} handleToggleVisibility={handleToggleVisibility} />
              <CaseStudyHeader element={element} entity={casestudy} />
            </div>
          </div>
          <div className='pb-4 bg-white'>
            <div className='container flex mx-auto '>
              <div className='w-full md:w-3/4 p-10'>
                <h2 className='text-3xl text-black font-open-sans font-light mb-4'>{casestudy.fields.name}</h2>
                {documentToReactComponents(body, options)}
                <Gallery photos={photos} />
              </div>
              <div className='hidden : md:block w-1/4 p-10' />
            </div>
          </div>
          <div className='pb-4 bg-ids-green h-50px' />
          <div className='pb-4 bg-ids-dark-green'>
            <div className='container mx-auto '>
              <div className='w-full pt-4 px-10 pb-10'>
                <h2 className='text-5xl text-white font-open-sans font-light mb-4'>More case studies</h2>
                <ul className='flex flex-wrap list-none'>
                  {casestudies.items.map(entry => {
                    return <li className='w-full sm:w-1/2 md:w-1/4 lg:w-1/6 flex-none p-2'><Card data={entry} path='/casestudy' /></li>
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

export async function getServerSideProps (context) {
  if (context.query.id) {
    const casestudy = await getACaseSudyByID(context.query.id)
    const casestudies = await getAllCaseStuies()
    const photos = casestudy.fields.casestudyPhotos.map(photo => {
      return {
        src: photo.fields.file.url,
        width: 4,
        height: 3
      }
    })
    const body = await richTextFromMarkdown(casestudy.fields.casestudyDescription)
    return {
      props: { casestudy, body, photos, casestudies }
    }
  }
}

export default Index
