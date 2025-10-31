import Button from "./Button"
import { cardStyles, defaultButton } from '../data/uiStyles.js';

const Connect = () => {
  return (
    <div>
      <div className={`${cardStyles} px-0 gap-y-6 justify-center`}>
        {/* Marquee Text */}
        <div className="overflow-hidden" style={{ transform: 'translateZ(0)' }}>
          <div className="flex animate-marquee-smooth">
            <div className="flex whitespace-nowrap font-bold text-white select-none text-white/30" style={{ transform: 'translateZ(0)' }}>
              <span className="mr-32 max-w-[320px]">LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-x-2 justify-center">
          <Button style={defaultButton} to="mailto:stwnsalmann@gmail.com" target="_blank" rel="noopener noreferrer" text='Gmail' />
          <Button style={defaultButton} to="https://instagram.com/eisenflux" target="_blank" rel="noopener noreferrer" text='Instagram' />
          <Button style={defaultButton} to="https://linkedin.com/in/salman-setiawan" target="_blank" rel="noopener noreferrer" text='LinkedIn' />
          <Button style={defaultButton} to="https://dribbble.com/eisenflux" target="_blank" rel="noopener noreferrer" text='Dribbble' />
        </div>
        
        {/* Marquee Text */}
        <div className="overflow-hidden" style={{ transform: 'translateZ(0)' }}>
          <div className="flex animate-marquee-reverse-smooth">
            <div className="flex whitespace-nowrap font-bold text-white select-none text-white/30" style={{ transform: 'translateZ(0)' }}>
              <span className="mr-32 max-w-[320px]">LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect