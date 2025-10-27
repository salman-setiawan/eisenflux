import { useLanguage } from "../data/languageContext.jsx";
import Clock from "../components/Clock.jsx";


const DeckCard = ({specDiv, specChip}) => {
  const { language } = useLanguage();

  specDiv = "flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-center py-2 px-2.5 bg-[#202020] rounded-lg border border-neutral-800";
  specChip = "text-[12px] md:text-[13px] px-2 py-0.5 font-bold text-[#ffaa50] bg-[#ffaa50]/15 rounded-full";
  
  return (
    <div className="gap-1.5 xl:gap-2 w-full flex flex-col xl:flex-row min-w-[180px]">
      <div className="hidden md:block flex-1 bg-cover bg-center rounded-lg bg-[url('/pixel.gif')] border border-neutral-800 xl:hidden"></div>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-1.5 xl:gap-2 xl:grid-cols-2">
        <div className={`${specDiv} gap-y-2`}>
          <div className="text-[12px] font-medium xl:w-[160px]">{language === "en" ? "Created with :" : "Dibuat dengan :"}</div>
          <div className="flex gap-1.5">
            <div className={specChip}>React</div>
            <div className={specChip}>TailwindCSS</div>
          </div>
        </div>
        <div className={`${specDiv} gap-y-1.5`}>
          <div className="text-[12px] font-medium lg:w-[200px]">{language === "en" ? "My Time Zone :" : "Zona Waktu Saya :"}</div>
          <div className="flex">
            <Clock />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeckCard