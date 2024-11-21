import { Link, useParams } from 'react-router-dom';
import ArticleData from '../data/article.js'
import Content from '../components/Content.jsx'
import Notfound from '../pages/404.jsx'
import Button from '../components/Button.jsx';
import Footnote from '../components/Footnote.jsx';


const Article = () => {
  const { id } = useParams();

  const selectedArticle = ArticleData.find(article => article.id === parseInt(id));

  if (!selectedArticle) {
    return (
      <Notfound />
    );
  }

  const { title, cover, category, extUrl, extImg, extText, } = selectedArticle;

  const contentArray = [
    selectedArticle.content1, selectedArticle.content2, selectedArticle.content3, selectedArticle.content4, selectedArticle.content5, selectedArticle.content6, selectedArticle.content7, selectedArticle.content8, selectedArticle.content9, selectedArticle.content10, selectedArticle.content11, selectedArticle.content12, selectedArticle.content13, selectedArticle.content14, selectedArticle.content15, selectedArticle.content16, selectedArticle.content17, selectedArticle.content18, selectedArticle.content19, selectedArticle.content20,
  ];

  return (
    <div>
      <div className="flex place-content-center py-5 md:py-8 md:max-h-screen">
        <div className="px-5 md:px-8 flex flex-col md:flex-row gap-x-8 gap-y-4 w-full md:w-[1080px]">
          <div className="md:w-2/5 flex flex-col gap-y-4">
            <div className='rounded-xl h-[320px] bg-cover bg-center' style={{ backgroundImage: `url(${cover})` }}></div>
            <div className="pt-1 pb-2">
              <div className="text-2xl font-semibold leading-relaxed text-justify">
                {title}
              </div>
              <div className="text-sm font-semibold text-gray-400 leading-relaxed text-justify">
                {category}
              </div>
              <div className="pt-4">
                {extUrl && (<Link to={extUrl} target="_blank" rel="noopener noreferrer">
                  <Button img={extImg} bg="bg-[#0066FF]" text={extText} />
                </Link> )}
              </div>
            </div>
            {contentArray.map((content, index) => 
              content ? <Content key={index} data={content} /> : null
            )}
          </div>
          <div className="md:hidden w-full">
            <Footnote />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article