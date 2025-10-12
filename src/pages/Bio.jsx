import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../data/languageContext.jsx";
import BioCards from "../components/BioCards.jsx";
import BioData from "../data/bio";
import Notfound from "./404.jsx";
import Typewriter from "../components/animate/Typewriter.jsx";
import NoiseOverlay from "../components/animate/Noise.jsx";
import LanguageToggle from "../components/LanguageToggle.jsx";

const Bio = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  if (!language) return <Notfound />;

  const { desc, experience, education, certification } = BioData[0];
  const dataMap = { experience, education, certification };

  const renderSection = (label) => {
    const content = dataMap[label].map((item) => (
      <BioCards
        key={item.uid}
        type={label}
        title={item.title?.[language] || item.title}
        role={item.role?.[language] || item.role}
        company={item.company}
        date={item.date}
        dateStart={item.dateStart}
        dateEnd={item.dateEnd}
        keyWord={item.keyWord}
        jobdesc={item.jobdesc}
        language={language}
        proof={item.proof}
      />
    ));
    return (
      <div key={label} className="flex w-full border-dot bg-black/80">
        <div className={`flex w-full flex-col`}>{content}</div>
      </div>
    );
  };
  
  const Title = 'font-semibold text-[#ffaa50] text-center py-4'

  return (
    <div className="flex justify-center bg-cover bg-center">
      <div className="hidden lg:flex h-screen items-center w-full justify-center fixed overflow-hidden">
        <Typewriter className='text-white/5 text-[40rem] select-none text-center' text="enfx." />
      </div>
      <div className="fixed top-0 z-10 bg-[#141414] w-full flex justify-between py-4 px-5 items-center">
        <button 
          onClick={() => navigate(-1)}
          className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="fixed -translate-x-1/2 left-1/2 font-semibold text-[13px]">{language === "en" ? "About Me" : "Tentang Saya  "}</div>
        <LanguageToggle />
      </div>
      <div className="flex flex-col place-content-center w-full md:max-w-[720px] pt-14 relative">
        {/* scroll layout for all screens */}
        <div className="flex flex-col gap-y-2 p-4">
          {/* image */}
          <div className="w-full h-[24rem] bg-white bg-[url('/bg-bio.webp')] bg-cover bg-center"></div>
          {/* description */}
          <div className={`${Title}`}>{language === 'en' ? 'About Me' : 'Tentang Saya'}</div>
          <div className="bg-black/80 p-4 border-dot text-[15px]">{desc[language]}</div>
          {/* experience, education, certification in order */}
          <div className="flex flex-col gap-y-2 w-full">
            <div className={`${Title}`}>{language === 'en' ? 'Work Experience' : 'Pengalaman Kerja'}</div>
            {renderSection("experience")}
            <div className={`${Title}`}>{language === 'en' ? 'My Education' : 'Edukasi Saya'}</div>
            {renderSection("education")}
            <div className={`${Title}`}>{language === 'en' ? 'My Certification' : 'Sertifikasi Saya'}</div>
            {renderSection("certification")}
          </div>
        </div>
      </div>
      <NoiseOverlay />
      <title>About Me</title>
    </div>
  );
};

export default Bio;
