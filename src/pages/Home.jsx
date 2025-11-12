/* eslint-disable react-hooks/exhaustive-deps */
import { useLanguage } from "../data/languageContext.jsx";
import Footnote from '../components/Footnote'
import { useState } from 'react';
import CaseCard from "../components/CaseCard.jsx";
import CardData from '../data/card.js';
import Notfound from './404.jsx';
import Navigation from '../components/Navigation.jsx';
import Connect from "../components/Connect.jsx";
import Tabs from "../components/Tabs.jsx";
import Snapshot from "../components/Snapshot.jsx";
import { textGray400, textBaseSemi } from '../data/uiStyles.js';
import HomeCard from "../components/HomeCard.jsx";

const Home = () => {
  const { language, toggleLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState('portfolio');
  const isInvalid = language === undefined || toggleLanguage === undefined;

  // Handle tab change
  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  // Render content based on active tab
  const renderTabContent = () => {
    if (activeTab === 'portfolio') {
      return (
        <div className="flex flex-col gap-y-3">
          {CardData?.length ? (
            [...CardData]
              .sort((a, b) => (a.id ?? 0) - (b.id ?? 0))
              .map((article) => (
              <div key={article.id}>
                <CaseCard
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
            <div className={`${textGray400} italic`}>No Articles Available.</div>
          )}
        </div>
      );
    } else if (activeTab === 'snapshot') {
      return (
        <Snapshot />
      );
    } else if (activeTab === 'blog') {
      return (
        <div className={`text-center py-8 lg:pt-12 pb-12 md:pb-24 ${textBaseSemi}`}>Coming Soon..</div>
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

  // Konten utama
  return (
    <div className="flex justify-center bg-[#141414]">
      <div className="fixed backdrop-blur-sm shadow-lg pb-2 pt-3 px-4 z-30 w-full lg:hidden">
        <Navigation type='type-3' />
      </div>
      <div className="flex flex-col lg:flex-row pt-14 lg:pt-0 gap-y-2 w-full h-full px-0 md:px-4 lg:px-0">
        <div className="lg:flex flex-col gap-2 hidden lg:max-w-[420px] 2xl:max-w-[520px] p-4 overflow-y-auto h-screen">
          <div className="pb-1.5"><Navigation type='type-3' /></div>
          <HomeCard />
          <Connect />
          <div className="pt-2"><Footnote /></div>
        </div>
        <div className="flex flex-col gap-y-4 md:w-full md:overflow-y-auto px-4 md:px-0">
          <div className="lg:hidden"><HomeCard /></div>
          <div className="lg:h-screen lg:bg-[#0c0c0c] lg:overflow-y-auto lg:px-4 lg:py-3 flex flex-col gap-y-2">
            <div className="flex w-full pb-1">
              <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
            </div>
            {renderTabContent()}
          </div>
          <div className="flex flex-col lg:hidden pb-4 gap-y-3">
            <Connect />
            <Footnote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
