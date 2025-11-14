import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footnote from '../components/Footnote'
import { useLanguage } from '../data/languageContext'
import { getCardBySlug, getBlogBySlug } from '../data/blog/index.js'
import Notfound from './404'

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
          <div className="text-white text-[22px] font-semibold">{pageTitle}</div>

          {csData?.content?.map((block, i) => (
            <div key={i} className="flex flex-col gap-y-3">

              {block.type === 'paragraph' && (
                <p className="text-white text-[14px] leading-relaxed">
                  {block[language]}
                </p>
              )}

              {block.type === 'image' && (
                <img
                  src={block.src}
                  alt={block.desc}
                  className="rounded-md"
                />
              )}

              {block.type === 'heading 3' && (
                <h3 className="text-white text-[16px] font-semibold">
                  {block[language]}
                </h3>
              )}
            </div>
          ))}

          <div className="pt-2 pb-12">
            <Footnote />
          </div>
        </div>

        <title>Blog</title>
      </div>
    </div>
  )
}

export default Blog
