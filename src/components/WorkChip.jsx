const WorkChip = ({ label }) => {
  return (
    <div>
      <div className="flex gap-x-2 w-fit items-center px-2 py-0.5 bg-[#0a0a0a] rounded-full">
        <div className="w-[10px] h-[10px] rounded-lg animate-blink"></div>
        <div className="text-relaxed text-[13px] font-semibold">{label}</div>
      </div>
    </div>
  )
}

export default WorkChip