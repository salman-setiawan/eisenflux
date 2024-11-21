import Button from './Button';
import { Link } from 'react-router-dom';
import Chip from './Chip';
import { useInView } from 'react-intersection-observer'; // import dari react-intersection-observer

const Card = ({ category, img, extImg, extText, url1, url2 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Membuat observer aktif setiap kali elemen muncul dan hilang
    threshold: 0.2, // Ketika 10% elemen terlihat
  });

  return (
    <div
      ref={ref} // Pasang observer pada elemen ini
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
                    <Button img="process.svg" bg="bg-gray-500" text="See Process" />
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

export default Card;
