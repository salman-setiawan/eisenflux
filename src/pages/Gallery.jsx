import { useParams } from 'react-router-dom';
import { useLanguage } from '../data/languageContext';
import UIData from '../data/interface.js';
import Notfound from '../pages/404.jsx';
import Footnote from '../components/Footnote.jsx';
import LanguageToggle from '../components/LanguageToggle.jsx';

const Gallery = () => {
  const { slug } = useParams();
  const { language, toggleLanguage } = useLanguage();

  const selectedArticle = UIData.find(article => article.slug === slug);

  if (!selectedArticle) {
    return <Notfound />;
  }

  const { title, gallery } = selectedArticle;

  const isGroupedGallery = typeof gallery === 'object' && !Array.isArray(gallery);

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="px-5 flex flex-col gap-y-2 justify-center w-full">
          <div className="w-full flex justify-between py-4">
            <div className="font-bold">{title}</div>
            <LanguageToggle />
          </div>

          {/* Jika gallery berupa object dengan pc dan mobile */}
          {isGroupedGallery ? (
            <div className="flex flex-col gap-y-16">
              {gallery.pc && (
                <div className="grid">
                  <h2 className="text-[24px] font-semibold mb-6">{language === "en" ? "Desktop Screen" : "Tampilan Desktop"}</h2>
                  <div className="columns-1 md:columns-2 lg:columns-3 gap-3">
                    {gallery.pc.map((item, index) => (
                      <div key={`pc-${index}`} className="break-inside-avoid mb-3">
                        <img
                          src={item.img}
                          alt={`PC Gallery ${index + 1}`}
                          className="w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {gallery.mobile && (
                <div className="flex-1">
                  <h2 className="text-[24px] font-semibold mb-6">{language === "en" ? "Mobile Screens" : "Tampilan Mobile"}</h2>
                  <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-3">
                    {gallery.mobile.map((item, index) => (
                      <div key={`mobile-${index}`} className="break-inside-avoid mb-3">
                        <img
                          src={item.img}
                          alt={`Mobile Gallery ${index + 1}`}
                          className="w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            
            // Default: satu kolom jika bukan grouped (Another Island, EduWork)
            <div className="columns-1 md:columns-2 lg:columns-3 gap-3">
              {gallery.length > 0 ? (
                gallery.map((item, index) => (
                  <div key={index} className="break-inside-avoid mb-3">
                    <img
                      src={item.img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full object-cover"
                    />
                  </div>
                ))
              ) : (
                <p className="pt-2 text-gray-400">Konten tidak tersedia.</p>
              )}
            </div>
          )}

          <div className="md:hidden w-full">
            <Footnote />
          </div>
        </div>
      </div>

      <div
        className="hidden md:block fixed bottom-0 w-full bg-[#111111] py-1.5"
        style={{ zIndex: 1 }}
      >
        <Footnote />
      </div>
    </div>
  );
};

export default Gallery;
