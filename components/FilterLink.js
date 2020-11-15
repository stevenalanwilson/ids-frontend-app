import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'

const transistionStyles = [
    'transition',
    'duration-500',
    'ease-in-out'
  ]
  


  function FilterLink ({ data, category, current }) {
    const buttonStyles = [
        ...transistionStyles,
        'inline-block',
        'border',
        'border-transparent',
        'rounded',
        'hover:text-ids-orange',
        'py-1',
        'font-open-sans',
        'font-light',
        current === data.sys.id ? 'text-ids-orange' : 'text-black'
      ]
      
    return (
        <Link href={{
            pathname: '/casestudies',
            query: {
                category: category,
                id: data.sys.id
            },
          }}>
            <a className={data.size + ' ' + buttonStyles.join(' ').toString()}>
            <FontAwesomeIcon size='lg' icon={current === data.sys.id ? faCheckSquare : faSquare} className='mr-2' />
              {data.fields.name}
            </a>
          </Link>
    )
  }
  
  export default FilterLink