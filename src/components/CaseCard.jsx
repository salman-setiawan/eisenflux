/* eslint-disable no-unused-vars */
import Button from './Button.jsx';
import Chip from './Chip.jsx';
import HalftoneGlow from './HalftoneGlow.jsx';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { cardStyles, buttonDefault, textHighlighted, textParagraph, textBaseUltraMuted } from '../data/uiStyles.js';

const CaseCard = ({ title, nav, desc, categories, intText, intText2, extText, extText2, url1, url2, url3, url4, obj, motionText, maskTexture, srcTexture, cardImageBorder }) => {
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

  motionText = `font-anton absolute inset-0 flex flex-col leading-none text-center items-center justify-center uppercase select-none uppercase select-none font-black ${textBaseUltraMuted} text-[20rem] md:text-[26rem] rotate-[-32deg] lg:rotate-[-24deg]`;
  maskTexture = 'radial-gradient(circle, black 0%, black 25%, transparent 65%)';
  srcTexture = `absolute inset-0 bg-[url('/pattern-card.svg')] opacity-15`;
  cardImageBorder = 'relative rounded-md border border-neutral-800 xl:border-none h-full flex flex-col p-2 justify-between';

  return (
    <div ref={ref} className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative overflow-hidden rounded-md xl:hidden">

        {/* Motion Background Text */}
        {/* <motion.h1 variants={container} initial="initial" animate="animate" className={motionText}>
          {words.map((word, wi) => (
            <motion.div key={wi} variants={wordVariant} className="flex">
              {word.split('').map((char, ci) => (
                <motion.span key={ci} variants={letterVariant}>
                  {char}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </motion.h1> */}

        {/* Layer Texture dengan masking dan opacity */}
        <div className="absolute inset-0 animate-pulse-radial" style={{ maskImage: maskTexture, WebkitMaskImage: maskTexture, pointerEvents: 'none' }}>
          <HalftoneGlow 
            color="rgb(116, 68, 7)" 
            className="inset-0" 
            noMask={true}
          />
        </div>

        {/* Komponen Informasi */}
        <div className={cardImageBorder}>
          <div className="flex flex-wrap gap-x-1.5 gap-y-2 py-1 pl-0.5 pr-4">
            {categories?.map((cat, i) => ( <Chip key={i} label={cat} /> ))}
          </div>
          <div className="flex justify-center items-center cursor-default">
            <img className="h-[24rem] md:h-[30rem] object-cover float-anim" src={obj} alt="object" loading="lazy" />
          </div>
          <div className="flex flex-col gap-y-4 justify-end items-end z-20">
            <div className="flex justify-end gap-x-1.5 flex-wrap">
              {url1 && <Button style={buttonDefault} to={url1} text={intText} />}
              {url2 && <Button style={buttonDefault} to={url2} text={intText2} />}
              {url3 && <Button style={buttonDefault} to={url3} target="_blank" rel="noopener noreferrer" text={extText} />}
              {url4 && <Button style={buttonDefault} to={url4} target="_blank" rel="noopener noreferrer" text={extText2} />}
            </div>
            <div className={`${textParagraph} px-2.5 py-1.5 rounded-md bg-[#0c0c0c]/60`}><span className={textHighlighted}> {nav} </span> {desc} </div>
          </div>
        </div>
      </div> 
      <div className="hidden xl:flex gap-x-2 items-end">
        {/* Komponen Informasi */}
        <div className={`${cardStyles} h-[498px] w-[480px] justify-end p-4 gap-y-6`}>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-wrap gap-x-1.5 gap-y-2">
              {categories?.map((cat, i) => ( <Chip key={i} label={cat} /> ))}
            </div>
            <div className={`${textParagraph} pr-2`}><span className={textHighlighted}> {nav} </span> {desc} </div>
          </div>
          <div className="flex gap-x-2 flex-wrap">
            {url1 && <Button style={buttonDefault} to={url1} text={intText} />}
            {url2 && <Button style={buttonDefault} to={url2} text={intText2} />}
            {url3 && <Button style={buttonDefault} to={url3} target="_blank" rel="noopener noreferrer" text={extText} />}
            {url4 && <Button style={buttonDefault} to={url4} target="_blank" rel="noopener noreferrer" text={extText2} />}
          </div>
        </div>
        {/* Komponen Gambar dan Motion Background Text */}
        <div className="relative overflow-hidden w-full rounded-md">
          {/* <motion.h1 variants={container} initial="initial" animate="animate" className={motionText}>
            {words.map((word, wi) => (
              <motion.div key={wi} variants={wordVariant} className="flex">
                {word.split('').map((char, ci) => (
                  <motion.span key={ci} variants={letterVariant}>
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </motion.h1> */}
          <div className={cardImageBorder}>
            <div className="absolute inset-0 animate-pulse-radial" style={{ maskImage: maskTexture, WebkitMaskImage: maskTexture, pointerEvents: 'none' }}>
              <HalftoneGlow 
                color="rgb(116, 68, 7)" 
                className="inset-0" 
                noMask={true}
              />
            </div>
            <div className="flex justify-center items-center relative z-10">
              <img className="h-[30rem] object-cover float-anim" src={obj} alt="object" loading="lazy" />
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default CaseCard;
