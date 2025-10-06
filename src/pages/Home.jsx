import { useLanguage } from '../data/languageContext.jsx';
import { useEffect, useState, useRef } from "react";
import Card from "../components/Card.jsx";
import Footnote from "../components/Footnote.jsx";
import CardData from '../data/card.js'; 
import OtherData from '../data/other.js';
import Notfound from './404.jsx';
import WorkChip from '../components/WorkChip.jsx';
import Navigation from '../components/Navigation.jsx';
import Typewriter from '../components/animate/Typewriter.jsx';
import NoiseOverlay from '../components/animate/Noise.jsx';

const Home = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isFixed, setIsFixed] = useState(false);
  const sentinelRef = useRef(null);
  const isInvalid = language === undefined || toggleLanguage === undefined;
  const { stats } = !isInvalid ? OtherData[0].intro[language] : { stats: "" };

  useEffect(() => {
    if (!isInvalid) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            if (entry.boundingClientRect.top < entry.rootBounds.top) {
              setIsFixed(true);
            }
          } else {
            setIsFixed(false);
          }
        },
        {
          threshold: [0],
          rootMargin: "0px 0px 0px 0px",
        }
      );

      const sentinelEl = sentinelRef.current;

      if (sentinelEl) {
        observer.observe(sentinelEl);
      }

      return () => {
        if (sentinelEl) observer.unobserve(sentinelEl);
      };
    }
  }, [isInvalid]);

  if (isInvalid) {
    return (
      <div className="flex justify-center">
        <Notfound />
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className='fixed top-6 left-6 hidden md:block' style={{ zIndex: 200 }}>
        <Navigation />
      </div>
      <div className="flex flex-col place-content-center w-full md:max-w-[1000px] md:py-8 md:h-screen md:px-6">
        <div className="w-full flex justify-end md:justify-between py-4 px-6 md:px-0">
          <div className="hidden md:block">
            <WorkChip label={stats} />
          </div>
          <button 
            onClick={toggleLanguage} 
            className="text-[14px] h-fit font-medium underline underline-offset-1 text-[#ffa500]"
          >
            {language === "en" ? "English" : "Bahasa"}
          </button>
        </div>
        <div className="flex flex-col gap-y-2 md:flex-row gap-x-8 w-full h-full">
          <div className="flex flex-col gap-y-6 pt-[25rem] h-full block md:hidden">
            <div className="text-[64px]">
              <Typewriter text='enfx.' />
            </div>
            <div className="flex flex-col">
              <div className="px-6 py-1">
                <WorkChip label={stats} />
              </div>
              <div ref={sentinelRef}></div>
              {isFixed && (
                <div style={{ height: '39.5px' }}></div>
              )}
              <div
                id="navigation"
                className={`${isFixed 
                  ? "fixed top-0 px-6 py-3 w-full bg-[#141414]/75 backdrop-blur-sm shadow-lg shadow-black/30" 
                  : "relative w-full py-3 px-6"}`}
                style={{
                  zIndex: 200,
                  transition: "position 0.3s ease",
                }}
              >
                <Navigation />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 md:gap-y-4 md:w-full md:pt-1 md:pb-4 md:pr-2 md:overflow-y-auto px-6 md:px-0">
            {CardData?.length ? (
              CardData.map((article) => (
                <div 
                  key={article.id} 
                  className="shadow-md md:shadow-lg shadow-black/30 md:shadow-black/40"
                >
                  <Card
                    title={article.title2}
                    img={article.cover}
                    obj={article.obj}
                    desc={article.desc[language]}
                    categories={article.categories.map(c => c[language])}
                    url1={article.intImg && article.intText ? `/article/${article.slug}` : null}
                    url2={article.extUrl}
                    intImg={article.intImg}
                    intText={article.intText?.[language]}
                    extImg={article.extImg}
                    extText={article.extText?.[language]}
                  />
                </div>
              ))
            ) : (
              <div className="text-gray-400 italic">No articles available.</div>
            )}
          </div>
          <div className="md:hidden w-full py-4"> 
            <Footnote /> 
          </div>
        </div>
      </div>
      <NoiseOverlay />
    </div>
  );
};

export default Home;
