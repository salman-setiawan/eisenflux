import { textParagraph, textBaseSemi, textMicro } from "../data/uiStyles";

const BubbleText = ({ type, text, time, children, bubbleSpecs, timeSpecs }) => {

  bubbleSpecs = 'px-3 pt-2 pb-1.5 shadow-sm rounded-xl';
  timeSpecs = `${textBaseSemi} ${textMicro} pb-4`;

  return (
    <div className="w-full">

      {type === 'type-2' && (
        <div className="flex justify-start mb-2">
          <div className="flex flex-col gap-y-1.5 max-w-[80%]">
            {children ? (
              <div> {children} </div>
            ) : (
              <div className={`${textParagraph} ${bubbleSpecs} bg-neutral-700/50 rounded-bl-sm`}> {text} </div>
            )}
            {time && <div className={timeSpecs}> {time} </div> }
          </div>
        </div>
      )}

      {type === 'type-1' && (
        <div className="flex justify-end mb-2">
          <div className="flex flex-col gap-y-1.5 max-w-[80%] items-end">
            {children ? (
              <div> {children} </div>
            ) : (
              <div className={`${textParagraph} ${bubbleSpecs} bg-orange-700/50 rounded-br-sm`}> {text} </div>
            )}
            {time && <div className={timeSpecs}> {time} </div> }
          </div>
        </div>
      )}

    </div>
  )
}

export default BubbleText