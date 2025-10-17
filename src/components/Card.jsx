/* eslint-disable no-unused-vars */
import Button from './Button';
import Chip from './Chip';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Card = ({ title, nav, desc, categories, img, intImg, intText, intImg2, intText2, extImg, extText, url1, url2, url3, obj }) => {
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

  return (
    <div>
      <div ref={ref} className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <div className="block lg:hidden">
          <div className="relative overflow-hidden">
            {title && (
              <motion.h1 variants={container} initial="initial" animate="animate" className="font-anton absolute inset-0 flex flex-col leading-none text-center items-center justify-center text-[20rem] md:text-[26rem] font-black text-white/8 rotate-[-32deg] md:rotate-[-24deg] uppercase select-none">
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
            <div className="relative rounded-xl bg-[#111]/60 border border-neutral-800 overflow-hidden bg-tile">
              {/* Layer Pattern dengan masking dan opacity */}
              <div className="absolute inset-0 bg-[url('/pattern-card.svg')] opacity-13 pointer-events-none" style={{ backgroundSize: 'auto', WebkitMaskImage: 'radial-gradient(circle at 25% 35%, transparent 0%, black 60%), radial-gradient(circle at 75% 70%, transparent 0%, black 60%)', WebkitMaskComposite: 'destination-in', maskComposite: 'intersect',}}></div>
              {/* Konten utama */}
              <div className="relative z-10 h-full flex flex-col p-2 justify-between">
                <div className="flex flex-wrap gap-x-1.5 gap-y-2 py-1 pl-1 pr-3">
                  {categories?.map((cat, i) => ( <Chip key={i} label={cat} />))}
                </div>
                <div className="flex justify-center md:h-[24rem] items-center">
                  <img className="h-[20rem] md:h-[30rem] object-cover float-anim select-none" src={obj} alt="object" />
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-4 justify-end lg:justify-between items-end">
                  <div className="flex justify-end gap-x-1.5 min-w-[280px] z-20">
                    {url1 && <Button to={url1} img={intImg} text={intText} />}
                    {url2 && <Button to={url2} img={intImg2} text={intText2} />}
                    {url3 && (<Button to={url3} target="_blank" rel="noopener noreferrer" img={extImg} text={extText} />)}
                  </div>
                  <div className="w-full py-2 pl-2 pr-4 text-sm md:text-[15px] bg-black/50 font-medium rounded-lg">
                    <span className="text-[#ffaa50] font-semibold">{nav}</span> {desc}
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div className="hidden lg:flex gap-x-3 items-end">
          <div className="rounded-xl flex flex-col min-w-[390px] max-w-[390px] justify-between p-4 border border-neutral-800 gap-y-8 bg-[#141414]">
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-wrap gap-x-1.5 gap-y-2">
                {categories?.map((cat, i) => ( <Chip key={i} label={cat} /> ))}
              </div>
              <div className="font-medium text-[15px] px-0.5">
                <span className="text-[#ffaa50] font-semibold">{nav}</span> {desc}
              </div>
            </div>
            <div className="flex gap-x-2">
              {url1 && (<Button to={url1} img={intImg} text={intText} />)}
              {url2 && (<Button to={url2} img={intImg2} text={intText2} />)}
              {url3 && (<Button to={url3} target="_blank" rel="noopener noreferrer" img={extImg} text={extText} />)}
            </div>
          </div>
          <div className="relative overflow-hidden w-full">
            {title && (
              <motion.h1 variants={container} initial="initial" animate="animate" className="font-anton absolute inset-0 flex flex-col leading-none text-center items-center justify-center text-[18rem] font-black text-white/8 rotate-[-28deg] uppercase select-none">
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
            <div className="relative rounded-xl bg-[#111]/60 border border-neutral-800 overflow-hidden">
              {/* Layer Pattern */}
              <div className="absolute inset-0 bg-[url('/pattern-card.svg')] opacity-20 bg-tile pointer-events-none"
                  style={{
                    WebkitMaskImage:
                      'radial-gradient(circle at 30% 40%, transparent 0%, black 60%), radial-gradient(circle at 70% 70%, transparent 0%, black 60%)',
                    WebkitMaskComposite: 'destination-in',
                    maskComposite: 'intersect',
                  }}
              ></div>

              {/* Konten utama */}
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
