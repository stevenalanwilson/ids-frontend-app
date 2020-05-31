import Link from 'next/link'

import casestudiesData from '../data/casestudies'

const randomCaseStudyGen = casestudy => casestudy[Math.floor(Math.random() * (casestudy.length - 1))]

const randomCaseStudy = randomCaseStudyGen(casestudiesData)

function Hero () {
  return (
    <div className='w-full bg-gray-100 rounded overflow-hidden shadow-lg'>
      <img src={randomCaseStudy.image} className='object-cover h-64 w-full' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>Latest Case Study: {randomCaseStudy.name}</div>
        <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <Link href={randomCaseStudy.link}>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 rounded'>
             Read more
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
