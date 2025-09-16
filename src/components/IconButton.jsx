import PropTypes from 'prop-types';

import { Link } from 'react-router-dom'

const IconButton = ({ src, url }) => {
  return (
    <div>
      <Link to={url} target="_blank" rel="noopener noreferrer">
        <div className="snake p-0.5">
          <div className='bg-[#111111] rounded-xl p-2 w-fit'>
            <img className='w-[20px]' src={src} alt="icon" />
          </div>
        </div>
      </Link>
    </div>
  )
}

IconButton.propTypes = { 
  src: PropTypes.string, 
  url: PropTypes.string, 
};

IconButton.defaultProps = { 
  src: null, 
  url: null,  
};

export default IconButton