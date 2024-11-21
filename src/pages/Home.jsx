import Card from "../components/Card"
import Footnote from "../components/Footnote.jsx"
import IconButton from "../components/IconButton"
import ArticleData from '../data/article.js'

const Home = () => {
  return (
    <div className="flex place-content-center pt-8 pb-4 md:py-8 md:max-h-screen">
      <div className="px-5 md:px-8 flex flex-col md:flex-row gap-x-8 gap-y-4 w-full md:w-[1080px]">
        <div className="md:w-2/5 flex flex-col gap-y-4">
          <img src="brand.png" alt="brand" className="h-20 w-fit pb-2" />
          <div className="text-[15px] leading-relaxed text-justify">
            Hello and welcome to my humble portfolio. You can call me Enefex and you can explore all my recent works and projects in this page.
          </div>
          <div className="text-[15px] leading-relaxed text-justify">
            If you have something to discuss or have some project to work with, please contact me on the button links down below. Thanks!
          </div>
          <div className="flex gap-x-2 justify-end md:justify-start">
            <IconButton src='gmail.svg' url='mailto:salmansetiawan88@gmail.com' />
            <IconButton src='instagram.svg' url='https://instagram.com/eisenflux' />
            <IconButton src='linkedin.svg' url='https://linkedin.com/in/salman-setiawan' />
          </div>
        </div>
        <div className="flex flex-col gap-y-3 md:w-3/5 md:pr-4 md:pb-4 md:overflow-y-auto">
          {ArticleData.map((article) => (
              <Card
                key={article.id}
                img={article.cover}
                category={article.category}
                url1={`/article/${article.id}`}
                url2={article.extUrl}
                extImg={article.extImg}
                extText={article.extText}
              />
            ))}
        </div>
        <div className="md:hidden w-full"> <Footnote /> </div>
      </div>
      <div className="hidden md:block fixed bottom-0 w-full bg-[#181818]" style={{ zIndex: 1 }}> <Footnote /> </div>
    </div>
  )
}

export default Home