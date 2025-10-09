import Button from './Button';
import { Link } from 'react-router-dom';
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
              <motion.h1 variants={container} initial="initial" animate="animate" className="font-anton absolute inset-0 flex flex-col leading-none text-center items-center justify-center text-[18rem] md:text-[22rem] font-black text-white/8 rotate-[-32deg] md:rotate-[-24deg] uppercase select-none">
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
            <div className="relative z-10 bg-cover bg-center border-2 border-neutral-800" style={{ backgroundImage: `url(${img})` }}>
              <div className="h-full flex flex-col p-2 justify-between">
                <div className="flex flex-wrap gap-x-1.5">
                  {categories?.map((cat, i) => ( <Chip key={i} label={cat} /> ))}
                </div>
                <div className="flex justify-center md:h-[24rem] items-center">
                  <img className="h-[20rem] md:h-[30rem] object-cover float-anim select-none" src={obj} alt="object" />
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-4 justify-end lg:justify-between items-end">
                  <div className="flex justify-end h-fit gap-x-1.5">
                  {url1 && (
                    <Link className='p-0.5 snake' to={url1}>
                      <Button bg='bg-[#111]' img={intImg} text={intText} hoverText="hover:text-[#FFAA00]" />
                    </Link>
                  )}
                  {url2 && (
                    <Link className='p-0.5 snake' to={url2}>
                      <Button bg='bg-[#111]' img={intImg2} text={intText2} hoverText="hover:text-[#FFAA00]" />
                    </Link>
                  )}
                  {url3 && (
                    <Link className='p-0.5 snake' to={url3} target="_blank" rel="noopener noreferrer">
                      <Button bg='bg-[#111]' img={extImg} text={extText} hoverText="hover:text-[#FFAA00]" />
                    </Link>
                  )}
                  </div>
                  <div className="w-full p-2 text-sm bg-black/50 font-medium"><span className="text-[#ffaa50] font-semibold">{nav}</span> {desc}</div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div className="hidden lg:flex gap-x-3 h-[500px] items-end">
          <div className="flex flex-col min-w-[390px] max-w-[390px] justify-between p-4 border-2 border-neutral-800 gap-y-8 bg-[#111]/50">
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-wrap gap-x-1.5">
                {categories?.map((cat, i) => ( <Chip key={i} label={cat} /> ))}
              </div>
              <div className="font-medium">
                <span className="text-[#ffaa50] font-semibold">{nav}</span> {desc}
              </div>
            </div>
            <div className="flex gap-x-2">
              {url1 && (
                <Link className='p-0.5 snake' to={url1}>
                  <Button bg='bg-[#111]' img={intImg} text={intText} hoverText="hover:text-[#FFAA00]" />
                </Link>
              )}
              {url2 && (
                <Link className='p-0.5 snake' to={url2}>
                  <Button bg='bg-[#111]' img={intImg2} text={intText2} hoverText="hover:text-[#FFAA00]" />
                </Link>
              )}
              {url3 && (
                <Link className='p-0.5 snake' to={url3} target="_blank" rel="noopener noreferrer">
                  <Button bg='bg-[#111]' img={extImg} text={extText} hoverText="hover:text-[#FFAA00]" />
                </Link>
              )}
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
            <div className="relative z-10 bg-cover bg-center border-2 border-neutral-800 h-full" style={{ backgroundImage: `url(${img})` }}>
              <div className="flex justify-center h-[30rem] items-center">
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
