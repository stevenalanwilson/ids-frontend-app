import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import React, { useReducer, useState } from 'react';

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      name: '',
      contactnumber: '',
      email: '',
      enquiry: '',
    }
  }

  return {
    ...state,
    [event.name]: event.value
  }
}

function EnquiryForm() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 3000)
  }
  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }


  return (
    <form className='flex' onSubmit={handleSubmit}>
      <div className='w-1/2 px-10'>
        {submitting &&
          <div>
            You are submitting the following:
          <ul>
              {Object.entries(formData).map(([name, value]) => (
                <li key={name}><strong>{name}</strong>:{value.toString()}</li>,
                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                ))}
            </ul>
          </div>
        }
        <div className='mb-4'>
          <label className='block text-white text-sm font-open-sans font-light mb-2' htmlFor='fullname'>
            Full name
          </label>
          <input name='name' id='name' type='text' placeholder='Full name' onChange={handleChange} value={formData.name || ''} disabled={submitting} className='shadow appearance-none border font-open-sans font-light rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  />
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm font-open-sans font-light mb-2' htmlFor='contactnumber'>
            Contact number
          </label>
          <input  name='contactnumber' id='contactnumber' type='text' placeholder='Contact number' onChange={handleChange} value={formData.contactnumber || ''} disabled={submitting} className='shadow appearance-none font-open-sans font-light border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        </div>
        <div className='mb-4'>
          <label className='block text-white text-sm font-open-sans font-light mb-2' htmlFor='email'>
            Email address
          </label>
          <input  name='email' id='email' type='text' placeholder='Email address' onChange={handleChange} value={formData.email || ''} disabled={submitting} className='shadow appearance-none border font-open-sans font-light border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' />
        </div>
        <div className='flex items-center justify-between'>
          <button className='text-ids-orange hover:bg-white bg-white font-open-sans font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
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
          <textarea name='enquiry' id='enquiry' type='text' placeholder='Enquiry...' onChange={handleChange} value={formData.enquiry || ''} disabled={submitting} className='shadow appearance-none border font-open-sans font-light rounded w-full h-200px py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
        </div>
      </div>
    </form>
  )
}

export default EnquiryForm
