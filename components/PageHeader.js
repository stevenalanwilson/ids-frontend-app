import casestudiesData from '../data/casestudies'

const randomCaseStudyGen = casestudy => casestudy[Math.floor(Math.random() * (casestudy.length - 1))]

const randomCaseStudy = randomCaseStudyGen(casestudiesData)

function PageHeader ({ element }) {
  return (
    <div className='w-full relative overflow-hidden'>
      <img src={randomCaseStudy.image} className='object-cover w-full h-200 h-200px' />
      <div className='absolute top-0 left-0 w-full h-200px bg-white bg-opacity-75' />
      <div className='container mx-auto relative '>
        <div className='mx-auto px-10 py-4 absolute left-0 bottom-0 w-2/4'>
          <h1 ref={element} className='font-open-sans font-light text-5xl mb-2'>Page Title</h1>
        </div>
      </div>
      <div className='triangle-bottomleft' />
    </div>
  )
}

export default PageHeader
