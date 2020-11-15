function CaseStudiesHeader ({ element }) {
  return (
    <div className='w-full relative overflow-hidden'>
      <div className='w-full h-300px' />
      <div className='absolute top-0 left-0 w-full h-300px bg-white bg-opacity-75' />
      <div className='container mx-auto relative '>
        <div className='mx-auto px-10 py-4 absolute left-0 bottom-25px w-2/4'>
          <h1 ref={element} className='font-open-sans font-light text-5xl mb-2'>Case Studies</h1>
          <p className='font-open-sans font-light text-black text-xl mb-4'>All about the case studies</p>
        </div>
      </div>
      <div className='green-triangle-bottomleft' />
    </div>
  )
}

export default CaseStudiesHeader
