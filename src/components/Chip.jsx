const Chip = ({ label }) => {
  return (
    <div>
      <div className="flex py-0.5 px-2 bg-[#BC6E1C]/25 w-fit border-2 border-[#D98124] rounded-full">
        <div className="text-[12px] md:text-[12px] font-medium"> {label} </div>
      </div>
    </div>
  )
}

export default Chip