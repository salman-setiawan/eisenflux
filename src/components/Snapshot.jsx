import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const InViewWrapper = ({ image, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      key={index}
      ref={ref}
      className={`break-inside-avoid mb-4 transition-opacity duration-700 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative group overflow-hidden rounded-lg bg-[#111]/60 border border-neutral-800">
        {!isLoaded && (
          <div className="w-full aspect-auto animate-pulse bg-gradient-to-r from-[#111] via-neutral-800 to-[#111] bg-[length:200%_100%]"></div>
        )}
        <img
          src={image}
          alt={`UI Snapshot ${index + 1}`}
          className={`w-full transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0 absolute'
          }`}
          onLoad={() => setIsLoaded(true)}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
        {isLoaded && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        )}
      </div>
    </div>
  );
};

const Snapshot = () => {
  const galleryImages = [
    '/shot/estore.webp',
    '/shot/musplay.webp',
    '/shot/learnx.webp',
    '/shot/halogbs.webp',
  ];

  return (
    <div>
      <div className="columns-1 md:columns-2 xl:columns-1 2xl:columns-2 gap-4">
        {galleryImages.map((image, index) => (
          <InViewWrapper key={index} image={image} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Snapshot;
