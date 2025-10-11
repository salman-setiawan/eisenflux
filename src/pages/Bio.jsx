 import { useLanguage } from "../data/languageContext.jsx";
import BioCards from "../components/BioCards.jsx";
import BioData from "../data/bio";
import Notfound from "./404.jsx";
import Typewriter from "../components/animate/Typewriter.jsx";
import NoiseOverlay from "../components/animate/Noise.jsx";

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
      <div key={label} className="flex w-full border-dot bg-black/80 backdrop-blur-md">
        <div className={`flex w-full flex-col`}>{content}</div>
      </div>
    );
  };
  

  return (
    <div className="flex justify-center bg-cover bg-center">
      <div className="hidden lg:flex h-screen items-center w-full justify-center fixed overflow-hidden">
        <div className="text-white/5 text-[40rem] select-none">
          <Typewriter text="enfx." />
        </div>
      </div>
      <div className="flex flex-col place-content-center w-full lg:max-w-[720px] relative">
        <div className="w-full flex justify-end px-4 pt-4">
          <button
            onClick={toggleLanguage}
            className="text-[14px] font-medium underline underline-offset-1 text-[#ffa500]"
          >
            {language === "en" ? "English" : "Bahasa"}
          </button>
        </div>

        {/* scroll layout for all screens */}
        <div className="flex flex-col gap-y-2 p-4">
          {/* image */}
          <div className="w-full h-[24rem] bg-white bg-[url('/bg-bio.webp')] bg-cover bg-center"></div>
          {/* description */}
          <div className="bg-black/80 backdrop-blur-lg p-4 border-dot text-[15px]">{desc[language]}</div>
          {/* experience, education, certification in order */}
          <div className="flex flex-col gap-y-2 w-full">
            {renderSection("experience")}
            {renderSection("education")}
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
