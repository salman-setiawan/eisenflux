import Button from './Button';
import Chip from './Chip';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { cardStyles, defaultButton, paragraphText } from '../data/uiStyles.js';

const Card = ({ title, nav, desc, categories, intImg, intText, intImg2, intText2, extImg, extText, url1, url2, url3, obj, motionText, maskTexture, srcTexture }) => {
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

  motionText = 'font-anton absolute inset-0 flex flex-col leading-none text-center items-center justify-center uppercase select-none uppercase select-none font-black text-white/9';
  maskTexture = 'radial-gradient(circle at 25% 35%, transparent 0%, black 60%), radial-gradient(circle at 75% 70%, transparent 0%, black 60%)';
  srcTexture = `absolute inset-0 bg-[url('/pattern-card.svg')] opacity-13 pointer-events-none`;

  return (
    <div>
      <div ref={ref} className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative overflow-hidden rounded-md lg:hidden">
          {title && (
            <motion.h1 variants={container} initial="initial" animate="animate" className={`${motionText} text-[20rem] md:text-[26rem] rotate-[-32deg] md:rotate-[-24deg]`}>
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
          )}
          {/* Layer Texture dengan masking dan opacity */}
          <div className={srcTexture} style={{ backgroundSize: 'auto', WebkitMaskImage: maskTexture, WebkitMaskComposite: 'destination-in', maskComposite: 'intersect',}}></div>
          {/* Komponen Informasi */}
          <div className="relative rounded-md bg-[#111]/60 border border-neutral-800/60 h-full flex flex-col p-2 justify-between">
            <div className="flex flex-wrap gap-x-1.5 gap-y-2 py-1 pl-0.5 pr-4">
              {categories?.map((cat, i) => ( <Chip key={i} label={cat} />))}
            </div>
            <div className="flex justify-center md:h-[24rem] items-center">
              <img className="h-[20rem] md:h-[30rem] object-cover float-anim select-none" src={obj} alt="object" />
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-4 justify-end lg:justify-between items-end">
              <div className="flex justify-end gap-x-1.5 min-w-[280px] z-20">
                {url1 && <Button style={defaultButton} to={url1} img={intImg} text={intText} />}
                {url2 && <Button style={defaultButton} to={url2} img={intImg2} text={intText2} />}
                {url3 && (<Button style={defaultButton} to={url3} target="_blank" rel="noopener noreferrer" img={extImg} text={extText} />)}
              </div>
              <div className={`${paragraphText} w-full py-2 pl-3 pr-8 bg-black/30 rounded-md`}>
                <span className="text-[#ffaa50] font-semibold">{nav}</span> {desc}
              </div>
            </div>
          </div>
        </div> 
        <div className="hidden lg:flex gap-x-2 items-end">
          {/* Komponen Informasi */}
          <div className={`${cardStyles} h-[481px] lg:max-w-[380px] xl:w-[540px] justify-end p-4 gap-y-6`}>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-wrap gap-x-1.5 gap-y-2">
                {categories?.map((cat, i) => ( <Chip key={i} label={cat} /> ))}
              </div>
              <div className={`${paragraphText} pr-5`}>
                <span className="text-[#ffaa50] font-semibold">{nav}</span> {desc}
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
            {title && (
              <motion.h1 variants={container} initial="initial" animate="animate" className={`${motionText} text-[22rem] xl:text-[24rem] rotate-[-28deg]`}>
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
            )}
            <div className="relative rounded-md bg-[#111]/60 border border-neutral-800/60 overflow-hidden">
              <div className={srcTexture} style={{ WebkitMaskImage: maskTexture, WebkitMaskComposite: 'destination-in', maskComposite: 'intersect', }}></div>
              <div className="flex justify-center h-[30rem] items-center relative z-10">
                <img className="h-[30rem] object-cover float-anim select-none" src={obj} alt="object" />
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Card;
