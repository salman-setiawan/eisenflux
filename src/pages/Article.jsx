import { useParams } from 'react-router-dom';
import { useLanguage } from '../data/languageContext';
import ArticleData from '../data/article.js';
import Notfound from '../pages/404.jsx';
import Button from '../components/Button.jsx';
import Footnote from '../components/Footnote.jsx';
import Content from '../components/Content.jsx';
import Showcase from '../components/Showcase.jsx';
import Chip from '../components/Chip.jsx';

const Article = () => {
  const { id } = useParams();
  const { language, toggleLanguage } = useLanguage();
  const selectedArticle = ArticleData.find(article => article.id === parseInt(id));

  if (!selectedArticle) {
    return <Notfound />;
  }

  const { title, categories, extUrl, extImg, extText, contents } = selectedArticle;

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="px-5 flex flex-col gap-y-2 justify-center w-full">
          <div className="w-full flex justify-end py-4">
            <button
              onClick={toggleLanguage}
              className="text-[15px] h-fit underline underline-offset-1 text-[#ffa500]"
            >
              {language === "en" ? "English" : "Bahasa"}
            </button>
          </div>
        </div>
        <div className="w-full h-[560px] md:h-[320px] bg-cover flex justify-center items-center bg-[#171717] overflow-hidden shadow-lg">
          <Showcase />
        </div>
        <div className="px-5 flex flex-col gap-y-2 w-full md:max-w-[640px] pt-4 pb-12">
          <div className="pt-2 pb-6 flex flex-col gap-y-6">
            <div className='pb-2'>
              <div className="text-2xl font-semibold leading-relaxed text-justify">
                {title}
              </div>
              <div className="flex flex-wrap gap-x-2 text-[12px] font-semibold pt-2">
                {categories.map((cat, i) => (
                  <Chip key={i} label={cat[language]} />
                ))}
              </div>
            </div>
            {extUrl && (
              <div className="p-0.5 snake">
                <a href={extUrl} target="_blank" rel="noopener noreferrer">
                  <Button img={extImg} bg="bg-[#111111]" text={extText[language]} hoverBg="hover:bg-[#ffaa00]" />
                </a>
              </div>
            )}
          </div>

          {contents.map((content, index) => (
            <div key={index}>
              <Content data={content} language={language} />
            </div>
          ))}
        </div>
      </div>
      <div
        className="fixed bottom-0 w-full bg-[#111111] py-1.5"
        style={{ zIndex: 1 }}
      >
        <Footnote />
      </div>
    </div>
  );
};

export default Article;
