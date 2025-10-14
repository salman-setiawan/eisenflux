import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../data/languageContext.jsx";
import BioCards from "../components/BioCards.jsx";
import BioData from "../data/bio";
import Notfound from "./404.jsx";
import Typewriter from "../components/animate/Typewriter.jsx";
import NoiseOverlay from "../components/animate/Noise.jsx";
import LanguageToggle from "../components/LanguageToggle.jsx";
import Footnote from '../components/Footnote.jsx';
import WorkChip from '../components/WorkChip.jsx';

const Bio = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

    const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv_salman_setiawan.pdf';
    link.download = 'cv_salman_setiawan.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!language) return <Notfound />;

  const { experience, education, certification } = BioData[0];
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
        <div className="text-center font-semibold text-[13px]">{language === "en" ? "About Me" : "Tentang Saya  "}</div>
        <LanguageToggle />
      </div>
      <div className="flex flex-col place-content-center w-full md:max-w-[720px] pt-14 pb-24 relative">
        <div className="flex flex-col gap-y-2 p-4">
          <div className="flex flex-col md:flex-row gap-y-4 gap-x-5">
            <div className="w-full h-[20rem] md:h-[16rem] md:max-w-[160px] bg-white bg-[url('/bg-bio.webp')] bg-cover bg-center">
              <div className="flex h-full items-end md:hidden p-4">
                <WorkChip label={language === "en" ? "Open to Work" : "Terbuka dalam Pekerjaan"} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="hidden md:block">
                <WorkChip label={language === "en" ? "Open to Work" : "Terbuka dalam Pekerjaan"} />
              </div>
              <div className="bg-black/80 p-4 border-dot gap-y-4 md:gap-y-6 flex flex-col justify-center">
                <div>
                  {language === 'en' ? "I'm a Bachelor of Informatics graduate specializing in " : 'Pengalaman Kerja '}
                  <span className="text-[#ffaa50] font-semibold">UI/UX Design.</span>
                  {language === 'en' ? " My method and focus lies in crafting human-centered digital experiences through research-driven design into intuitive, purposeful interfaces." : 'Pengalaman Kerja'}
                </div>
                <div>
                  {language === 'en' ? "I believe great design begins with understanding what users need before deciding how things should look. I approach every project through curiosity, data, and feedback." : 'Pengalaman Kerja'}
                </div>
              </div>
            </div>
          </div>
          {/* experience, education, certification in order */}
          <div className="space-y-2 w-full">
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
      <div className="fixed bottom-0 w-full bg-[#141414] py-1.5" style={{ zIndex: 1 }}>
        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-y-2 w-full max-w-[720px] px-4 pt-1 pb-3">
            <div className="flex items-end h-[48px]">
              <button onClick={handleDownload} className='flex rounded-lg pb-1 hover:pb-1.5 bg-black w-full'>
                <div className={`bg-red-500 text-white py-1.5 px-2.5 flex gap-x-1.5 w-full cursor-pointer rounded-lg border-3 border-black hover:bg-red-700 font-bold text-[13px] md:text-[14px]`}>
                  {language === 'en' ? 'PDF Version Here' : 'Versi PDF Disini'}
                </div>
              </button>
            </div>
          </div>
        </div>
        <Footnote />
      </div>
    </div>
  );
};

export default Bio;
