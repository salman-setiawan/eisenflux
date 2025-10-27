import { useLanguage } from '../data/languageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className={`flex items-center border border-neutral-800 bg-[#202020] rounded-lg`}>
      <button
        onClick={toggleLanguage}
        className="relative inline-flex h-[40px] w-[80px] items-center transition-colors duration-200"
        role="switch"
        aria-checked={language === 'en'}
        aria-label="Toggle language"
      >
        {/* Active Segment Background */}
        <div
          className={`absolute h-[32px] w-[32px] rounded-md bg-neutral-700 transition-transform duration-200 ${
            language === 'en' ? 'translate-x-11' : 'translate-x-1'
          }`}
        />
        
        {/* ID Segment */}
        <div
          className={`z-10 flex h-full w-[40px] items-center justify-center text-[13px] md:text-[14px] font-semibold transition-colors duration-200 ${
            language === 'en' ? 'md:mb-0.5' : 'font-semibold md:mb-0.5'
          }`}
        >
          ID
        </div>
        
        {/* EN Segment */}
        <div
          className={`z-10 flex h-full w-[40px] items-center justify-center text-[13px] md:text-[14px] font-semibold transition-colors duration-200 ${
            language === 'en' ? 'font-semibold md:mb-0.5' : 'md:mb-0.5'
          }`}
        >
          EN
        </div>
      </button>
    </div>
  );
};

export default LanguageToggle;
