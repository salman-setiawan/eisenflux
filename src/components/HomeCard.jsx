import BioData from '../data/bio.js';
import { useLanguage } from '../data/languageContext.jsx';
import Button from './Button.jsx';
import { cardStyles, buttonDefault, buttonPdf, textSubSemi, textHeading3, textSmall, textParagraph, textHighlighted } from '../data/uiStyles.js';
import WorkChip from './WorkChip.jsx';

const HomeCard = ({maskBlur, maskColor, positionOne, dotExp, borderExp}) => {
  const { language } = useLanguage();
  const experienceData = BioData[0].experience;
  const displayedExperiences = experienceData.slice(0, 3);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv_salman_setiawan.pdf';
    link.download = 'cv_salman_setiawan.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  dotExp = 'rounded-full w-[13px] h-[13px]';
  borderExp = '2px solid #4C341A';
  maskBlur = '#202020 0%, #202020 35%, transparent 100%';
  maskColor = '#202020 0%, transparent 80%';
  positionOne = 'absolute bottom-0 left-0 right-0 h-[240px] pointer-events-none';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
      <div className={`${cardStyles} gap-3`}>
        <WorkChip label={language === "en" ? "Open to Work" : "Terbuka untuk Pekerjaan"} />
        <div className={textParagraph}>
          {language === "en" ? "Hola! my name is " : "Hola! namaku "}
          <span className={textHighlighted}>Salman</span>
          {language === "en" ? ", a Bachelor of Informatics graduate specializing in " : ", lulusan Informatika dengan spesialisasi "}
          <span className={textHighlighted}>UI/UX Design</span>
          {language === "en" ? " and currently based in " : " dan saat ini berdomisili di "}
          <span className={textHighlighted}>Balikpapan - Indonesia 🇮🇩</span>
        </div>
        <div className={textParagraph}>
          {language === "en" ? "Experienced in creating intuitive digital experiences, translating complex problems into simple, meaningful, and impactful interfaces for both users and your business." : "Memiliki pengalaman dalam menciptakan pengalaman digital yang intuitif, menerjemahkan permasalahan kompleks menjadi antarmuka yang sederhana, bermakna, dan berdampak nyata bagi pengguna dan bisnis anda."}
        </div>
      </div>
      <div className={`${cardStyles} relative overflow-clip`}>
        <h2 className={`${textSmall} mb-3`}>{language === "en" ? "Work Experience :" : "Pengalaman Kerja :"}</h2>
        <div className="grid grid-cols-1 gap-y-4">
          {displayedExperiences.map((exp, index) => (
            <div key={exp.uid} className="w-full flex gap-y-2 gap-x-3 relative">
              <div className="pt-1 pl-0.5">
                <div className={index === 0 ? `${dotExp} animate-blink` : `${dotExp} bg-[#4C341A]`}></div>
                {index < displayedExperiences.length - 1 && (
                  <div className={`absolute`} style={{ top: 17, left: 7.5, height: 'calc(100% + 5rem)', borderLeft: borderExp }}></div>
                )}
              </div>
              <div>
                <h3 className={textHeading3}>{exp.title} </h3>
                <p className={textSubSemi}> {exp.role?.[language] || exp.role?.id} </p>
                <p className={textSubSemi}> {exp.dateEnd} </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient color overlay */}
        <div
          className={`${positionOne}`}
          style={{
            background: `linear-gradient(to top, ${maskColor})`
          }}
        ></div>

        {/* Gradient blur overlay */}
        <div
          className={`${positionOne}`}
          style={{
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)',
            mask: `linear-gradient(to top, ${maskBlur})`, 
            WebkitMask: `linear-gradient(to top, ${maskBlur})`
          }}
        ></div>

        {/* Learn more button */}
        <div className="absolute right-3 bottom-3 md:right-4 z-10 flex flex-col items-end gap-y-1">
          <Button to='/me' text={language === "en" ? "See More" : "Lihat Lebih Lanjut"} style={buttonDefault} />
          <Button text={language === "en" ? "PDF Version" : "Versi PDF"} onClick={handleDownload} style={buttonPdf} />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
