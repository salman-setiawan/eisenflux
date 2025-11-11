import { useState } from "react";
import { useLanguage } from "../data/languageContext.jsx";
import WorkChip from './WorkChip'
import { semibaseColourText } from "../data/uiStyles.js";

const ProfileCard = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex gap-x-3 items-center">
        <img src="/bg-bio.webp" loading="lazy" alt="ava" className="h-[40px] rounded-lg cursor-pointer" onClick={() => setIsOpen(true)} />
        <div>
          <div className="font-semibold text-[14px]">Salman Setiawan</div>
          <WorkChip color={semibaseColourText} label={language === "en" ? "Open to Work" : "Terbuka untuk Pekerjaan"} />
        </div>
      </div>
      {isOpen && (
        <div className="fixed flex flex-col gap-y-8 inset-0 z-50 bg-black/20 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <button aria-label="Close" className="text-white cursor-pointer" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
            {language === 'en' ? 'tap anywhere to close' : 'tekan dimana saja untuk menutup'}
          </button>
          <img src="/bg-bio.webp" alt="ava" className="max-h-[72vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  )
}

export default ProfileCard