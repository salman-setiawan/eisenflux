const WorkChip = ({ label, color }) => {
  return (
    <div>
      <div className="flex gap-x-1.5 w-fit items-center">
        <div className="w-[10px] h-[10px] rounded-full animate-blink"></div>
        <div className={`text-[12px] font-semibold ${color}`}>{label}</div>
      </div>
    </div>
  )
}

export default WorkChip