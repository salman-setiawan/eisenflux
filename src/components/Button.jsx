import { Link } from 'react-router-dom';

const Button = ({ text, to, target, rel, fullWidth, onClick, style, ...rest }) => {
  const classNames = `flex items-end h-[48px] ${fullWidth ? 'w-full text-start' : 'w-fit'}`;
  const innerButton = (
    <div className="flex rounded-lg pb-1 hover:pb-1.5 bg-black w-full">
      <div className={style}>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
  
  return (
    <Link className={classNames} to={to} target={target} rel={rel} onClick={onClick} {...rest}>
      {innerButton}
    </Link>
  );
};

export default Button;
