import { useLanguage } from '../data/languageContext.jsx';
import Card from "../components/Card.jsx";
import Footnote from "../components/Footnote.jsx";
import IconButton from "../components/IconButton.jsx";
import ArticleData from '../data/article.js';
import OtherData from '../data/other.js'; 
import Notfound from './404.jsx';
import WorkChip from '../components/WorkChip.jsx';

const Home = () => {
  const { language, toggleLanguage } = useLanguage();
  console.log(language, toggleLanguage);

  if (language === undefined || toggleLanguage === undefined) {
    return <Notfound />
  }

  const { contact, stats } = OtherData[0].intro[language];

  return (
    <div className="flex flex-col place-content-center py-8 px-6 md:h-screen">
      <div className="w-full flex justify-end pb-4">
        <button onClick={toggleLanguage} className="text-[14px] h-fit underline underline-offset-1 text-[#ffa500]">
          {language === "en" ? "English" : "Bahasa"}
        </button>
      </div>
      <div className="flex flex-col gap-y-6 md:flex-row gap-x-16 w-full h-full">
        <div className="md:w-3/5 md:min-w-[360px] md:max-w-[480px] flex flex-col gap-y-4 md:gap-y-8 pt-[25rem] md:pt-0 md:justify-end md:pb-12 md:px-4 h-full">
          <div className="flex w-full justify-center md:justify-start">
            <video src="brand.mp4" className="h-20 w-fit pb-2 md:pb-0" autoPlay loop muted />
          </div>
          <div className="text-[15px] leading-relaxed text-center md:text-start">{contact}</div>
          <div className="flex justify-between items-center md:flex-col md:gap-y-4 md:items-start">
            <WorkChip label={stats} />
            <div className="flex gap-x-2.5 justify-end md:justify-start py-2">
              <IconButton src="gmail.svg" url="mailto:salmansetiawan88@gmail.com" />
              <IconButton src="instagram.svg" url="https://instagram.com/eisenflux" />
              <IconButton src="linkedin.svg" url="https://linkedin.com/in/salman-setiawan" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 md:w-full md:pt-1 md:pb-12 md:pr-2 md:overflow-y-auto">
          {ArticleData.map((article) => (
            <Card
              key={article.id}
              img={article.cover}
              category={article.category[language]} 
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
      <div className="hidden md:block fixed bottom-0 w-full bg-[#111111] py-1.5" style={{ zIndex: 1 }}> <Footnote /> </div>
    </div>
  );
};

export default Home;
