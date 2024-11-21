import Button from './Button'
import { Link } from 'react-router-dom'

const Card = ({ category, img, extImg, extText, url1, url2 }) => {
  return (
    <div className='overflow-visible'>
      <div className={`rounded-xl bg-cover bg-center h-[360px]`} style={{ backgroundImage: `url(${img})` }}>
        <div className="h-full flex flex-col px-2.5 py-3 justify-between">
          <div className="bg-opacity-80 flex gap-x-1 py-1 pl-1.5 pr-2 rounded-lg bg-gray-900 w-fit">
            <img className='w-[18px]' src="folder.svg" alt="icon" />
            <div className="text-relaxed text-[13px] text-gray-400 font-medium">
              {category}
            </div>
          </div>
          <div className="w-full flex justify-end md:justify-start">
            <div className="flex gap-x-2.5">
              {url1 && (
                <Link to={url1}>
                  <Button img="process.svg" bg="bg-gray-800" text="See Process" />
                </Link>
              )}
              {url2 && (
                <Link to={url2} target="_blank" rel="noopener noreferrer">
                  <Button img={extImg} bg="bg-[#0066FF]" text={extText} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card