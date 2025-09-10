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
      <div className="">
        <div className={`rounded-xl bg-cover bg-center border border-neutral-800`} style={{ backgroundImage: `url(${img})` }}>
          <div className="h-full flex flex-col px-2.5 py-3 justify-between">
            <div className="flex flex-wrap gap-x-2">
              {categories?.map((cat, i) => (
                <Chip key={i} label={cat} />
              ))}
            </div>
            <div className="flex justify-center">
              <img className={`h-80 object-cover float-anim`} src={obj} alt="object" />
            </div>
            <div className="flex md:flex-col lg:flex-row justify-between md:justify-start lg:justify-between w-full items-center md:items-start lg:items-center md:gap-y-4 lg:gap-y-0">
              <div className="p-0.5 font-semibold text-lg">{title}</div>
              <div className="p-0.5 rounded-xl snake">
                <div className="flex p-1 rounded-xl bg-[#111111]">
                  {url1 && (
                    <Link to={url1}>
                      <Button img={intImg} text={intText} hoverColor='#FFAA00' />
                    </Link>
                  )}
                  {url2 && (
                    <Link to={url2} target="_blank" rel="noopener noreferrer">
                      <Button img={extImg} text={extText} hoverColor='#FFAA00' />
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
