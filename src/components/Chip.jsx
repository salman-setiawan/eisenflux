import { subText } from "../data/uiStyles"

const Chip = ({ label }) => {
  return (
    <div className="px-2 py-0.5 bg-[#fcdebd]/15 rounded-full cursor-default">
      <div className={`${subText} font-medium text-[#fcdebd]`}>{label}</div>
    </div>
  )
}

export default Chip