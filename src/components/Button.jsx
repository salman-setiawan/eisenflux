import PropTypes from 'prop-types';
import { useState } from 'react';

const Button = ({ img, text, bg, color, hoverColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      {text && (
        <div
          className={`${bg} py-[6px] px-[10px] rounded-lg flex gap-x-1 items-center w-fit cursor-pointer`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {img && <img className="w-[20px]" src={img} alt="icon" />}
          <p
            className="font-semibold text-sm"
            style={{ color: isHovered ? hoverColor : color }}
          >
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

Button.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,      
  hoverColor: PropTypes.string, 
};

Button.defaultProps = {
  img: null,
  text: null,
  bg: null,
  color: null,
  hoverColor: null, 
};

export default Button;
