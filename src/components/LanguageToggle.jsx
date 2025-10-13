import { useLanguage } from '../data/languageContext';

const LanguageToggle = ({ className = "" }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <span className="text-[13px] text-gray-400 font-semibold">ID</span>
      <button
        onClick={toggleLanguage}
        className={`relative inline-flex h-[20px] w-[42px] items-center rounded-full transition-colors duration-200 ease-in-out ${
          language === 'en' ? 'bg-[#ffa500]' : 'bg-neutral-600'
        }`}
        role="switch"
        aria-checked={language === 'en'}
        aria-label="Toggle language"
      >
        <span
          className={`inline-block h-[14px] w-[14px] transform rounded-full transition-transform duration-200 ease-in-out ${
            language === 'en' ? 'translate-x-6 bg-black' : 'translate-x-1 bg-white'
          }`}
        />
      </button>
      <span className="text-[13px] text-gray-400 font-semibold">EN</span>
    </div>
  );
};

export default LanguageToggle;
