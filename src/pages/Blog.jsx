import React from 'react'
import { useParams } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footnote from '../components/Footnote'
import blogPosts from '../data/blog/index.js'
import Notfound from './404'

const Blog = ({ title }) => {
  const { slug } = useParams()
  const post = blogPosts[slug]

  if (!post) return <Notfound />
  return (
    <div>
      <div className="flex flex-col items-center overflow-x-hidden bg-[#0c0c0c]">
        <Navigation type="type-2" title={post.title?.id || title} />
        <div className="flex flex-col gap-y-6 px-4 py-8 w-full md:max-w-[720px]">
          <div className="text-white text-[22px] font-semibold">{post.title.id}</div>

          {post.content.map((block, i) => (
            <div key={i} className="flex flex-col gap-y-3">

              {block.paragraph && (
                <p className="text-white text-[14px] leading-relaxed">{block.paragraph.id}</p>
              )}

              {block.image && (
                <img
                  src={block.image.src}
                  alt={block.image.desc}
                  className="rounded-md"
                />
              )}

            </div>
          ))}

          <div className="pt-2 pb-12"><Footnote /></div>
        </div>
        <title>Blog</title>
      </div>
    </div>
  )
}

export default Blog