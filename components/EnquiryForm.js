import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import CallToActionLink from '../components/CallToActionLink'





function EnquiryForm() {
  const [state, handleSubmit] = useForm("xyyljewk");
  if (state.succeeded) {
    return (
    <div className='w-1/2 px-10'>
      <p className='block text-white text-sm font-open-sans font-light mb-2'>Thanks for your enquiry!</p>
    </div>)
} 

  return (
    <form className='flex' onSubmit={handleSubmit}>
      <div className='w-1/2 px-10'>
        
        <div className='mb-4'>
          <label className='block text-white text-m font-open-sans font-light mb-2' htmlFor='fullname'>
            Full name*
          </label>
          <input 
          name='name' 
          id='name'
          type='text' 
          placeholder='Full name' 
          disabled={state.submitting}
          className='shadow appearance-none border font-open-sans font-light rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  
          required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm font-open-sans font-light mb-2' htmlFor='contactnumber'>
            Contact number*
          </label>
          <input 
          name='contactnumber' 
          id='contactnumber' 
          type='number' 
          placeholder='Contact number' 
          disabled={state.submitting}
          className='shadow appearance-none font-open-sans font-light border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
          required
          />
          <ValidationError 
            prefix="contactnumber" 
            field="contactnumber"
            errors={state.errors}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm font-open-sans font-light mb-2' htmlFor='email'>
            Email address*
          </label>
          <input 
          name='email' 
          id='email' 
          type='email' 
          placeholder='Email address'
          disabled={state.submitting}
          className='shadow appearance-none border font-open-sans font-light border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' 
          required
          />
          <ValidationError 
            prefix="email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div className='flex items-center justify-between'>
          <button 
          className='text-ids-orange bg-white border-white font-open-sans font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:border-black hover:text-black hover:bg-ids-orange' 
          type='submit'
          disabled={state.submitting}
          >
            {state.submitting ? 'Sending your enquiry' : 'Submit'}
            <FontAwesomeIcon size='lg' icon={faArrowCircleRight} className='ml-2' />
          </button>

        </div>
      </div>

      <div className='w-1/2 px-10'>
        <div className='mb-4'>
          <label className='block text-white text-sm font-open-sans font-light mb-2' htmlFor='fullname'>
            Your enquiry
          </label>
          <textarea 
          name='enquiry' 
          id='enquiry' 
          type='text' 
          placeholder='Enquiry...' 
          disabled={state.submitting}
          className='shadow appearance-none border font-open-sans font-light rounded w-full h-200px py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  />
          <ValidationError 
            prefix="enquiry" 
            field="enquiry"
            errors={state.errors}
          />
        </div>
      </div>
    </form>
  )
}

export default EnquiryForm
