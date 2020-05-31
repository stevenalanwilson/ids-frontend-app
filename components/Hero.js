import Link from 'next/link'

const images = [
  '/tmp-image-00001.jpeg',
  '/tmp-image-00002.jpeg',
  '/tmp-image-00003.jpeg',
  '/tmp-image-00004.jpeg',
  '/tmp-image-00005.jpeg',
  '/tmp-image-00006.jpeg',
  '/tmp-image-00007.jpeg',
  '/tmp-image-00008.jpeg'
]

const randomImageGen = quotes => quotes[Math.floor(Math.random() * (quotes.length - 1))]

const randomImage = randomImageGen(images)

function Hero () {
  return (
    <div className='w-full bg-gray-100 rounded overflow-hidden shadow-lg'>
      <img src={randomImage} className='object-cover h-64 w-full' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>Latest Case Study: New Homes in Derby</div>
        <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <Link href='/casestudy'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 rounded'>
             Read more
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
