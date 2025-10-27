import React from 'react'

const BubbleText = ({ type = 'type-1', text, time, children }) => {
  return (
    <div className="w-full">
      {type === 'type-2' && (
        <div className="flex justify-start items-end mb-2">
          <div className="flex flex-col max-w-[80%]">
            <div className="relative">
              {children ? (
                <div className="rounded-xl rounded-bl-sm">
                  {children}
                </div>
              ) : (
                <div className="px-3 py-1.5 rounded-xl bg-neutral-700/50 font-medium text-[15px] rounded-bl-sm">
                  {text}
                </div>
              )}
            </div>
            {time &&
              <div className="text-white/40 text-[11px] mt-1 mr-1 mb-4">{time}</div>
            }
          </div>
        </div>
      )}
      {type === 'type-1' && (
        <div className="flex justify-end items-end mb-2">
          <div className="flex flex-col max-w-[80%] items-end">
            <div className="relative">
              {children ? (
                <div className="rounded-xl rounded-br-sm">
                  {children}
                </div>
              ) : (
                <div className="px-3 py-1.5 rounded-xl bg-orange-900 font-medium text-[15px] rounded-br-sm">
                  {text}
                </div>
              )}
            </div>
            {time &&
              <div className="text-white/40 text-[11px] mt-1 mr-1 mb-4">{time}</div>
            }
          </div>
        </div>
      )}
    </div>
  )
}

export default BubbleText