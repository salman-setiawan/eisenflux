const WorkChip = ({ label }) => {
  return (
    <div>
      <div className="flex gap-x-3 w-fit items-center">
          <div className="w-[14px] h-[14px] rounded-lg animate-blink"></div>
        <div className="text-relaxed text-[14px] font-semibold"> {label} </div>
      </div>
    </div>
  )
}

export default WorkChip