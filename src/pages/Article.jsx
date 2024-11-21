import { useParams } from 'react-router-dom';
import ArticleData from '../data/article.js'
import Content from '../components/Content.jsx'

const Article = () => {
  const { id } = useParams();

  const selectedArticle = ArticleData.find(article => article.id === parseInt(id));

  if (!selectedArticle) {
    return (
      <div className="flex justify-center py-4">
        <p className="text-lg font-semibold text-red-600">Artikel tidak ditemukan!</p>
      </div>
    );
  }

  const { 
    title, cover, category, content1, content2, content3, content4, content5, content6, content7, content8, content9, content10, content11, content12, content13, content14, content15, content16, content17, content18, content19, content20,
  } = selectedArticle;

  return (
    <div>
      <div className="flex place-content-center py-5 md:py-8 md:max-h-screen">
        <div className="px-5 md:px-8 flex flex-col md:flex-row gap-x-8 gap-y-4 w-full md:w-[1080px]">
          <div className="md:w-2/5 flex flex-col gap-y-4">
            <div className='rounded-xl h-[320px] bg-cover bg-center' style={{ backgroundImage: `url(${cover})` }}></div>
            <div className="">
              <div className="text-xl font-semibold leading-relaxed text-justify">
                {title}
              </div>
              <div className="text-sm text-gray-400 leading-relaxed text-justify">
                {category}
              </div>
            </div>
            {content1 && <Content data={content1} />}
            {content2 && <Content data={content2} />}
            {content3 && <Content data={content3} />}
            {content4 && <Content data={content4} />}
            {content5 && <Content data={content5} />}
            {content6 && <Content data={content6} />}
            {content7 && <Content data={content7} />}
            {content8 && <Content data={content8} />}
            {content9 && <Content data={content9} />}
            {content10 && <Content data={content10} />}
            {content11 && <Content data={content11} />}
            {content12 && <Content data={content12} />}
            {content13 && <Content data={content13} />}
            {content14 && <Content data={content14} />}
            {content15 && <Content data={content15} />}
            {content16 && <Content data={content16} />}
            {content17 && <Content data={content17} />}
            {content18 && <Content data={content18} />}
            {content19 && <Content data={content19} />}
            {content20 && <Content data={content20} />}
          </div>
          <div className="md:hidden w-full">
            <div className="flex justify-center">
              <p className="text-[11px] text-[#B5B5B5] cursonone">@ 2025 ENFX. All right reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article