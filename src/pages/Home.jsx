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
import ExpCard from '../components/ExpCard.jsx';
import AvaCard from '../components/AvaCard.jsx';
import LanguageToggle from '../components/LanguageToggle.jsx';

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
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block' style={{ zIndex: 200 }}>
        <Navigation />
      </div>
      <div className="flex flex-col place-content-center w-full md:max-w-[1080px] md:py-8 md:h-screen md:px-6">
        <div className="w-full flex justify-between py-4 px-6 md:px-0">
          <WorkChip label={stats} />
          <LanguageToggle />
        </div>
        <div className="flex flex-col gap-y-2 md:flex-row gap-x-8 w-full h-full">
          <div className="flex flex-col block md:hidden">
            <Typewriter className='text-[24px] pl-6' text='enfx.' />
            <div>
              <div ref={sentinelRef}></div>
              {isFixed && (
                <div style={{ height: '39.5px' }}></div>
              )}
              <div
                id="navigation"
                className={`${isFixed 
                  ? "fixed top-0 px-6 py-3 w-full bg-[#141414]/75 backdrop-blur-sm shadow-lg shadow-black/30 flex items-center justify-between"
                  : "relative w-full py-3 px-6"}`}
                style={{ zIndex: 200, transition: "position 0.3s ease",}}
              >
                {isFixed ? (
                  <div className='flex flex-col gap-y-3 w-full'>
                    <div className="flex justify-between items-center">
                      <Typewriter className="text-[20px]" text="enfx." />
                      <LanguageToggle />
                    </div>
                    <Navigation />
                  </div>
                ) : (
                  <Navigation />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 md:w-full md:pb-4 lg:pb-2 md:pr-2 md:overflow-y-auto px-6 md:px-0 md:pr-3">
            <div className="flex lg:grid lg:grid-cols-2 gap-4">
              <AvaCard />
              <div className="hidden md:flex w-full items-center bg-cover bg-center rounded-lg border border-neutral-800" style={{ backgroundImage: `url('/pixel.gif')`}}></div>
            </div>
            <ExpCard />
            {CardData?.length ? (
              CardData.map((article) => (
                <div key={article.id}>
                  <Card
                    title={article.title2}
                    nav={article.nav}
                    img={article.cover}
                    obj={article.obj}
                    desc={article.desc[language]}
                    categories={article.categories.map(c => c[language])}
                    url1={article.intImg && article.intText ? `/article/${article.slug}` : null}
                    url2={article.intImg2 && article.intText2 ? `/gallery/${article.slug}` : null}
                    url3={article.extUrl}
                    intImg={article.intImg}
                    intText={article.intText?.[language]}
                    intImg2={article.intImg2}
                    intText2={article.intText2?.[language]}
                    extImg={article.extImg}
                    extText={article.extText?.[language]}
                  />
                </div>
              ))
            ) : (
              <div className="text-gray-400 italic">No Articles Available.</div>
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
