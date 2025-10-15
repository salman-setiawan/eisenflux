import { useLanguage } from '../data/languageContext';

const LanguageToggle = ({ className = "" }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="text-[13px] text-gray-400 font-semibold">ID</span>
      <button
        onClick={toggleLanguage}
        className={`border-2 border-black relative inline-flex h-[22px] w-[40px] items-center rounded-full transition-colors duration-200 ease-in-out ${
          language === 'en' ? 'bg-[#ffa500]' : 'bg-neutral-600'
        }`}
        role="switch"
        aria-checked={language === 'en'}
        aria-label="Toggle language"
      >
        <span
          className={`inline-block h-[14px] w-[14px] transform rounded-full transition-transform duration-200 ease-in-out ${
            language === 'en' ? 'translate-x-5 bg-black' : 'translate-x-0.5 bg-white'
          }`}
        />
      </button>
      <span className="text-[13px] text-gray-400 font-semibold">EN</span>
    </div>
  );
};

export default LanguageToggle;
