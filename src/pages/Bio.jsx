 import { useLanguage } from "../data/languageContext.jsx";
import BioCards from "../components/BioCards.jsx";
import BioData from "../data/bio";
import Notfound from "./404.jsx";
import Typewriter from "../components/animate/Typewriter.jsx";
import NoiseOverlay from "../components/animate/Noise.jsx";
import LanguageToggle from "../components/LanguageToggle.jsx";

const Bio = () => {
  const { language, toggleLanguage } = useLanguage();

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
      <div className="flex flex-col place-content-center w-full lg:max-w-[720px] relative">
        <div className="w-full flex justify-end px-4 pt-4">
          <LanguageToggle />
        </div>

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
