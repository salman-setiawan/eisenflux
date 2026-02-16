import { bgBrand, textBrandLight, textSub } from "../data/uiStyles"

const Chip = ({ label }) => {
  return (
    <div className={`px-2 py-0.5 ${bgBrand} rounded-md cursor-default`}>
      <div className={`${textSub} ${textBrandLight}`}>{label}</div>
    </div>
  )
}

export default Chip