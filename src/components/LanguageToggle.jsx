import { useLanguage } from '../data/languageContext';

const LanguageToggle = ({segment, lang}) => {
  const { language, toggleLanguage } = useLanguage();

  segment = 'z-10 flex h-full w-[36px] items-center justify-center';
  lang = 'text-[12px] font-medium';

  return (
    <div className={`flex items-center bg-[#0c0c0c] rounded-lg`}>
      <button
        onClick={toggleLanguage}
        className="relative inline-flex h-[36px] w-[72px] items-center transition-colors duration-200 cursor-pointer rounded-lg"
        role="switch"
        aria-checked={language === 'en'}
        aria-label="toggle-language"
      >
        {/* Active Segment Background */}
        <div className={`absolute h-[28px] w-[28px] rounded-md bg-neutral-800 transition-transform duration-200 ${language === 'en' ? 'translate-x-10' : 'translate-x-1'}`}/>
        
        {/* ID Segment */}
        <div className={`${segment} ${language === 'en' ? lang : lang}`}> ID </div>

        {/* EN Segment */}
        <div className={`${segment} ${language === 'en' ? lang : lang}`}> EN </div>
      </button>
    </div>
  );
};

export default LanguageToggle;
