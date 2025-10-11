const Button = ({ img, text, bg, color, hoverBg, hoverText }) => {
  return (
    <div
      className={`${bg} ${color} ${hoverBg} ${hoverText} 
      py-2 px-3 flex gap-x-1.5 place-content-center w-full cursor-pointer rounded-full`}
    >
      {img && <img className="w-[16px] md:w-[18px]" src={img} alt="icon" />}
      {text && <p className="font-semibold text-[13px] md:text-[14px]">{text}</p>}
    </div>
  );
};

export default Button;
