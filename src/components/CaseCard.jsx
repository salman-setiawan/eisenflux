/* eslint-disable no-unused-vars */
import Button from './Button.jsx';
import Chip from './Chip.jsx';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { cardStyles, defaultButton, highlightedText, paragraphText } from '../data/uiStyles.js';

const CaseCard = ({ title, nav, desc, categories, intImg, intText, intImg2, intText2, extImg, extText, url1, url2, url3, obj, motionText, maskTexture, srcTexture, cardImageBorder }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.05, });
  const words = title ? title.split(' ') : [];
  const container = {
    animate: { transition: { staggerChildren: 0.4,  repeat: Infinity, repeatType: 'loop' }},
  };

  const letterVariant = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: [0, 1, 0], 
      y: [20, 0, 20],     
      transition: { duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
    },
  };
  const wordVariant = {
    animate: { transition: { staggerChildren: 0.05 }},
  };

  motionText = 'font-anton absolute inset-0 flex flex-col leading-none text-center items-center justify-center uppercase select-none uppercase select-none font-black text-white/9 text-[20rem] md:text-[26rem] rotate-[-32deg] lg:rotate-[-24deg]';
  maskTexture = 'radial-gradient(circle at 25% 35%, transparent 0%, black 30%), radial-gradient(circle at 75% 70%, transparent 0%, black 40%)';
  srcTexture = `absolute inset-0 bg-[url('/pattern-card.svg')] opacity-13 pointer-events-none`;
  cardImageBorder = 'relative rounded-md bg-[#111]/60 border border-neutral-800 h-full flex flex-col p-2 justify-between';

  return (
    <div ref={ref} className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative overflow-hidden rounded-md lg:hidden">
        <motion.h1 variants={container} initial="initial" animate="animate" className={motionText}>
          {words.map((word, wi) => (
            <motion.div key={wi} variants={wordVariant} className="flex">
              {word.split('').map((char, ci) => (
                <motion.span key={ci} variants={letterVariant}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </motion.h1>
        {/* Layer Texture dengan masking dan opacity */}
        <div className={srcTexture} style={{ backgroundSize: 'auto', WebkitMaskImage: maskTexture, WebkitMaskComposite: 'destination-in', maskComposite: 'intersect',}}></div>
        {/* Komponen Informasi */}
        <div className={cardImageBorder}>
          <div className="flex flex-wrap gap-x-1.5 gap-y-2 py-1 pl-0.5 pr-4">
            {categories?.map((cat, i) => ( <Chip key={i} label={cat} />))}
          </div>
          <div className="flex justify-center items-center cursor-default">
            <img className="h-[24rem] md:h-[30rem] object-cover float-anim" src={obj} alt="object" />
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-4 justify-end lg:justify-between items-end">
            <div className="flex justify-end gap-x-1.5 min-w-[280px] z-20">
              {url1 && <Button style={defaultButton} to={url1} img={intImg} text={intText} />}
              {url2 && <Button style={defaultButton} to={url2} img={intImg2} text={intText2} />}
              {url3 && (<Button style={defaultButton} to={url3} target="_blank" rel="noopener noreferrer" img={extImg} text={extText} />)}
            </div>
            <div className={`${paragraphText} w-full py-2 pl-3 pr-8 bg-black/30 rounded-md`}>
              <span className={highlightedText}>{nav}</span> {desc}
            </div>
          </div>
        </div>
      </div> 
      <div className="hidden lg:flex gap-x-2 items-end">
        {/* Komponen Informasi */}
        <div className={`${cardStyles} h-[498px] lg:max-w-[380px] xl:w-[500px] justify-end p-4 gap-y-6`}>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-wrap gap-x-1.5 gap-y-2">
              {categories?.map((cat, i) => ( <Chip key={i} label={cat} /> ))}
            </div>
            <div className={`${paragraphText} pr-2`}>
              <span className={highlightedText}>{nav}</span> {desc}
            </div>
          </div>
          <div className="flex gap-x-2">
            {url1 && (<Button style={defaultButton} to={url1} img={intImg} text={intText} />)}
            {url2 && (<Button style={defaultButton} to={url2} img={intImg2} text={intText2} />)}
            {url3 && (<Button style={defaultButton} to={url3} target="_blank" rel="noopener noreferrer" img={extImg} text={extText} />)}
          </div>
        </div>
        {/* Komponen Gambar */}
        <div className="relative overflow-hidden w-full rounded-md">
          <motion.h1 variants={container} initial="initial" animate="animate" className={motionText}>
            {words.map((word, wi) => (
              <motion.div key={wi} variants={wordVariant} className="flex">
                {word.split('').map((char, ci) => (
                  <motion.span key={ci} variants={letterVariant}>
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </motion.h1>
          <div className={cardImageBorder}>
            <div className={srcTexture} style={{ WebkitMaskImage: maskTexture, WebkitMaskComposite: 'destination-in', maskComposite: 'intersect', }}></div>
            <div className="flex justify-center items-center relative z-10">
              <img className="h-[30rem] object-cover float-anim" src={obj} alt="object" />
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default CaseCard;
