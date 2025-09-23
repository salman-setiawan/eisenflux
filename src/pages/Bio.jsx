import { useLanguage } from '../data/languageContext.jsx';
import Experience from "../components/bio/Experience.jsx";
import BioData from "../data/bio";
import Notfound from './404.jsx';
import Education from '../components/bio/Education.jsx';
import Certification from '../components/bio/Certification.jsx';

const Bio = () => {
  const { language, toggleLanguage } = useLanguage();
  console.log(language, toggleLanguage);

  if (language === undefined || toggleLanguage === undefined) {
    return <Notfound />;
  }

  const { desc, experience, education, certification } = BioData[0];

  return (
    <div className='flex justify-center'>
      <div className="flex flex-col place-content-center w-full md:max-w-[1200px]">
        <div className="w-full flex justify-end px-4 pt-4">
          <button onClick={toggleLanguage} className="text-[14px] h-fit font-medium underline underline-offset-1 text-[#ffa500]">
            {language === "en" ? "English" : "Bahasa"}
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 p-4">
          <div className="flex flex-col gap-y-4 lg:max-w-[400px]">
            <div className="w-full h-32 bg-white">x</div>
            <div className="uppercase text-[14px]">{desc[language]}</div>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            <div className="flex w-full border-dot">
              <div className="max-w-[42px] border-dot-r">
                <div className="p-2 uppercase font-semibold rotate-90 origin-bottom-left text-[#ffaa00]">experience</div>
              </div>
              <div className="flex w-full flex-col pb-24">
                {experience.map((exp) => (
                  <Experience
                    key={exp.uid}
                    title={exp.title}
                    role={exp.role[language]}
                    dateStart={exp.dateStart}
                    dateEnd={exp.dateEnd}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-full border-dot">
              <div className="max-w-[42px] border-dot-r">
                <div className="p-2 uppercase font-semibold rotate-90 origin-bottom-left text-[#ffaa00]">education</div>
              </div>
              <div className="flex w-full flex-col pb-48">
                {education.map((edu) => (
                  <Education
                    key={edu.uid}
                    title={edu.title[language]}
                    role={edu.role[language]}
                    dateStart={edu.dateStart}
                    dateEnd={edu.dateEnd}
                  />
                ))}
              </div>
            </div>
          <div className="flex w-full border-dot">
              <div className="max-w-[42px] border-dot-r">
                <div className="p-2 uppercase font-semibold rotate-90 origin-bottom-left text-[#ffaa00]">certification</div>
              </div>
              <div className="flex w-full flex-col pb-24">
                {certification.map((cert) => (
                  <Certification
                    key={cert.uid}
                    title={cert.title}
                    company={cert.company}
                    date={cert.date}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
