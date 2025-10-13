/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';

const Button = ({ img, text, to, target, rel, fullWidth }) => {
  return (
    <Link className={`flex items-end h-[48px] ${fullWidth ? 'w-full' : 'w-fit'}`} to={to} target={target} rel={rel}>      
      <div className="flex rounded-lg pb-1 hover:pb-2 bg-black w-full">
        <div className={`bg-white text-black py-1.5 px-2.5 flex gap-x-1.5 w-full cursor-pointer rounded-lg border-4 border-black hover:bg-[#ffaa50]`}>
          {/* {img && <img className="w-[16px] md:w-[18px]" src={img} alt="icon" />} */}
          {text && <p className="font-bold text-[13px] md:text-[14px]">{text}</p>}
        </div>
      </div>
    </Link>
  );
};

export default Button;
