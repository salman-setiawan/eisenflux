import { useParams } from 'react-router-dom';
import { useLanguage } from '../data/languageContext';
import ArticleData from '../data/article.js';
import Notfound from '../pages/404.jsx';
import Button from '../components/Button.jsx';
import Footnote from '../components/Footnote.jsx';
import Content from '../components/Content.jsx';

const Article = () => {
  const { id } = useParams();
  const { language, toggleLanguage } = useLanguage();
  const selectedArticle = ArticleData.find(article => article.id === parseInt(id));

  if (!selectedArticle) {
    return <Notfound />;
  }

  const { title, cover, categories, extUrl, extImg, extText, contents } = selectedArticle;

  return (
    <div>
      <div className="flex place-content-center pt-2">
        <div className="px-5 flex flex-col items-center gap-x-8 gap-y-4 w-full md:max-w-[640px] pb-12">
          <div className="flex flex-col gap-y-2">
            <div className="w-full flex justify-end py-4">
              <button
                onClick={toggleLanguage}
                className="text-[15px] h-fit underline underline-offset-1 text-[#ffa500]"
              >
                {language === "en" ? "English" : "Bahasa"}
              </button>
            </div>
            <div
              className="rounded-xl h-[320px] bg-cover bg-center"
              style={{ backgroundImage: `url(${cover})` }}
            ></div>
            <div className="py-2 flex flex-col gap-y-6">
              <div>
                <div className="text-2xl font-semibold leading-relaxed text-justify">
                  {title}
                </div>
                <div className="flex flex-wrap gap-x-2 text-sm font-semibold pt-1.5">
                  {categories.map((cat, i) => (
                    <span className='py-1 px-2 bg-opacity-15 bg-[#ffaa00] rounded-lg' key={i}>{cat[language]}</span>
                  ))}
                </div>
              </div>
              {extUrl && (
                <a href={extUrl} target="_blank" rel="noopener noreferrer">
                  <Button img={extImg} bg="bg-[#0066FF]" text={extText[language]} hoverBg="hover:bg-[#ffaa00]" />
                </a>
              )}
            </div>

            {contents.map((content, index) => (
              <div key={index}>
                <Content data={content} language={language} />
              </div>
            ))}
          </div>
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
