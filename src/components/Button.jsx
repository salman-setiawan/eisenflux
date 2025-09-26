import PropTypes from "prop-types";

const Button = ({ img, text, bg, color, hoverBg, hoverText }) => {
  return (
    <div
      className={`${bg} ${color} ${hoverBg} ${hoverText} 
      p-2.5 rounded-xl flex gap-x-1.5 place-content-center w-full cursor-pointer`}
    >
      {img && <img className="w-[18px] md:w-[20px]" src={img} alt="icon" />}
      {text && <p className="font-semibold text-[13px] md:text-[14px]">{text}</p>}
    </div>
  );
};

Button.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  hoverText: PropTypes.string,
  hoverBg: PropTypes.string,
};

Button.defaultProps = {
  img: null,
  text: null,
  bg: null,
  color: null,
  hoverText: null,
  hoverBg: null,
};

export default Button;
