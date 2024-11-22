import { useLanguage } from '../data/languageContext.jsx';
import Card from "../components/Card.jsx";
import Footnote from "../components/Footnote.jsx";
import IconButton from "../components/IconButton.jsx";
import ArticleData from '../data/article.js';
import OtherData from '../data/other.js'; 

const Home = () => {
  const { language, toggleLanguage } = useLanguage();
  console.log(language, toggleLanguage);

  if (language === undefined || toggleLanguage === undefined) {
    return <div>Loading...</div>;
  }

  const { welcome, contact } = OtherData[0].intro[language];

  return (
    <div className="flex place-content-center pt-6 pb-4 md:py-8 px-5 md:px-8 md:max-h-screen">
      <div className="flex flex-col md:flex-row gap-x-10 gap-y-4 w-full md:w-[1080px]">
        <div className="md:w-2/5 flex flex-col gap-y-4">
          <div className="w-full flex justify-end pb-2">
            <button onClick={toggleLanguage} className="text-[15px] h-fit underline underline-offset-1">
              {language === "en" ? "Bahasa" : "English"}
            </button>
          </div>
          <img src="brand.png" alt="brand" className="h-20 w-fit pb-2" />
          <div className="text-[15px] leading-relaxed text-justify">{welcome}</div>
          <div className="text-[15px] leading-relaxed text-justify">{contact}</div>
          <div className="flex gap-x-2 justify-end md:justify-start">
            <IconButton src="gmail.svg" url="mailto:salmansetiawan88@gmail.com" />
            <IconButton src="instagram.svg" url="https://instagram.com/eisenflux" />
            <IconButton src="linkedin.svg" url="https://linkedin.com/in/salman-setiawan" />
          </div>
        </div>
        <div className="flex flex-col gap-y-3 md:w-3/5 md:pr-4 md:pb-4 md:overflow-y-auto">
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
