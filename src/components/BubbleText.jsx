import { paragraphText } from "../data/uiStyles";

const BubbleText = ({ type, text, time, children }) => {
  return (
    <div className="w-full">
      {type === 'type-2' && (
        <div className="flex justify-start items-end mb-2">
          <div className="flex flex-col gap-y-1.5 max-w-[80%]">
            {children ? (
              <div> {children} </div>
            ) : (
              <div className={`${paragraphText} bg-neutral-700/50 rounded-bl-sm px-3 pt-2 pb-1.5 shadow-sm rounded-xl`}> {text} </div>
            )}
            {time && <div className='text-white/60 text-[11px] pb-4'>{time}</div> }
          </div>
        </div>
      )}
      {type === 'type-1' && (
        <div className="flex justify-end items-end mb-2">
          <div className="flex flex-col gap-y-1.5 max-w-[80%] items-end">
            {children ? (
              <div> {children} </div>
            ) : (
              <div className={`${paragraphText} bg-orange-700/50 rounded-br-sm px-3 pt-2 pb-1.5 shadow-sm rounded-xl`}> {text} </div>
            )}
            {time && <div className='text-white/60 text-[11px] pb-4'>{time}</div> }
          </div>
        </div>
      )}
    </div>
  )
}

export default BubbleText