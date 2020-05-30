function EnquiryCallToAction () {
  return (
    <form className='w-full p-10  bg-gray-400 rounded '>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <h1 className='text-4xl'>How can we help?</h1>
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-first-name'>
          Full Name
          </label>
          <input className='appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id='grid-first-name' type='text' placeholder='full name' />
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-last-name'>
          Email
          </label>
          <input className='appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-last-name' type='text' placeholder='email address' />
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-password'>
          Message
          </label>
          <textarea className='appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-password' type='password' placeholder='How can we help you?' />
          <p className='text-gray-600 text-xs italic'>Make it as long and as crazy as you'd like</p>
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <button class='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type='button'>
        Submit
          </button>
        </div>
      </div>

    </form>
  )
}

export default EnquiryCallToAction
