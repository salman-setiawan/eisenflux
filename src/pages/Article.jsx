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

  const {
    title, cover, category, extUrl, extImg, extText,
    content1, content2, content3, content4, content5, content6, content7,
    content8, content9, content10, content11, content12, content13, content14,
    content15, content16,
  } = selectedArticle;

  const contentArray = [
    content1, content2, content3, content4, content5, content6, content7,
    content8, content9, content10, content11, content12, content13, content14,
    content15, content16
  ];

  return (
    <div>
      <div className="flex place-content-center py-5 md:py-8 md:max-h-screen">
        <div className="px-5 md:px-8 flex flex-col md:flex-row gap-x-8 gap-y-4 w-full md:w-[1080px]">
          <div className="md:w-2/5 flex flex-col gap-y-2">
            <div className="w-full flex justify-end pb-4">
              <button onClick={toggleLanguage} className="text-[15px] h-fit underline underline-offset-1">
                {language === 'en' ? 'Bahasa' : 'English'}
              </button>
            </div>
            <div className="rounded-xl h-[320px] bg-cover bg-center" style={{ backgroundImage: `url(${cover})` }}></div>
            <div className="py-2">
              <div className="text-2xl font-semibold leading-relaxed text-justify"> {title} </div>
              <div className="text-sm font-semibold text-gray-400 leading-relaxed text-justify"> {category[language]} </div>
              <div className="pt-4">
                {extUrl && (
                  <a href={extUrl} target="_blank" rel="noopener noreferrer">
                    <Button img={extImg} bg="bg-[#0066FF]" text={extText[language]} />
                  </a>
                )}
              </div>
            </div>
            {contentArray.map((content, index) => 
              content ? (
                <div key={index} className="pt-2">
                  <Content data={content} language={language} />
                </div>
              ) : null
            )}
          </div>
          <div className="md:hidden w-full"> <Footnote /> </div>
        </div>
      </div>
      <div className="hidden md:block fixed bottom-0 w-full bg-[#111111] py-1.5" style={{ zIndex: 1 }}> <Footnote /> </div>
    </div>
  );
};

export default Article;
