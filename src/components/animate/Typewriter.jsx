import { useState, useEffect } from "react";

const Typewriter = ({ text = "BIO.", speed = 160, deleteSpeed = 240, dotBlinkCount = 4 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loop, setLoop] = useState(0);
  const [dotPhase, setDotPhase] = useState(false);
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    let typingInterval;

    if (!isDeleting && displayedText.length < text.length) {
      typingInterval = setTimeout(() => { setDisplayedText(text.substring(0, displayedText.length + 1)); }, speed);
    } 

    else if (!isDeleting && displayedText.length === text.length && !dotPhase) { setDotPhase(true); } 

    else if (dotPhase) {
      if (dotCount < dotBlinkCount * 2) { typingInterval = setTimeout(() => {
        if (displayedText.endsWith(".")) { setDisplayedText(text.slice(0, -1)); } 
        else { setDisplayedText(text); } setDotCount((c) => c + 1);
      }, 800); } 
      else { setDotPhase(false); setDotCount(0); setIsDeleting(true); }
    } 

    else if (isDeleting && displayedText.length > 0) { typingInterval = setTimeout(() => { setDisplayedText(text.substring(0, displayedText.length - 1)); }, deleteSpeed); } 
    
    else if (isDeleting && displayedText.length === 0) { setIsDeleting(false); setLoop(loop + 1);}
    
    return () => clearTimeout(typingInterval);

  }, [displayedText, isDeleting, text, speed, deleteSpeed, dotPhase, dotCount, loop]);

  return (
    <span className="font-black uppercase block text-center" style={{ minWidth: `${text.length}ch` }}>
      {displayedText}
      {displayedText.length < text.length && <span className="invisible">.</span>}
    </span>
  );
};

export default Typewriter;
