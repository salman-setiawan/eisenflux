import { useLanguage } from '../data/languageContext.jsx';
import WorkChip from './WorkChip.jsx';
import { cardStyles, highlightedText, paragraphText } from '../data/uiStyles.js';

const AvaCard = () => {
  const { language } = useLanguage();

  return (
    <div className={`${cardStyles} gap-3`}>
      <WorkChip label={language === "en" ? "Open to Work" : "Terbuka untuk Pekerjaan"} />
      <div className={paragraphText}>
        {language === "en" ? "Hola! my name is " : "Hola! namaku "}
        <span className={highlightedText}>Salman</span>
        {language === "en" ? ", a Bachelor of Informatics graduate specializing in " : ", lulusan Informatika dengan spesialisasi "}
        <span className={highlightedText}>UI/UX Design</span>
        {language === "en" ? " and currently based in " : " dan saat ini berdomisili di "}
        <span className={highlightedText}>Balikpapan - Indonesia 🇮🇩</span>
      </div>
      <div className={paragraphText}>
        {language === "en" ? "Experienced in creating intuitive digital experiences, translating complex problems into simple, meaningful, and impactful interfaces for both users and your business." : "Memiliki pengalaman dalam menciptakan pengalaman digital yang intuitif, menerjemahkan permasalahan kompleks menjadi antarmuka yang sederhana, bermakna, dan berdampak nyata bagi pengguna dan bisnis anda."}
      </div>
    </div>
  );
};

export default AvaCard;
