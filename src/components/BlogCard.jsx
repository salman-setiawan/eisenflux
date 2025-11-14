import React from 'react'
import { cardStyles, textHighlighted, textParagraph, textSubSemi } from '../data/uiStyles'
import { Link } from 'react-router-dom'

const BlogCard = ({ title, desc, date, url }) => {
  return (
    <Link to={url}>
      <div className={`${cardStyles} gap-y-1 hover:bg-[#202020]/70`}>
        <div className={textHighlighted}>{title}</div>
        <div className={`${textParagraph} line-clamp-2 pr-4`}>{desc}</div>
        <div className={`${textSubSemi} mt-1`}>{date}</div>
      </div>
    </Link>
  )
}

export default BlogCard