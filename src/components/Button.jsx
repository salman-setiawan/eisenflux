import { Link } from 'react-router-dom';

const Button = ({ text, to, target, rel, fullWidth, onClick, children, ...rest }) => {
  const classNames = `flex items-end h-[48px] ${fullWidth ? 'w-full' : 'w-fit'}`;
  const innerButton = (
    <div className="flex rounded-lg pb-1 hover:pb-1.5 bg-black w-full">
      <div className={`bg-white text-black py-1.5 px-2.5 flex gap-x-1.5 w-full cursor-pointer rounded-lg border-3 border-black hover:bg-[#ffaa50]`}>
        {text && <p className="font-bold text-[13px] md:text-[14px]">{text}</p>}
        {children}
      </div>
    </div>
  );
  if (to) {
    return (
      <Link className={classNames} to={to} target={target} rel={rel} onClick={onClick} {...rest}>
        {innerButton}
      </Link>
    );
  }
  return (
    <button className={classNames} onClick={onClick} type="button" {...rest}>
      {innerButton}
    </button>
  );
};

export default Button;
