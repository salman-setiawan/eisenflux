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
    <div className="flex justify-center">
      <div className="flex flex-col place-content-center w-full md:max-w-[1200px] py-4 md:py-8 px-6 md:h-screen">
        <div className="w-full flex justify-end pb-4">
          <button onClick={toggleLanguage} className="text-[14px] h-fit font-medium underline underline-offset-1 text-[#ffa500]">
            {language === "en" ? "English" : "Bahasa"}
          </button>
        </div>
        <div className="flex flex-col gap-y-6 md:flex-row gap-x-8 w-full h-full">
          <div className="md:w-3/5 md:min-w-[300px] md:max-w-[480px] flex flex-col gap-y-6 md:gap-y-8 pt-[25rem] md:pt-0 md:justify-end md:pb-12 md:px-4 h-full">
            <div className="flex w-full">
              <video src="brand.mp4" className="h-20 w-fit pb-2 md:pb-0" autoPlay loop muted />
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="text-[14px] leading-relaxed">{contact}</div>
              <a href='/me'>
                <button className="text-[14px] h-fit font-medium underline underline-offset-1 text-[#ffa500]">
                  {language === "en" ? "More About Me" : "Lebih Banyak Tentang Saya"}
                </button>
              </a>
            </div>
            <div className="flex justify-between items-center md:flex-col md:gap-y-4 md:items-start lg:items-center lg:flex-row">
              <WorkChip label={stats} />
              <div className="flex gap-x-2.5 justify-end md:justify-start py-2">
                <IconButton src="gmail.svg" url="mailto:salmansetiawan88@gmail.com" />
                <IconButton src="instagram.svg" url="https://instagram.com/eisenflux" />
                <IconButton src="linkedin.svg" url="https://linkedin.com/in/salman-setiawan" />
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
