import Button from './Button';
import { Link } from 'react-router-dom';
import Chip from './Chip';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Card = ({ title, desc, categories, img, intImg, intText, extImg, extText, url1, url2, obj }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  const words = title ? title.split(' ') : [];

  // Variants untuk container (atur stagger antar kata)
  const container = {
    animate: {
      transition: {
        staggerChildren: 0.4, 
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  // Variants tiap huruf
  const letterVariant = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: [0, 1, 0], // fade in → fade out
      y: [20, 0, 20],     // naik turun halus
      transition: {
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  // Variants tiap kata (supaya huruf dalam satu kata muncul bergantian)
  const wordVariant = {
    animate: {
      transition: {
        staggerChildren: 0.05, 
      },
    },
  };

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="relative overflow-hidden">
        {title && (
          <motion.h1
            variants={container}
            initial="initial"
            animate="animate"
            className="absolute inset-0 flex flex-col leading-none text-center items-center justify-center text-[14rem] lg:text-[18rem] font-black text-white/15 rotate-[-32deg] md:rotate-[-17deg] uppercase"
          >
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
        <div
          className="relative z-10 rounded-xl bg-cover bg-center border-2 border-neutral-800"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="h-full flex flex-col px-2.5 py-2.5 justify-between">
            <div className="flex flex-wrap gap-x-2">
              {categories?.map((cat, i) => (
                <Chip key={i} label={cat} />
              ))}
            </div>
            <div className="flex justify-center">
              <img
                className="h-80 lg:h-96 object-cover float-anim"
                src={obj}
                alt="object"
              />
            </div>
            <div className="flex flex-col gap-y-4 justify-end">
              <div className="flex justify-end">
                <div className="p-0.5 rounded-xl snake">
                  <div className="flex rounded-xl bg-[#111111]">
                    {url1 && (
                      <Link to={url1}>
                        <Button img={intImg} text={intText} hoverText="hover:text-[#FFAA00]" />
                      </Link>
                    )}
                    {url2 && (
                      <Link to={url2} target="_blank" rel="noopener noreferrer">
                        <Button img={extImg} text={extText} hoverText="hover:text-[#FFAA00]" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex w-full p-2 text-sm bg-neutral-900/50 rounded-xl">{desc}</div>
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
