/* eslint-disable react-hooks/exhaustive-deps */
import { useLanguage } from "../data/languageContext.jsx";
import LanguageToggle from '../components/LanguageToggle'
import NoiseOverlay from '../components/animate/Noise'
import Footnote from '../components/Footnote'
import { useEffect, useState, useRef } from 'react';
import Card from "../components/Card.jsx";
import CardData from '../data/card.js';
import Notfound from './404.jsx';
import Navigation from '../components/Navigation.jsx';
import Typewriter from '../components/animate/Typewriter.jsx';
import ExpCard from '../components/ExpCard.jsx';
import AvaCard from '../components/AvaCard.jsx';
import Connect from "../components/Connect.jsx";
import DeckCard from "../components/DeckCard.jsx";

const Home = () => {
  const { language, toggleLanguage } = useLanguage();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const sentinelRef = useRef(null);
  const isInvalid = language === undefined || toggleLanguage === undefined;

  // Daftar semua asset yang perlu di-preload
  const assetsToPreload = [
    '/bg.webp', '/pattern-card.svg', '/pixel.gif', '/process.svg', '/vite.svg', '/web.svg',

    '/showcase/another.webp', '/showcase/edufams.webp', '/showcase/eduwork.webp', '/showcase/pemedas.webp',
    
    '/anotherisland/ces1.webp', '/anotherisland/ces2.webp', '/anotherisland/cfl.webp', '/anotherisland/content3.webp', '/anotherisland/desy.webp', '/anotherisland/ev.webp', '/anotherisland/fix1.webp', '/anotherisland/fix2.webp', '/anotherisland/fix3.webp', '/anotherisland/fix4.webp', '/anotherisland/fix5.webp', '/anotherisland/fix6.webp', '/anotherisland/fix7.webp', '/anotherisland/fix8.webp', '/anotherisland/interview.webp', '/anotherisland/ucd.webp', '/anotherisland/user.webp', '/anotherisland/wire.webp',

    '/anotherisland/gallery/screen1.webp', '/anotherisland/gallery/screen2.webp', '/anotherisland/gallery/screen3.webp', '/anotherisland/gallery/screen4.webp', '/anotherisland/gallery/screen5.webp', '/anotherisland/gallery/screen6.webp', '/anotherisland/gallery/screen7.webp', '/anotherisland/gallery/screen8.webp', '/anotherisland/gallery/screen9.webp', '/anotherisland/gallery/screen10.webp',

    '/edufams/brand.webp', '/edufams/kanban.webp', '/edufams/pitch.webp', '/edufams/style.webp', '/edufams/team.webp', '/edufams/think.webp', '/edufams/wire1.webp', '/edufams/wire2.webp',
    
    '/edufams/gallery/mobile_screen1.webp', '/edufams/gallery/mobile_screen2.webp', '/edufams/gallery/mobile_screen3.webp', '/edufams/gallery/mobile_screen4.webp', '/edufams/gallery/mobile_screen5.webp', '/edufams/gallery/mobile_screen6.webp', '/edufams/gallery/mobile_screen7.webp', '/edufams/gallery/mobile_screen8.webp', '/edufams/gallery/mobile_screen9.webp', '/edufams/gallery/mobile_screen10.webp', '/edufams/gallery/mobile_screen11.webp', '/edufams/gallery/mobile_screen12.webp', '/edufams/gallery/pc_screen1.webp', '/edufams/gallery/pc_screen2.webp', '/edufams/gallery/pc_screen3.webp', '/edufams/gallery/pc_screen4.webp', '/edufams/gallery/pc_screen5.webp', '/edufams/gallery/pc_screen6.webp', '/edufams/gallery/pc_screen7.webp', '/edufams/gallery/pc_screen8.webp', '/edufams/gallery/pc_screen9.webp', '/edufams/gallery/pc_screen10.webp', '/edufams/gallery/pc_screen11.webp',

    '/eduwork/design.webp', '/eduwork/flow.webp', '/eduwork/mood.webp', '/eduwork/team.webp',
    
    '/eduwork/gallery/screen1.webp', '/eduwork/gallery/screen2.webp', '/eduwork/gallery/screen3.webp', '/eduwork/gallery/screen4.webp', '/eduwork/gallery/screen5.webp', '/eduwork/gallery/screen6.webp', '/eduwork/gallery/screen7.webp', '/eduwork/gallery/screen8.webp', '/eduwork/gallery/screen9.webp', '/eduwork/gallery/screen10.webp', '/eduwork/gallery/screen11.webp',
  ];

  useEffect(() => {
    if (!isInvalid && !isLoading) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        },
        { threshold: 0, rootMargin: "0px" }
      );

      const sentinelEl = sentinelRef.current;
      if (sentinelEl) observer.observe(sentinelEl);
      return () => sentinelEl && observer.unobserve(sentinelEl);
    }
  }, [isInvalid, isLoading]);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('introShown');

    if (hasSeenIntro) {
      setIsLoading(false);
      return;
    }

    const preloadAssets = async () => {
      let loadedCount = 0;
      const totalAssets = assetsToPreload.length;

      const loadAsset = (src) => new Promise((resolve) => {
        const img = new Image();
        img.onload = img.onerror = () => {
          loadedCount++;
          setLoadingProgress(Math.round((loadedCount / totalAssets) * 100));
          resolve();
        };
        img.src = src;
      });

      await Promise.all(assetsToPreload.map(loadAsset));

      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('introShown', 'true');
      }, 300);
    };

    preloadAssets();
  }, []);

  if (isInvalid) {
    return (
      <div className="flex justify-center">
        <Notfound />
      </div>
    );
  }

  // Loading screen
  if (isLoading) {
    return (
      <div className="flex justify-center bg-cover bg-center">
        <div className="flex flex-col h-screen items-center w-full justify-center fixed overflow-hidden">
          <div className="space-y-6 w-[398px] px-15">
            <div className="text-[18px]">{language === "en" ? "a good portfolio is a finished portfolio." : "portfolio yang bagus adalah portfolio yang selesai."}</div>
            <div className="text-[14px] text-white/45">
              {language === "en" ? "is a phrase often quoted by" : "adalah kata yang selalu dikutip oleh"}{" "}
              <span className="font-semibold text-[#ffaa50]">@halodesigners</span>{" "}
              {language === "en" ? "in various posts." : "di berbagai postingannya."}
            </div>
            <div className="space-y-3">
              <div className="text-[12px] text-white/60">{language === "en" ? "Loading assets..." : "Memuat aset..."} {loadingProgress}%</div>
              <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                <div className="bg-gradient-to-r from-[#ffaa50] to-[#ffaa50]/80 h-full rounded-full transition-all duration-300 ease-out" style={{ width: `${loadingProgress}%` }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col place-content-center w-full px-5 relative">
          <div className="w-full flex justify-center px-4 pt-4">
            <LanguageToggle />
          </div>
        </div>
        <NoiseOverlay />
        <div className="fixed bottom-0 w-full py-4">
          <Footnote />
        </div>
        <title>Welcome Human!</title>
      </div>
    );
  }

  // Konten utama
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-y-2 w-full h-full px-0 md:px-4 xl:px-0">
        
        {/* Navigation */}
        <div className="flex flex-col block md:hidden">
          <div ref={sentinelRef}></div>
            {isFixed && <div style={{ height: '39.5px' }}></div>}
            <div
              id="navigation"
              className={`${isFixed
                ? "fixed w-full px-4 top-0 py-3 bg-[#141414]/75 backdrop-blur-sm shadow-lg shadow-black/30 flex items-center"
                : "px-4"}`}
              style={{ zIndex: 200, transition: "position 0.3s ease" }}
            >
              {isFixed ? (
                <div className='flex flex-col gap-y-3 w-full'>
                  <div className="flex justify-between items-center">
                    <Typewriter className="text-[20px] pl-1" text="enfx." />
                    <LanguageToggle />
                  </div>
                  <Navigation />
                </div>
              ) : (
                <div className='flex flex-col gap-y-3 w-full pt-4 pb-2'>
                  <div className="flex justify-between items-center">
                    <Typewriter className="text-[20px] pl-1" text="enfx." />
                    <LanguageToggle />
                  </div>
                  <Navigation />
                </div>
              )}
          </div>
        </div>
        <div className='flex flex-col gap-y-3 py-3 pb-2 w-full hidden md:block xl:hidden'>
          <div className="flex justify-between items-center">
            <Typewriter className="text-[20px] pl-1" text="enfx." />
            <div className="w-[400px]"><Navigation /></div>
            <LanguageToggle />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-x-1">
          <div className="xl:flex flex-col gap-2 hidden w-[1000px] xl:px-4">
            <div className='flex flex-col gap-y-3 py-3 pb-2 w-full'>
              <div className="flex justify-between items-center">
                <div className="w-[400px] xl:w-[300px]"><Navigation /></div>
                <LanguageToggle />
              </div>
            </div>
            <div className="flex flex-col md:flex-row xl:flex-col gap-2 items-stretch">
              <AvaCard />
              <DeckCard />
            </div>
            <ExpCard />
            <Connect />
            <div className="py-2"><Footnote /></div>
          </div>

          <div className="flex flex-col gap-y-4 md:w-full md:overflow-y-auto xl:bg-[#181818] px-4 md:px-0">
            <div className="flex flex-col gap-1.5 xl:hidden">
              <div className="flex flex-col md:flex-row gap-1.5 items-stretch">
                <AvaCard />
                <DeckCard />
              </div>
              <ExpCard />
            </div>
            <div className="xl:h-screen">
              <div className="flex flex-col xl:w-full xl:h-full xl:overflow-y-auto xl:px-4 gap-y-3 xl:py-4">
                {CardData?.length ? (
                  [...CardData]
                    .sort((a, b) => (a.id ?? 0) - (b.id ?? 0))
                    .map((article) => (
                    <div key={article.id}>
                      <Card
                        title={article.title}
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
            </div>
            <div className="xl:hidden"><Connect /></div>
            <div className="xl:hidden w-full">
              <Footnote />
            </div>
          </div>
        </div>
      </div>
      <NoiseOverlay />
    </div>
  );
};

export default Home;
