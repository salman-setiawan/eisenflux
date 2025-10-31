import Button from "./Button"
import { cardStyles, defaultButton } from '../data/uiStyles.js';

const Connect = () => {
  const renderMarquee = () => (
    <div className="overflow-hidden">
      <span className="flex animate-marquee-smooth flex whitespace-nowrap font-semibold text-white select-none text-white/30 mr-32 max-w-[640px]">
        LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT
      </span>
    </div>
  );

  return (
    <div>
      <div className={`${cardStyles} px-0 gap-y-8 justify-center`}>
        {renderMarquee()}
        <div className="flex gap-x-2 justify-center pb-2">
          <Button style={defaultButton} to="mailto:stwnsalmann@gmail.com" target="_blank" rel="noopener noreferrer" text='Gmail' />
          <Button style={defaultButton} to="https://instagram.com/eisenflux" target="_blank" rel="noopener noreferrer" text='Instagram' />
          <Button style={defaultButton} to="https://linkedin.com/in/salman-setiawan" target="_blank" rel="noopener noreferrer" text='LinkedIn' />
          <Button style={defaultButton} to="https://dribbble.com/eisenflux" target="_blank" rel="noopener noreferrer" text='Dribbble' />
        </div>
        {renderMarquee()}
      </div>
    </div>
  )
}

export default Connect