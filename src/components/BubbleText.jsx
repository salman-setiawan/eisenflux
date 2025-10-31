const BubbleText = ({ type, text, time, children, specsText, specsTime }) => {

  specsText = 'px-3 py-1.5 rounded-xl text-[15px] shadow-md';
  specsTime = 'text-white/40 text-[11px] mt-1.5 mr-1 mb-4';

  return (
    <div className="w-full">
      {type === 'type-2' && (
        <div className="flex justify-start items-end mb-2">
          <div className="flex flex-col max-w-[80%]">
            {children ? (
              <div className="rounded-xl rounded-bl-sm"> {children} </div>
            ) : (
              <div className={`${specsText} bg-neutral-700/50 rounded-bl-sm`}> {text} </div>
            )}
            {time && <div className={`${specsTime}`}>{time}</div> }
          </div>
        </div>
      )}
      {type === 'type-1' && (
        <div className="flex justify-end items-end mb-2">
          <div className="flex flex-col max-w-[80%] items-end">
            {children ? (
              <div className="rounded-xl rounded-br-sm"> {children} </div>
            ) : (
              <div className={`${specsText} bg-orange-700/50 rounded-br-sm`}> {text} </div>
            )}
            {time && <div className={`${specsTime}`}>{time}</div> }
          </div>
        </div>
      )}
    </div>
  )
}

export default BubbleText