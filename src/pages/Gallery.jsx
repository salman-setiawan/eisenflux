import UIData from '../data/interface.js';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../data/languageContext';
import Notfound from '../pages/404.jsx';
import Footnote from '../components/Footnote.jsx';
import Button from '../components/Button.jsx';
import cards, { getCardBySlug, getCaseStudyBySlug } from '../data/content/index.js';
import Navigation from '../components/Navigation.jsx';
import { buttonDefault, textHeading1, textGray400, containerBase } from '../data/uiStyles.js';

const Gallery = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const selectedArticle = getCardBySlug(slug);
  const csData = getCaseStudyBySlug(slug);

  // Cari card berdasarkan slug
  const selectedCard = cards.find(item => item.slug === slug);
  if (!selectedCard) return <Notfound />;

  // Gunakan id dari cards untuk cari data gallery di UIData
  const selectedUI = UIData.find(item => item.id === selectedCard.id);
  if (!selectedUI) return <Notfound />;

  const { intImg, intText, extUrl, extImg, extText } = selectedCard;
  const { gallery } = selectedUI;
  const navbarTitle = csData?.altTitle || selectedArticle.title3 || selectedArticle.title;

  const isGroupedGallery = typeof gallery === 'object' && !Array.isArray(gallery);

  return (
    <div>
      <div className="flex flex-col items-center px-5">
        <Navigation type='type-2' title={navbarTitle} />

        <div className="pt-20 pb-32">
          {isGroupedGallery ? (
            <>
              {gallery.pc && (
                <div className="mb-16">
                  <h2 className={`${textHeading1} font-semibold mb-6`}>
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
                  <h2 className={`${textHeading1} font-semibold mb-6`}>
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
                <p className={`pt-2 ${textGray400}`}>Konten tidak tersedia.</p>
              )}
            </div>
          )}

          <div className="md:hidden w-full">
            <Footnote />
          </div>
        </div>
      </div>

      <div className={`fixed bottom-0 w-full ${containerBase} py-1.5`} style={{ zIndex: 1 }}>
        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-y-2 w-full max-w-[720px] px-4 pt-1 pb-3">
            {extUrl && (
              <Button to={extUrl} target="_blank" rel="noopener noreferrer" img={extImg} text={extText[language]} fullWidth={true} />
            )}
            {intText && (
              <Button style={buttonDefault} to={`/article/${slug}`} img={intImg} text={intText[language]} fullWidth={true} />
            )}
          </div>
        </div>
        <Footnote />
      </div>
    </div>
  );
};

export default Gallery;
