import { useLanguage } from '../data/languageContext.jsx';
import WorkChip from './WorkChip.jsx';

const AvaCard = ({ highlightedText, paragraphText }) => {
  const { language } = useLanguage();

  highlightedText = 'font-semibold text-[#ffaa50]';
  paragraphText = 'pl-0.5 pr-1 text-[14px] md:text-[15px] text-justify';

  return (
    <div className="flex flex-col gap-3 border border-neutral-800 p-3 bg-[#202020] rounded-xl">
      <div className="flex flex-col gap-y-2 h-fit">
        <WorkChip label={language === "en" ? "Open to Work" : "Terbuka untuk Pekerjaan"} />
        <div className={paragraphText}>
          {language === "en" ? "Hola! my name is " : "Hola! namaku "}
          <span className={highlightedText}>Salman</span>
          <span>,</span>
          {language === "en" ? " a Bachelor of Informatics graduate specializing in " : " lulusan Informatika dengan spesialisasi "}
          <span className={highlightedText}>UI/UX Design.</span>
          {language === "en" ? " currently based in " : " saat ini berdomisili di "}
          <span className={highlightedText}>Balikpapan - Indonesia 🇮🇩</span>
        </div>
      </div>
      <div className={paragraphText}>
        {language === "en" ? "Experienced in creating intuitive digital experiences, translating complex problems into simple, meaningful, and impactful interfaces for both users and your business." : "Memiliki pengalaman dalam menciptakan pengalaman digital yang intuitif, menerjemahkan permasalahan kompleks menjadi antarmuka yang sederhana, bermakna, dan berdampak nyata bagi pengguna dan bisnis anda."}
      </div>
    </div>
  );
};

export default AvaCard;
