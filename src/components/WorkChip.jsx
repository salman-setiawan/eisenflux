const WorkChip = ({ label, color }) => {
  return (
    <div>
      <div className="flex gap-x-1.5 md:gap-x-2 w-fit items-center rounded-full">
        <div className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-lg animate-blink"></div>
        <div className={`text-relaxed text-[12px] font-semibold ${color}`}>{label}</div>
      </div>
    </div>
  )
}

export default WorkChip