import Button from './Button';
import { Link } from 'react-router-dom';
import Chip from './Chip';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const Card = ({ title, categories, img, intImg, intText, extImg, extText, url1, url2, obj }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="relative overflow-hidden">
        {title && (
          <h1 className="absolute inset-0 flex leading-none text-center items-center justify-center text-[12rem] xl:text-[16rem] font-black text-white/5 rotate-[-17deg] uppercase z-0">
            {title}
          </h1>
        )}
        <div
          className="relative z-10 rounded-xl bg-cover bg-center border border-neutral-800"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="h-full flex flex-col px-2.5 py-3 justify-between">
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
          </div>
        </div>
      </div> 
    </div>
  );
};

Card.propTypes = { 
  title: PropTypes.string,
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
