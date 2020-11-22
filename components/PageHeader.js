function PageHeader ({ element, entity }) {
  return (
    <div className='w-full relative overflow-hidden'>
      <img src={entity.fields.graphic.fields.file?.url} className='object-cover w-full h-400px lg:h-300px' />
      <div className='absolute top-0 left-0 w-full h-400px lq:h-300px bg-white bg-opacity-75' />
      <div className='container mx-auto relative '>
        <div className='mx-auto px-10 py-4 absolute left-0 bottom-100px md:bottom-50px lg:bottom-25px w-full md:w-2/4'>
          <h1 ref={element} className='font-open-sans font-light text-5xl mb-2'>{entity.fields.name}</h1>
          <p className='font-open-sans font-light text-black text-xl mb-4'>{entity.fields.description}</p>
        </div>
      </div>
      <div className='green-triangle-bottomleft' />
    </div>
  )
}

export default PageHeader
