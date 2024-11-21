
const Chip = ({label}) => {
  return (
    <div>
      <div className="bg-opacity-80 flex gap-x-1 py-1 pl-1.5 pr-2 rounded-lg bg-gray-900 w-fit">
        <img className='w-[18px]' src="folder.svg" alt="icon" />
        <div className="text-relaxed text-[13px] text-gray-400 font-medium"> {label} </div>
      </div>
    </div>
  )
}

export default Chip