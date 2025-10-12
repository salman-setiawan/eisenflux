import { useLanguage } from "../data/languageContext.jsx";
import LanguageToggle from '../components/LanguageToggle'
import NoiseOverlay from '../components/animate/Noise'
import Footnote from '../components/Footnote'
import { useEffect, useState, useRef } from 'react';
import Card from "../components/Card.jsx";
import CardData from '../data/card.js';
import OtherData from '../data/other.js';
import Notfound from './404.jsx';
import WorkChip from '../components/WorkChip.jsx';
import Navigation from '../components/Navigation.jsx';
import Typewriter from '../components/animate/Typewriter.jsx';
import ExpCard from '../components/ExpCard.jsx';
import AvaCard from '../components/AvaCard.jsx';
import Button from "../components/Button.jsx";

const Home = () => {
  const { language, toggleLanguage } = useLanguage();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const sentinelRef = useRef(null);
  const isInvalid = language === undefined || toggleLanguage === undefined;
  const { stats } = !isInvalid ? OtherData[0].intro[language] : { stats: "" };

  // Daftar semua asset yang perlu di-preload
  const assetsToPreload = [
    // Background images
    '/bg.webp',
    '/bg-bio.webp',
    '/pixel.gif',
    '/process.svg',
    '/vite.svg',
    '/web.svg',

    // Showcase images
    '/showcase/another.webp',
    '/showcase/edufams.webp',
    '/showcase/eduwork.webp',
    '/showcase/pemedas.webp',

    // Another Island assets
    '/anotherisland/ces1.webp',
    '/anotherisland/ces2.webp',
    '/anotherisland/cfl.webp',
    '/anotherisland/content3.webp',
    '/anotherisland/desy.webp',
    '/anotherisland/ev.webp',
    '/anotherisland/fix1.webp',
    '/anotherisland/fix2.webp',
    '/anotherisland/fix3.webp',
    '/anotherisland/fix4.webp',
    '/anotherisland/fix5.webp',
    '/anotherisland/fix6.webp',
    '/anotherisland/fix7.webp',
    '/anotherisland/fix8.webp',
    '/anotherisland/interview.webp',
    '/anotherisland/ucd.webp',
    '/anotherisland/user.webp',
    '/anotherisland/wire.webp',

    // Another Island gallery
    '/anotherisland/gallery/screen1.webp',
    '/anotherisland/gallery/screen2.webp',
    '/anotherisland/gallery/screen3.webp',
    '/anotherisland/gallery/screen4.webp',
    '/anotherisland/gallery/screen5.webp',
    '/anotherisland/gallery/screen6.webp',
    '/anotherisland/gallery/screen7.webp',
    '/anotherisland/gallery/screen8.webp',
    '/anotherisland/gallery/screen9.webp',
    '/anotherisland/gallery/screen10.webp',

    // Edufams assets
    '/edufams/brand.webp',
    '/edufams/kanban.webp',
    '/edufams/pitch.webp',
    '/edufams/style.webp',
    '/edufams/team.webp',
    '/edufams/think.webp',
    '/edufams/wire1.webp',
    '/edufams/wire2.webp',

    // Edufams gallery
    '/edufams/gallery/mobile_screen1.webp',
    '/edufams/gallery/mobile_screen2.webp',
    '/edufams/gallery/mobile_screen3.webp',
    '/edufams/gallery/mobile_screen4.webp',
    '/edufams/gallery/mobile_screen5.webp',
    '/edufams/gallery/mobile_screen6.webp',
    '/edufams/gallery/mobile_screen7.webp',
    '/edufams/gallery/mobile_screen8.webp',
    '/edufams/gallery/mobile_screen9.webp',
    '/edufams/gallery/mobile_screen10.webp',
    '/edufams/gallery/mobile_screen11.webp',
    '/edufams/gallery/mobile_screen12.webp',
    '/edufams/gallery/pc_screen1.webp',
    '/edufams/gallery/pc_screen2.webp',
    '/edufams/gallery/pc_screen3.webp',
    '/edufams/gallery/pc_screen4.webp',
    '/edufams/gallery/pc_screen5.webp',
    '/edufams/gallery/pc_screen6.webp',
    '/edufams/gallery/pc_screen7.webp',
    '/edufams/gallery/pc_screen8.webp',
    '/edufams/gallery/pc_screen9.webp',
    '/edufams/gallery/pc_screen10.webp',
    '/edufams/gallery/pc_screen11.webp',

    // Eduwork assets
    '/eduwork/design.webp',
    '/eduwork/flow.webp',
    '/eduwork/mood.webp',
    '/eduwork/team.webp',

    // Eduwork gallery
    '/eduwork/gallery/screen1.webp',
    '/eduwork/gallery/screen2.webp',
    '/eduwork/gallery/screen3.webp',
    '/eduwork/gallery/screen4.webp',
    '/eduwork/gallery/screen5.webp',
    '/eduwork/gallery/screen6.webp',
    '/eduwork/gallery/screen7.webp',
    '/eduwork/gallery/screen8.webp',
    '/eduwork/gallery/screen9.webp',
    '/eduwork/gallery/screen10.webp',
    '/eduwork/gallery/screen11.webp',
  ];

  useEffect(() => {
    if (!isInvalid && !isLoading && !showContinueButton) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        },
        {
          threshold: 0,
          rootMargin: "0px",
        }
      );

      const sentinelEl = sentinelRef.current;
      if (sentinelEl) observer.observe(sentinelEl);

      return () => {
        if (sentinelEl) observer.unobserve(sentinelEl);
      };
    }
  }, [isInvalid, isLoading, showContinueButton]);

  useEffect(() => {
    // Check if intro has been shown in current session
    const hasSeenIntro = sessionStorage.getItem('introShown');

    if (hasSeenIntro) {
      // Skip intro if already shown in this session
      setIsLoading(false);
      setShowContinueButton(false);
      return;
    }

    const preloadAssets = async () => {
      let loadedCount = 0;
      const totalAssets = assetsToPreload.length;

      const loadAsset = (src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            loadedCount++;
            const progress = Math.round((loadedCount / totalAssets) * 100);
            setLoadingProgress(progress);
            resolve();
          };
          img.onerror = () => {
            loadedCount++;
            const progress = Math.round((loadedCount / totalAssets) * 100);
            setLoadingProgress(progress);
            resolve();
          };
          img.src = src;
        });
      };

      // Load semua asset secara paralel
      await Promise.all(assetsToPreload.map(loadAsset));

      // Tunggu sedikit untuk animasi yang smooth
      setTimeout(() => {
        setIsLoading(false);
        setShowContinueButton(true);
        // Set flag bahwa user sudah melihat intro dalam session ini
        sessionStorage.setItem('introShown', 'true');
      }, 300);
    };

    preloadAssets();
  }, []);

  const handleContinue = () => {
    setShowContinueButton(false);
  };

  if (isInvalid) {
    return (
      <div className="flex justify-center">
        <Notfound />
      </div>
    );
  }

  // Show loading screen first
  if (isLoading) {
    return (
      <div className="flex justify-center bg-cover bg-center">
        <div className="flex flex-col h-screen items-center w-full justify-center fixed overflow-hidden">
          <div className="space-y-6 w-[398px] px-15">
            <div className="text-[18px]">
              {language === "en" ? "a good portfolio is a finished portfolio." : "portfolio yang bagus adalah portfolio yang selesai."}
            </div>
            <div className="text-[14px] text-white/45">
              {language === "en" ? "is a phrase often quoted by" : "adalah kata yang selalu dikutip oleh"} <span className="font-semibold text-[#ffaa50]">@halodesigners</span> {language === "en" ? "in various posts." : "di berbagai postingannya."}
            </div>

            {/* Loading Bar */}
            <div className="space-y-3">
              <div className="text-[12px] text-white/60">
                {language === "en" ? "Loading assets..." : "Memuat aset..."} {loadingProgress}%
              </div>
              <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#ffaa50] to-[#ffaa50]/80 h-full rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
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

  // Show continue button after loading
  if (showContinueButton) {
    return (
      <div className="flex justify-center bg-cover bg-center">
        <div className="flex flex-col h-screen items-center w-full justify-center fixed overflow-hidden">
          <div className="space-y-12 w-[398px] px-15">
            <div className="space-y-3">
              <div className="text-[18px]">
                {language === "en" ? "a good portfolio is a finished portfolio." : "portfolio yang bagus adalah portfolio yang selesai."}
              </div>
              <div className="text-[14px] text-white/45">
                {language === "en" ? "is a phrase often quoted by" : "adalah kata yang selalu dikutip oleh"} <span className="font-semibold text-[#ffaa50]">@halodesigners</span> {language === "en" ? "in various posts." : "di berbagai postingannya."}
              </div>
            </div>

            {/* Continue Button */}
            <button onClick={handleContinue}>
              <Button text={language === "en" ? "Click here to continue" : "Klik di sini untuk melanjutkan"} />
            </button>
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

  // Show home content after continue button is clicked
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
                style={{ zIndex: 200, transition: "position 0.3s ease" }}
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
            <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
              <AvaCard />
              <div className="flex flex-col gap-y-3 h-full w-full">
                <div className="hidden md:flex w-full h-full items-center bg-cover bg-center rounded-lg border border-neutral-800" style={{ backgroundImage: `url('/pixel.gif')` }}></div>
                <div className="flex flex-row gap-3.5 border border-neutral-800 px-3 py-2.5 bg-[#111] rounded-xl">
                  <Button text={language === 'en' ? 'Download CV Here' : 'Unduh CV Disini'} />
                </div>
              </div>
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
}

export default Home
