import Button from './Button';
import { Link } from 'react-router-dom';
import Chip from './Chip';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const Card = ({ category, img, intImg, intText, extImg, extText, url1, url2 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="">
        <div className={`rounded-xl bg-cover bg-center h-[360px]`} style={{ backgroundImage: `url(${img})` }}>
          <div className="h-full flex flex-col px-2.5 py-3 justify-between">
            <Chip label={category} />
            <div className="w-full flex justify-end md:justify-start">
              <div className="flex gap-x-2.5">
                {url1 && (
                  <Link to={url1}>
                    <Button img={intImg} bg="bg-gray-500" text={intText} />
                  </Link>
                )}
                {url2 && (
                  <Link to={url2} target="_blank" rel="noopener noreferrer">
                    <Button img={extImg} bg="bg-[#0066FF]" text={extText} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = { 
  category: PropTypes.string, 
  img: PropTypes.string, 
  intImg: PropTypes.string, 
  intText: PropTypes.string,
  extImg: PropTypes.string, 
  extText: PropTypes.string,  
  url1: PropTypes.string, 
  url2: PropTypes.string, 
};

Card.defaultProps = { 
  category: null, 
  img: null, 
  intImg: null, 
  intText: null, 
  extImg: null, 
  extText: null, 
  url1: null, 
  url2: null, 
};

export default Card;
