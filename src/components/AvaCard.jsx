import { useLanguage } from '../data/languageContext.jsx'; 
import WorkChip from './WorkChip.jsx';

const AvaCard = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-row gap-3.5 border border-neutral-800 p-3 bg-[#141414] rounded-xl">
      <img src="/bg-bio.webp" alt="ava" className="w-20 md:w-24 h-full object-cover rounded-lg" />
      <div className="space-y-2 text-[14px] md:text-[15px] text-justify">
        <WorkChip label={language === "en" ? "Open to Work" : "Terbuka dalam Pekerjaan"} />
        <div className='pl-0.5 pr-2'> 
          {language === "en" ? "Hola! my name is" : "Hola! namaku"} 
          <span className="font-semibold text-[#ffaa50]"> Salman</span>
          <span>,</span> 
          {language === "en" ? " a Bachelor of Informatics graduate specializing in " : " lulusan Informatika dengan spesialisasi "} 
          <span className="font-semibold text-[#ffaa50]">UI/UX Design.</span>
          {language === "en" ? " currently based in" : " saat ini berdomisili di"}
          <span className="font-semibold text-[#ffaa50]"> Balikpapan - Indonesia 🇮🇩</span>
        </div>
        <div className='pl-0.5 pr-2'>
          {language === "en" ? "Experienced in creating intuitive digital experiences, translating complex problems into simple, meaningful, and impactful interfaces for both users and your business." : "Memiliki pengalaman dalam menciptakan pengalaman digital yang intuitif, menerjemahkan permasalahan kompleks menjadi antarmuka yang sederhana, bermakna, dan berdampak nyata bagi pengguna dan bisnis anda."}
        </div>
      </div>
    </div>
  );
};

export default AvaCard;
