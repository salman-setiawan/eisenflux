import { brandBaseColour, brandLighterColourText, subText } from "../data/uiStyles"

const Chip = ({ label }) => {
  return (
    <div className={`px-2 py-0.5 ${brandBaseColour} rounded-full cursor-default`}>
      <div className={`${subText} ${brandLighterColourText}`}>{label}</div>
    </div>
  )
}

export default Chip