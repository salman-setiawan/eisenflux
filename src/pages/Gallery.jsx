import CardData from '../data/card.js';
import UIData from '../data/interface.js';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../data/languageContext';
import Notfound from '../pages/404.jsx';
import Footnote from '../components/Footnote.jsx';
import LanguageToggle from '../components/LanguageToggle.jsx';
import Button from '../components/Button.jsx';
import { getCardBySlug, getCaseStudyBySlug } from '../data/content/index.js';

const Gallery = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const selectedArticle = getCardBySlug(slug);
  const csData = getCaseStudyBySlug(slug);

  // Cari card berdasarkan slug
  const selectedCard = CardData.find(item => item.slug === slug);
  if (!selectedCard) return <Notfound />;

  // Gunakan id dari CardData untuk cari data gallery di UIData
  const selectedUI = UIData.find(item => item.id === selectedCard.id);
  if (!selectedUI) return <Notfound />;

  const { intImg, intText, extUrl, extImg, extText } = selectedCard;
  const { gallery } = selectedUI;
  const navbarTitle = csData?.altTitle || selectedArticle.title3 || selectedArticle.title;

  const isGroupedGallery = typeof gallery === 'object' && !Array.isArray(gallery);

  return (
    <div>
      <div className="flex flex-col items-center px-5">
        <div className="fixed top-0 z-10 bg-[#141414] w-full flex justify-between py-3 px-5 items-center">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="text-center font-semibold text-[13px]">{navbarTitle}</div>
          <LanguageToggle />
        </div>

        <div className="pt-20 pb-32">
          {isGroupedGallery ? (
            <>
              {gallery.pc && (
                <div className="mb-16">
                  <h2 className="text-[24px] font-semibold mb-6">
                    {language === "en" ? "Desktop Screens" : "Tampilan Desktop"}
                  </h2>
                  <div className="columns-1 md:columns-2 lg:columns-3 gap-3">
                    {gallery.pc.map((item, index) => (
                      <div key={`pc-${index}`} className="break-inside-avoid mb-3">
                        <img src={item.img} loading="lazy" alt={`PC ${index}`} className="w-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {gallery.mobile && (
                <div>
                  <h2 className="text-[24px] font-semibold mb-6">
                    {language === "en" ? "Mobile Screens" : "Tampilan Mobile"}
                  </h2>
                  <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-6 gap-3">
                    {gallery.mobile.map((item, index) => (
                      <div key={`mobile-${index}`} className="break-inside-avoid mb-3">
                        <img src={item.img} loading="lazy" alt={`Mobile ${index}`} className="w-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-3">
              {gallery?.length ? (
                gallery.map((item, index) => (
                  <div key={index} className="break-inside-avoid mb-3">
                    <img src={item.img} loading="lazy" alt={`Gallery ${index}`} className="w-full object-cover" />
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

      <div className="fixed bottom-0 w-full bg-[#141414] py-1.5" style={{ zIndex: 1 }}>
        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-y-2 w-full max-w-[720px] px-4 pt-1 pb-3">
            {extUrl && (
              <Button to={extUrl} target="_blank" rel="noopener noreferrer" img={extImg} text={extText[language]} fullWidth={true} />
            )}
            {intText && (
              <Button to={`/article/${slug}`} img={intImg} text={intText[language]} fullWidth={true} />
            )}
          </div>
        </div>
        <Footnote />
      </div>
    </div>
  );
};

export default Gallery;
