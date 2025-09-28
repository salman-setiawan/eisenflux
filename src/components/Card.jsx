import Button from './Button';
import { Link } from 'react-router-dom';
import Chip from './Chip';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Card = ({ title, desc, categories, img, intImg, intText, extImg, extText, url1, url2, obj }) => {
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
    <div ref={ref} className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      <div className="relative overflow-hidden">
        {title && (
          <motion.h1 variants={container} initial="initial" animate="animate" className="absolute inset-0 flex flex-col leading-none text-center items-center justify-center text-[14rem] lg:text-[20rem] font-black text-white/15 rotate-[-32deg] md:rotate-[-24deg] uppercase select-none">
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
            <div className="flex flex-wrap gap-x-2">
              {categories?.map((cat, i) => ( <Chip key={i} label={cat} /> ))}
            </div>
            <div className="flex justify-center">
              <img className="h-80 md:h-[24rem] object-cover float-anim select-none" src={obj} alt="object" />
            </div>
            <div className="flex flex-col gap-y-4 justify-end">
              <div className="flex justify-end">
                <div className="flex gap-x-1.5">
                  {url1 && (
                    <Link className='p-0.5 snake' to={url1}>
                      <Button bg='bg-[#111]' img={intImg} text={intText} hoverText="hover:text-[#FFAA00]" />
                    </Link>
                  )}
                  {url2 && (
                    <Link className='p-0.5 snake' to={url2} target="_blank" rel="noopener noreferrer">
                      <Button bg='bg-[#111]' img={extImg} text={extText} hoverText="hover:text-[#FFAA00]" />
                    </Link>
                  )}
                </div>
              </div>
              <div className="flex w-full p-2 text-sm bg-black/40">{desc}</div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

Card.propTypes = { 
  title: PropTypes.string,
  desc: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string, 
  intImg: PropTypes.string, 
  intText: PropTypes.string,
  extImg: PropTypes.string, 
  extText: PropTypes.string,  
  url1: PropTypes.string, 
  url2: PropTypes.string, 
  obj: PropTypes.string, 
};

Card.defaultProps = { 
  title: null,
  desc: null,
  categories: null, 
  img: null, 
  intImg: null, 
  intText: null, 
  extImg: null, 
  extText: null, 
  url1: null, 
  url2: null, 
  obj: null, 
};

export default Card;
