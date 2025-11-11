import { dotBlink, subText } from "../data/uiStyles"

const WorkChip = ({ label, color }) => {
  return (
    <div>
      <div className="flex gap-x-1.5 w-fit items-center">
        <div className={dotBlink}></div>
        <div className={`${subText} ${color}`}>{label}</div>
      </div>
    </div>
  )
}

export default WorkChip