 
import { Link } from 'react-router-dom';

const Button = ({ text, to, target, rel, fullWidth }) => {
  return (
    <Link className={`flex items-end h-[48px] ${fullWidth ? 'w-full' : 'w-fit'}`} to={to} target={target} rel={rel}>      
      <div className="flex rounded-lg pb-1 hover:pb-1.5 bg-black w-full">
        <div className={`bg-white text-black py-1.5 px-2.5 flex gap-x-1.5 w-full cursor-pointer rounded-lg border-3 border-black hover:bg-[#ffaa50]`}>
          {text && <p className="font-bold text-[13px] md:text-[14px]">{text}</p>}
        </div>
      </div>
    </Link>
  );
};

export default Button;
