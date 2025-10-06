import { useParams } from 'react-router-dom';
import { useLanguage } from '../data/languageContext';
import UIData from '../data/interface.js';
import Notfound from '../pages/404.jsx';
import Footnote from '../components/Footnote.jsx';

const Gallery = () => {
  const { slug } = useParams();
  const { language, toggleLanguage } = useLanguage();

  const selectedArticle = UIData.find(article => article.slug === slug);

  if (!selectedArticle) {
    return <Notfound />;
  }

  const { title, gallery } = selectedArticle;

  return (
    <div>
      <div className="flex place-content-center py-5 md:py-8 md:max-h-screen">
        <div className="px-5 md:px-8 flex flex-col md:flex-row gap-x-8 gap-y-4 w-full md:w-[1080px]">
          <div className="md:w-2/5 flex flex-col gap-y-4">
            <div className="w-full flex justify-end pb-4">
              <button
                onClick={toggleLanguage}
                className="text-[15px] h-fit underline underline-offset-1"
              >
                {language === 'en' ? 'Bahasa' : 'English'}
              </button>
            </div>
            <div className="text-2xl font-semibold leading-relaxed text-justify">{title}</div>
            {gallery?.length > 0 ? (
              gallery.map((item, index) => (
                <div key={index} className="pt-2">
                  <img
                    src={item.img}
                    alt={`Gallery ${index + 1}`}
                    className="w-full rounded-lg object-cover"
                  />
                </div>
              ))
            ) : (
              <p className="pt-2 text-gray-400">Konten tidak tersedia.</p>
            )}
          </div>
          <div className="md:hidden w-full">
            <Footnote />
          </div>
        </div>
      </div>
      <div className="hidden md:block fixed bottom-0 w-full bg-[#111111] py-1.5" style={{ zIndex: 1 }}>
        <Footnote />
      </div>
    </div>
  );
};

export default Gallery;
