import { textBaseSemi, textMicro } from "../data/uiStyles"

const Footnote = () => {
  return (
    <div>
      <div className={`text-center ${textMicro} ${textBaseSemi} cursor-default my-1`}>
        <p>@ 2025 ENFX. All right reserved.</p>
        <p>Created with React.js and TailwindCSS.</p>
      </div>
    </div>
  )
}

export default Footnote