import { useParams } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footnote from '../components/Footnote'
import { useLanguage } from '../data/languageContext'
import { getCardBySlug, getBlogBySlug } from '../data/blog/index.js'
import Notfound from './404'
import { articleHeading, containerShape, textHeading1, textParagraphArticle } from '../data/uiStyles.js'
import SocialCard from '../components/SocialCard.jsx';

const Blog = () => {
  const { slug } = useParams()
  const { language } = useLanguage()   // en atau id

  const selectedBlog = getCardBySlug(slug)
  const csData = getBlogBySlug(slug)

  if (!selectedBlog) {
    return <Notfound />
  }

  const pageTitle =
    csData?.title?.[language] ||
    selectedBlog.title?.[language]

  return (
    <div>
      <div className="flex flex-col items-center overflow-x-hidden bg-[#0c0c0c]">
        <Navigation type="type-2" title={pageTitle} />

        <div className="flex flex-col gap-y-6 px-4 py-8 w-full md:max-w-[720px]">
          <div className={`${textHeading1} pt-14`}>{pageTitle}</div>

          {csData?.content?.map((block, i) => (
            <div key={i} className="flex flex-col gap-y-3">

              {block.type === 'paragraph' && (
                <p className={textParagraphArticle}>
                  {block[language]}
                </p>
              )}

              {block.type === 'image' && (
                <img
                  src={block.src}
                  alt={block.desc}
                  className={containerShape}
                />
              )}

              {block.type === 'heading 3' && (
                <h3 className={articleHeading}>
                  {block[language]}
                </h3>
              )}
            </div>
          ))}
          <div className="pt-4"><SocialCard /></div>
          <Footnote />
        </div>

        <title>Blog</title>
      </div>
    </div>
  )
}

export default Blog
