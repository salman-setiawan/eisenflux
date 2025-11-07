import { useLanguage } from "../data/languageContext.jsx";
import Clock from "../components/Clock.jsx";
import { cardStyles } from '../data/uiStyles.js';
import Chip from "./Chip.jsx";


const DeckCard = ({specDiv}) => {
  const { language } = useLanguage();

  specDiv = `${cardStyles} py-2 sm:flex-row sm:flex-wrap sm:justify-between sm:items-center`;
  
  return (
    <div className="gap-1.5 xl:gap-2 w-full flex flex-col xl:flex-row min-w-[180px]">
      <div className="hidden md:block flex-1 bg-cover bg-center rounded-lg bg-[url('/pixel.gif')] border border-neutral-800 xl:hidden"></div>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-1.5 xl:gap-2 xl:grid-cols-2">
        <div className={`${specDiv} gap-y-2`}>
          <div className="text-[12px] font-medium xl:w-[160px]">{language === "en" ? "Created with :" : "Dibuat dengan :"}</div>
          <div className="flex gap-1.5">
            <Chip label='React' />
            <Chip label='TailwindCSS' />
          </div>
        </div>
        <div className={`${specDiv} gap-y-1.5`}>
          <div className="text-[12px] font-medium lg:w-[200px]">{language === "en" ? "My Timezone :" : "Zona Waktu Saya :"}</div>
          <div className="flex xl:w-full">
            <Clock />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeckCard