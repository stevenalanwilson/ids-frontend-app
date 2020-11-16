function CaseStudyHeader ({ element, entity }) {
  return (
    <div className='mt-24 w-full relative overflow-hidden'>
      <img ref={element} src={entity.fields.casestudyPhotos[0].fields.file.url} className='object-cover w-full h-500px' />
      <div className='white-triangle-bottomleft' />
    </div>
  )
}

export default CaseStudyHeader
