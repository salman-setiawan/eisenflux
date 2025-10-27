import { useLanguage } from '../data/languageContext';

const LanguageToggle = ({ className = "" }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className={`flex items-center ${className}`}>
      <button
        onClick={toggleLanguage}
        className="relative inline-flex h-[40px] w-[80px] items-center rounded-lg border-2 border-neutral-800 bg-neutral-800 transition-colors duration-200"
        role="switch"
        aria-checked={language === 'en'}
        aria-label="Toggle language"
      >
        {/* Active Segment Background */}
        <div
          className={`absolute h-[30px] w-[34px] rounded-md bg-neutral-700 transition-transform duration-200 ${
            language === 'en' ? 'translate-x-10' : 'translate-x-0.5'
          }`}
        />
        
        {/* ID Segment */}
        <div
          className={`z-10 flex h-full w-[44px] items-center justify-center text-[14px] font-semibold transition-colors duration-200 ${
            language === 'en' ? 'mb-0.5' : 'font-semibold mb-0.5'
          }`}
        >
          ID
        </div>
        
        {/* EN Segment */}
        <div
          className={`z-10 flex h-full w-[44px] items-center justify-center text-[14px] font-semibold transition-colors duration-200 ${
            language === 'en' ? 'font-semibold mb-0.5' : 'mb-0.5'
          }`}
        >
          EN
        </div>
      </button>
    </div>
  );
};

export default LanguageToggle;
