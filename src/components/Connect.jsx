import Button from "./Button"

const Connect = () => {
  return (
    <div>
      <div className="py-3 bg-[#141414] border border-neutral-800 flex flex-col gap-y-6 justify-center rounded-xl">
        {/* Marquee Text */}
        <div className="overflow-hidden" style={{ transform: 'translateZ(0)' }}>
          <div className="flex animate-marquee-smooth">
            <div className="flex whitespace-nowrap font-extrabold text-white select-none" style={{ transform: 'translateZ(0)' }}>
              <span className="mr-32 max-w-[320px]">LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT</span>
            </div>
            <div className="flex whitespace-nowrap font-extrabold text-white select-none" style={{ transform: 'translateZ(0)' }}>
            </div>
          </div>
        </div>
        
        <div className="flex gap-x-2 justify-center">
          <Button to="mailto:stwnsalmann@gmail.com" target="_blank" rel="noopener noreferrer" text='Gmail' />
          <Button to="https://instagram.com/eisenflux" target="_blank" rel="noopener noreferrer" text='Instagram' />
          <Button to="https://linkedin.com/in/salman-setiawan" target="_blank" rel="noopener noreferrer" text='LinkedIn' />
          <Button to="https://dribbble.com/eisenflux" target="_blank" rel="noopener noreferrer" text='Dribbble' />
        </div>
        
        {/* Marquee Text */}
        <div className="overflow-hidden" style={{ transform: 'translateZ(0)' }}>
          <div className="flex animate-marquee-reverse-smooth">
            <div className="flex whitespace-nowrap font-extrabold text-white select-none" style={{ transform: 'translateZ(0)' }}>
              <span className="mr-32 max-w-[320px]">LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect