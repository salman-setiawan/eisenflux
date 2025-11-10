import BioData from '../data/bio.js';
import { useLanguage } from '../data/languageContext.jsx';
import Button from './Button.jsx';
import { cardStyles, defaultButton, pdfButton } from '../data/uiStyles.js';

const ExpCard = ({maskBlur, maskColor, positionTwo, positionOne, dotExp, borderExp, objectVisibleOne, objectVisibleTwo}) => {
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
  objectVisibleOne = 'hidden md:block xl:hidden';
  objectVisibleTwo = 'block md:hidden xl:block';
  positionTwo = 'absolute hidden md:block xl:hidden top-0 bottom-0 right-0 md:w-[640px] lg:w-[800px] pointer-events-none';
  positionOne = 'absolute block md:hidden xl:block bottom-0 left-0 right-0 h-[240px] pointer-events-none';

  return (
    <div className={`${cardStyles} relative overflow-clip`}>
      <h2 className="font-medium text-[12px] mb-3">{language === "en" ? "Work Experience :" : "Pengalaman Kerja :"}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 gap-y-4 gap-x-8">
        {displayedExperiences.map((exp, index) => (
          <div key={exp.uid} className="w-full flex md:flex-col xl:flex-row gap-y-2 gap-x-3 relative">
            <p className={`${objectVisibleOne} text-[12px]`}>
              {exp.dateEnd}
            </p>
            <div className="pt-1 md:pt-0 xl:pt-1 pl-0.5 md:pl-0 xl:pl-0.5">
              <div
                className={index === 0 ? `${dotExp} animate-blink` : dotExp}
                style={{ backgroundColor: index === 0 ? undefined : '#4C341A' }}
              ></div>
              {index < displayedExperiences.length - 1 && (
                <div
                  className={`${objectVisibleOne} absolute`}
                  style={{ top: 32, left: 13, width: 'calc(100% + 21rem)', borderTop: borderExp }}
                ></div>
              )}
              {index < displayedExperiences.length - 1 && (
                <div
                  className={`${objectVisibleTwo} absolute`}
                  style={{ top: 17, left: 7.5, height: 'calc(100% + 5rem)', borderLeft: borderExp }}
                ></div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-[14px] truncate">{exp.title}</h3>
              <p className="text-[12px] truncate">
                {exp.role?.[language] || exp.role?.id}
              </p>
              <p className={`${objectVisibleTwo} text-[12px]`}>
                {exp.dateEnd}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient color overlay - bottom for mobile, right side for desktop */}
      <div
        className={`${positionOne}`}
        style={{
          background: `linear-gradient(to top, ${maskColor})`
        }}
      ></div>

      {/* Desktop-specific right side gradient color */}
      <div
        className={`${positionTwo}`}
        style={{
          background: `linear-gradient(to left, ${maskColor})`
        }}
      ></div>

      {/* Gradient blur overlay - bottom for mobile, right side for desktop */}
      <div
        className={`${positionOne}`}
        style={{
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          mask: `linear-gradient(to top, ${maskBlur})`, 
          WebkitMask: `linear-gradient(to top, ${maskBlur})`
        }}
      ></div>

      {/* Desktop-specific right side gradient blur */}
      <div
        className={`${positionTwo}`}
        style={{
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          mask: `linear-gradient(to left, ${maskBlur})`,
          WebkitMask: `linear-gradient(to left, ${maskBlur})`
        }}
      ></div>

      {/* Learn more button */}
      <div className="absolute right-3 bottom-3 md:right-4 z-10 flex flex-col items-end md:flex-row gap-y-1 gap-x-2">
        <Button to='/me' text={language === "en" ? "See More" : "Lihat Lebih Lanjut"} style={defaultButton} />
        <Button text={language === "en" ? "PDF Version" : "Versi PDF"} onClick={handleDownload} style={pdfButton} />
      </div>
    </div>
  );
};

export default ExpCard;
