import { Link } from 'react-router-dom'

const IconButton = ({ src, url }) => {
  return (
    <div>
      <Link to={url} target="_blank" rel="noopener noreferrer">
        <div className='bg-gray-500 rounded-lg p-1.5 w-fit'>
          <img src={src} alt="icon" />
        </div>
      </Link>
    </div>
  )
}

export default IconButton