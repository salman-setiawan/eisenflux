const Button = ({ img, text, bg, color, hoverBg, hoverText }) => {
  return (
    <div
      className={`${bg} ${color} ${hoverBg} ${hoverText} 
      py-2.5 px-3 flex gap-x-1.5 place-content-center w-full cursor-pointer`}
    >
      {img && <img className="w-[18px] md:w-[20px]" src={img} alt="icon" />}
      {text && <p className="font-semibold text-[13px] md:text-[14px]">{text}</p>}
    </div>
  );
};

export default Button;
