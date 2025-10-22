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
            <div className="w-full h-[20rem] md:h-full md:max-w-[120px] bg-white bg-[url('/bg-bio.webp')] bg-cover bg-center">
              <div className="flex h-full items-end md:hidden p-4">
                <WorkChip label={language === "en" ? "Open to Work" : "Terbuka dalam Pekerjaan"} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="hidden md:block">
                <WorkChip label={language === "en" ? "Open to Work" : "Terbuka dalam Pekerjaan"} />
              </div>
              <div className="bg-black/80 space-y-4 py-4 pl-4 pr-6 md:pr-8 text-justify border-dot flex flex-col justify-center">
                <div className="">
                  {language === 'en' ? "I'm a designer who believes that great design happens where empathy meets logic. My journey into UX started with a simple curiosity:" : 'Saya seorang desainer yang percaya bahwa desain terbaik lahir dari perpaduan empati dan logika. Perjalanan saya di dunia UX berawal dari rasa penasaran sederhana:'}
                </div>
                <div className="text-[#ffaa50] font-semibold py-2 text-[18px] text-start">
                  {language === 'en' ? '"Why are some apps so easy to use, while others feel frustrating and confusing?"' : '"kenapa ada aplikasi yang terasa mudah banget saat digunakan, sementara yang lain bikin frustrasi dan kebingungan?"'}
                </div>
                <div className="">
                  {language === 'en' ? "Since then, I've been motivated to keep creating digital experiences that are intuitive, human-centered, and truly meaningful." : 'Sejak itu, saya termotivasi untuk terus mencoba menciptakan pengalaman digital yang intuitif, manusiawi, dan benar-benar bermanfaat.'}
                </div>
                <div className=''>
                  {language === 'en' ? "I enjoy turning complex problems into simple, meaningful solutions through research, collaboration, and continuous iteration." : 'Saya suka memecahkan masalah kompleks menjadi solusi yang sederhana dan bermakna lewat riset, kolaborasi, dan banyak iterasi.'}
                </div>
                <div className=''>
                  {language === 'en' ? "I also love working with cross-functional teams to build products that are not only visually appealing but also effective and valuable for their users." : 'Saya juga menikmati bekerja dengan tim lintas fungsi untuk membangun produk yang tak hanya indah secara visual, tapi juga efektif untuk penggunanya.'}
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
