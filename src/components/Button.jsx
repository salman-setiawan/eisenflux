

const Button = ({ img, text, bg, color}) => {
  return (
    <div>
      {text &&      
        <div className={`${bg} py-[7px] px-[10px] rounded-lg flex gap-x-1 items-center w-fit`}>
          <img className='w-[20px]' src={img} alt="icon" />
          <p className={`text-${color} font-semibold text-sm`}>{text}</p>
        </div>
      }
    </div>
  )
}

export default Button