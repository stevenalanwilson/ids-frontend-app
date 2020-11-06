import CallToActionLink from '../components/CallToActionLink'

import casestudiesData from '../data/casestudies'

const howCanWeHelp = {
  name: 'How can we help',
  link: '/contect',
  size: 'text-1xl'

}

const randomCaseStudyGen = casestudy => casestudy[Math.floor(Math.random() * (casestudy.length - 1))]

const randomCaseStudy = randomCaseStudyGen(casestudiesData)

function Hero ({ element }) {
  return (
    <div className='w-full relative overflow-hidden'>
      <img src={randomCaseStudy.image} className='object-cover w-full h-200 h-600px' />
      <div className='absolute top-0 left-0 w-full h-600px bg-white bg-opacity-75' />
      <div className='container mx-auto relative '>
        <div className='mx-auto px-10 py-4 absolute left-0 bottom-150px w-2/4'>
          <h1 ref={element} className='font-open-sans font-light text-5xl mb-2'>Latest Case Study: {randomCaseStudy.name}</h1>
          <p className='font-open-sans font-light text-black text-xl mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <CallToActionLink data={howCanWeHelp} />
        </div>
      </div>
      <div className='green-triangle-bottomleft' />
    </div>
  )
}

export default Hero
