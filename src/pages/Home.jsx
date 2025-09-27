import { useLanguage } from '../data/languageContext.jsx';
import Card from "../components/Card.jsx";
import Footnote from "../components/Footnote.jsx";
import IconButton from "../components/IconButton.jsx";
import ArticleData from '../data/article.js';
import OtherData from '../data/other.js'; 
import Notfound from './404.jsx';
import WorkChip from '../components/WorkChip.jsx';
import Navigation from '../components/Navigation.jsx';
import Typewriter from '../components/animate/Typewriter.jsx';

const Home = () => {
  const { language, toggleLanguage } = useLanguage();
  console.log(language, toggleLanguage);

  if (language === undefined || toggleLanguage === undefined) {
    return <Notfound />
  }

  const { contact, stats } = OtherData[0].intro[language];

  return (
    <div className="flex justify-center">
      <div className='fixed top-6 left-6 hidden md:block' style={{ zIndex: 200 }}>
        <Navigation />
      </div>
      <div className="flex flex-col place-content-center w-full md:max-w-[920px] py-4 md:py-8 px-6 md:h-screen">
        <div className="w-full flex justify-end md:justify-between py-4">
          <div className="hidden md:block">
            <WorkChip label={stats} />
          </div>
          <button onClick={toggleLanguage} className="text-[14px] h-fit font-medium underline underline-offset-1 text-[#ffa500]">
            {language === "en" ? "English" : "Bahasa"}
          </button>
        </div>
        <div className="flex flex-col gap-y-6 md:flex-row gap-x-8 w-full h-full">
          <div className="flex flex-col gap-y-6 pt-[25rem] h-full block md:hidden">
            <div className="text-[64px]">
              <Typewriter text='enfx.' />
            </div>
            <div className="flex justify-between items-center">
              <WorkChip label={stats} />
              <div className="w-fit" style={{ zIndex: 200 }}>
                <Navigation />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 md:w-full md:pt-1 md:pb-4 md:pr-2 md:overflow-y-auto">
            {ArticleData.map((article) => (
              <Card
                key={article.id}
                title={article.title2}
                img={article.cover}
                obj={article.obj}
                desc={article.desc[language]}
                categories={article.categories.map(c => c[language])}
                url1={`/article/${article.id}`}
                url2={article.extUrl}
                intImg={article.intImg}
                intText={article.intText[language]}
                extImg={article.extImg}
                extText={article.extText[language]}
              />
            ))}
          </div>
          <div className="md:hidden w-full"> <Footnote /> </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
