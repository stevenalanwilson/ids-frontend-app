import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

function EnquiryForm () {
  return (
    <form className='flex'>
      <div className='w-1/2 px-10'>
        <div className='mb-4'>
          <label className='block text-white text-sm font-open-sans font-light mb-2' htmlFor='fullname'>
                  Full name
          </label>
          <input className='shadow appearance-none border font-open-sans font-light rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='fullname' type='text' placeholder='Full name' />
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm font-open-sans font-light mb-2' htmlFor='contactnumber'>
                  Contact number
          </label>
          <input className='shadow appearance-none  font-open-sans font-light border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='contactnumber' type='text' placeholder='Contact number' />
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm font-open-sans font-light mb-2' htmlFor='email'>
                  Email address
          </label>
          <input className='shadow appearance-none border font-open-sans font-light border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='email' type='text' placeholder='Email address' />
        </div>
        <div className='flex items-center justify-between'>
          <button className='text-ids-orange hover:bg-white bg-white font-open-sans font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
                  Sign In
            <FontAwesomeIcon size='lg' icon={faArrowCircleRight} className='ml-2' />
          </button>
        </div>
      </div>

      <div className='w-1/2 px-10'>
        <div className='mb-4'>
          <label className='block text-white text-sm font-open-sans font-light mb-2' htmlFor='fullname'>
                  Your enquiry
          </label>
          <textarea className='shadow appearance-none border font-open-sans font-light rounded w-full h-200px py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='fullname' type='text' placeholder='Enquiry...' />
        </div>
      </div>
    </form>
  )
}

export default EnquiryForm
