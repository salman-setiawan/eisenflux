import Button from "./Button.jsx"
import { cardStyles, buttonDefault, textBaseSemi, textRegular } from '../data/uiStyles.js';

const SocialCard = () => {
  const renderMarquee = () => (
    <div className="overflow-hidden">
      <span className={`flex animate-marquee-smooth whitespace-nowrap font-medium select-none ${textBaseSemi} mr-32 max-w-[640px] ${textRegular}`}>
        LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • LET'S CONNECT
      </span>
    </div>
  );

  return (
    <div>
      <div className={`${cardStyles} px-0 gap-y-4 justify-center`}>
        {renderMarquee()}
        <div className="flex gap-x-2 justify-center pb-2">
          <Button style={buttonDefault} to="mailto:salmansetiawan88@gmail.com" target="_blank" rel="noopener noreferrer" text='Gmail' />
          <Button style={buttonDefault} to="https://instagram.com/eisenflux" target="_blank" rel="noopener noreferrer" text='Instagram' />
          <Button style={buttonDefault} to="https://linkedin.com/in/salman-setiawan" target="_blank" rel="noopener noreferrer" text='LinkedIn' />
          <Button style={buttonDefault} to="https://dribbble.com/eisenflux" target="_blank" rel="noopener noreferrer" text='Dribbble' />
        </div>
        {renderMarquee()}
      </div>
    </div>
  )
}

export default SocialCard