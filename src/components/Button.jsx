import PropTypes from 'prop-types';

const Button = ({ img, text, bg, color }) => {
  return (
    <div>
      {text && (
        <div className={`${bg} py-[6px] px-[10px] rounded-lg flex gap-x-1 items-center w-fit`}>
          <img className="w-[20px]" src={img} alt="icon" />
          <p className={`text-${color} font-semibold text-sm`}>{text}</p>
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
};

Button.defaultProps = { 
  img: null, 
  text: null, 
  bg: null, 
  color: null, 
};

export default Button;
