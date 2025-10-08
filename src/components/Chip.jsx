const Chip = ({ label }) => {
  return (
    <div>
      <div className="flex py-0.5 px-1.5 bg-neutral-700/40 w-fit border-2 border-neutral-700">
        <div className="text-[12px] md:text-[12px] font-medium"> {label} </div>
      </div>
    </div>
  )
}

export default Chip