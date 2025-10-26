import { useInView } from 'react-intersection-observer';

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
        {galleryImages.map((image, index) => {
          const SnapshotCard = () => {
            const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.05 });
            
            return (
              <div key={index} ref={ref} className={`break-inside-avoid mb-4 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                <div className="relative group overflow-hidden rounded-lg bg-[#111]/60 border border-neutral-800">
                  <img 
                    src={image} 
                    alt={`UI Snapshot ${index + 1}`}
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              </div>
            );
          };
          return <SnapshotCard key={index} />;
        })}
      </div>
    </div>
  )
}

export default Snapshot