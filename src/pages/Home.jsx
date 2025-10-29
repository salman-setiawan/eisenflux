/* eslint-disable react-hooks/exhaustive-deps */
import { useLanguage } from "../data/languageContext.jsx";
import LanguageToggle from '../components/LanguageToggle'
import Footnote from '../components/Footnote'
import { useEffect, useState } from 'react';
import Card from "../components/Card.jsx";
import CardData from '../data/card.js';
import Notfound from './404.jsx';
import Navigation from '../components/Navigation.jsx';
import ExpCard from '../components/ExpCard.jsx';
import AvaCard from '../components/AvaCard.jsx';
import Connect from "../components/Connect.jsx";
import DeckCard from "../components/DeckCard.jsx";
import Tabs from "../components/Tabs.jsx";
import Snapshot from "../components/Snapshot.jsx";

const Home = () => {
  const { language, toggleLanguage } = useLanguage();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('portfolio');
  const isInvalid = language === undefined || toggleLanguage === undefined;


  // Daftar semua asset yang perlu di-preload
  const assetsToPreload = [
    '/bg-bio.webp', '/pattern-card.svg', '/pixel.gif', '/vite.svg',

    '/showcase/another.webp', '/showcase/edufams.webp', '/showcase/eduwork.webp', '/showcase/pemedas.webp',
    
    '/shot/estore.webp', '/shot/musplay.webp', '/shot/learnx.webp', '/shot/halogbs.webp',
    
    '/anotherisland/ces1.webp', '/anotherisland/ces2.webp', '/anotherisland/desy.webp', '/anotherisland/ucd.webp', '/anotherisland/user.webp',

    '/anotherisland/gallery/screen1.webp', '/anotherisland/gallery/screen2.webp', '/anotherisland/gallery/screen3.webp', '/anotherisland/gallery/screen4.webp', '/anotherisland/gallery/screen5.webp', '/anotherisland/gallery/screen6.webp', '/anotherisland/gallery/screen7.webp', '/anotherisland/gallery/screen8.webp', '/anotherisland/gallery/screen9.webp', '/anotherisland/gallery/screen10.webp',

    '/edufams/pitch.webp', '/edufams/style.webp', '/edufams/team.webp', '/edufams/think.webp',
    
    '/edufams/gallery/mobile_screen1.webp', '/edufams/gallery/mobile_screen2.webp', '/edufams/gallery/mobile_screen3.webp', '/edufams/gallery/mobile_screen4.webp', '/edufams/gallery/mobile_screen5.webp', '/edufams/gallery/mobile_screen6.webp', '/edufams/gallery/mobile_screen7.webp', '/edufams/gallery/mobile_screen8.webp', '/edufams/gallery/mobile_screen9.webp', '/edufams/gallery/mobile_screen10.webp', '/edufams/gallery/mobile_screen11.webp', '/edufams/gallery/mobile_screen12.webp', '/edufams/gallery/pc_screen1.webp', '/edufams/gallery/pc_screen2.webp', '/edufams/gallery/pc_screen3.webp', '/edufams/gallery/pc_screen4.webp', '/edufams/gallery/pc_screen5.webp', '/edufams/gallery/pc_screen6.webp', '/edufams/gallery/pc_screen7.webp', '/edufams/gallery/pc_screen8.webp', '/edufams/gallery/pc_screen9.webp', '/edufams/gallery/pc_screen10.webp', '/edufams/gallery/pc_screen11.webp',

    '/eduwork/design.webp', '/eduwork/flow.webp', '/eduwork/mood.webp',
    
    '/eduwork/gallery/screen1.webp', '/eduwork/gallery/screen2.webp', '/eduwork/gallery/screen3.webp', '/eduwork/gallery/screen4.webp', '/eduwork/gallery/screen5.webp', '/eduwork/gallery/screen6.webp', '/eduwork/gallery/screen7.webp', '/eduwork/gallery/screen8.webp', '/eduwork/gallery/screen9.webp', '/eduwork/gallery/screen10.webp', '/eduwork/gallery/screen11.webp',
  ];


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

  // Handle tab change
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  // Render content based on active tab
  const renderTabContent = () => {
    if (activeTab === 'portfolio') {
      return (
        <div className="flex flex-col xl:w-full xl:h-full gap-y-4 lg:gap-y-3 xl:gap-y-0">
          {CardData?.length ? (
            [...CardData]
              .sort((a, b) => (a.id ?? 0) - (b.id ?? 0))
              .map((article) => (
              <div key={article.id} className="xl:pb-3">
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
      );
    } else if (activeTab === 'snapshot') {
      return (
        <Snapshot />
      );
    } else if (activeTab === 'blog') {
      return (
        <div className="text-center py-8 xl:pt-12 text-white/80">Coming Soon..</div>
      );
    }
    return null;
  };

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
                <div className="bg-[#ffaa50] h-full rounded-full transition-all duration-300 ease-out" style={{ width: `${loadingProgress}%` }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-0 w-full flex justify-center py-4">
          <LanguageToggle />
        </div>
        <div className="fixed bottom-0 w-full py-4">
          <Footnote />
        </div>
        <title>Welcome Human!</title>
      </div>
    );
  }

  // Konten utama
  return (
    <div className="flex justify-center bg-[#161616]">
      <div className='fixed bg-[#171717]/75 backdrop-blur-xs py-3 px-4 z-30 w-full xl:hidden'>
        <Navigation />
      </div>
      <div className="flex flex-col pt-18 xl:pt-0 gap-y-2 w-full h-full px-0 md:px-4 xl:px-0">
        <div className="flex flex-col xl:flex-row xl:gap-x-1">
          <div className="xl:flex flex-col gap-2 hidden w-[900px] xl:px-4">
            <div className='pt-3 pb-1.5'><Navigation /></div>
            <AvaCard />
            <DeckCard />
            <ExpCard />
            <Connect />
            <div className="pt-2"><Footnote /></div>
          </div>
          <div className="flex flex-col gap-y-4 md:w-full md:overflow-y-auto px-4 md:px-0">
            <div className="flex flex-col gap-1.5 xl:hidden">
              <div className="flex flex-col md:flex-row gap-1.5 items-stretch">
                <AvaCard />
                <DeckCard />
              </div>
              <ExpCard />
            </div>
            <div className="xl:h-screen xl:bg-[#0c0c0c] xl:overflow-y-auto xl:px-4 xl:py-3.5 flex flex-col gap-y-3">
              <div className="flex w-full">
                <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
              </div>
              {renderTabContent()}
            </div>
            <div className="flex flex-col xl:hidden pb-4 gap-y-3">
              <Connect />
              <Footnote />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
