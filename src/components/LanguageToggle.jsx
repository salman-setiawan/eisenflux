import { useLanguage } from '../data/languageContext';

const LanguageToggle = ({segment, lang}) => {
  const { language, toggleLanguage } = useLanguage();

  segment = 'z-10 flex h-full w-[40px] items-center justify-center text-[13px] md:text-[14px] font-semibold transition-colors duration-200';
  lang = 'font-semibold md:mb-0.5';

  return (
    <div className={`flex items-center bg-[#0c0c0c] rounded-lg`}>
      <button
        onClick={toggleLanguage}
        className="relative inline-flex h-[40px] w-[80px] items-center transition-colors duration-200 cursor-pointer rounded-lg"
        role="switch"
        aria-checked={language === 'en'}
        aria-label="toggle-language"
      >
        {/* Active Segment Background */}
        <div className={`absolute h-[32px] w-[32px] rounded-md bg-neutral-800 transition-transform duration-200 ${language === 'en' ? 'translate-x-11' : 'translate-x-1'}`}/>
        
        {/* ID Segment */}
        <div className={`${segment} ${language === 'en' ? lang : lang}`}> ID </div>

        {/* EN Segment */}
        <div className={`${segment} ${language === 'en' ? lang : lang}`}> EN </div>
      </button>
    </div>
  );
};

export default LanguageToggle;
