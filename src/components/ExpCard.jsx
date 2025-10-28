import BioData from '../data/bio.js';
import { useLanguage } from '../data/languageContext.jsx';
import Button from './Button.jsx';

const ExpCard = ({maskBlur, maskColor, positionDesktop, positionMobile}) => {
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

  maskBlur = '#202020 0%, #202020 35%, transparent 100%';
  maskColor = '#202020 0%, transparent 80%';
  positionDesktop = 'hidden md:block absolute top-0 bottom-0 right-0 md:w-[640px] lg:w-[800px] xl:w-[470px] pointer-events-none';
  positionMobile = 'absolute block md:hidden bottom-0 left-0 right-0 h-[240px] pointer-events-none';

  return (
    <div className="w-full p-3 rounded-xl border border-neutral-800 relative overflow-hidden md:min-h-[160px] bg-[#202020]">
      <h2 className="font-bold mb-3 text-[#ffaa50]">{language === "en" ? "Work Experience" : "Pengalaman Kerja"}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8">
        {displayedExperiences.map((exp, index) => (
          <div key={exp.uid} className="w-full flex md:flex-col gap-y-2 gap-x-3 relative">
            <p className="text-[12px] font-semibold hidden md:block">
              {exp.dateEnd}
            </p>
            <div className="pt-1.5 md:pt-0 pl-0.5 md:pl-0">
              <div
                className={index === 0 ? "animate-blink rounded-full w-[13px] h-[13px]" : "rounded-full w-[13px] h-[13px]"}
                style={{ backgroundColor: index === 0 ? undefined : '#4C341A' }}
              ></div>
              {index < displayedExperiences.length - 1 && (
                <div
                  className="hidden md:block absolute"
                  style={{ top: 32, left: 13, width: 'calc(100% + 21rem)', borderTop: '2px solid #4C341A' }}
                ></div>
              )}
              {index < displayedExperiences.length - 1 && (
                <div
                  className="block md:hidden absolute"
                  style={{ top: 19, left: 7.5, height: 'calc(100% + 5rem)', borderLeft: '2px solid #4C341A' }}
                ></div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-sm truncate">{exp.title}</h3>
              <p className="text-[13px] truncate">
                {exp.role?.[language] || exp.role?.id}
              </p>
              <p className="text-[13px] block md:hidden">
                {exp.dateEnd}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient color overlay - bottom for mobile, right side for desktop */}
      <div
        className={`${positionMobile}`}
        style={{
          background: `linear-gradient(to top, ${maskColor})`
        }}
      ></div>

      {/* Desktop-specific right side gradient color */}
      <div
        className={`${positionDesktop}`}
        style={{
          background: `linear-gradient(to left, ${maskColor})`
        }}
      ></div>

      {/* Gradient blur overlay - bottom for mobile, right side for desktop */}
      <div
        className={`${positionMobile}`}
        style={{
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          mask: `linear-gradient(to top, ${maskBlur})`, 
          WebkitMask: `linear-gradient(to top, ${maskBlur})`
        }}
      ></div>

      {/* Desktop-specific right side gradient blur */}
      <div
        className={`${positionDesktop}`}
        style={{
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          mask: `linear-gradient(to left, ${maskBlur})`,
          WebkitMask: `linear-gradient(to left, ${maskBlur})`
        }}
      ></div>

      {/* Learn more button */}
      <div className="absolute right-3 bottom-3 md:right-4 z-10 flex flex-col items-end md:flex-row gap-y-1 gap-x-2">
        <Button to='/me' text={language === "en" ? "Learn More" : "Pelajari Lebih Lanjut"} />
        <div className="flex items-end h-[48px]">
          <button onClick={handleDownload} className='flex rounded-lg pb-1 hover:pb-1.5 bg-black w-full'>
            <div className={`bg-red-700 text-white py-1.5 px-2.5 flex gap-x-1.5 w-full cursor-pointer rounded-lg border-3 border-black hover:bg-red-800 font-bold text-[13px] md:text-[14px]`}>
              {language === 'en' ? 'PDF Version' : 'Versi PDF'}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
