import { useLanguage } from '../data/languageContext';
import { backgroundBaseColour, containerCardColour, containerShape, subText } from '../data/uiStyles';

const LanguageToggle = ({segment}) => {
  const { language, toggleLanguage } = useLanguage();

  segment = `z-10 flex h-full w-[36px] items-center justify-center ${subText}`;

  return (
    <div className={`flex items-center ${backgroundBaseColour} ${containerShape}`}>
      <button
        onClick={toggleLanguage}
        className={`flex h-[36px] w-[72px] items-center cursor-pointer ${containerShape}`}
        role="switch"
        aria-checked={language === 'en'}
        aria-label="toggle-language"
      >
        <div className={`absolute h-[28px] w-[28px] ${containerShape} ${containerCardColour} transition-transform duration-200 ${language === 'en' ? 'translate-x-10' : 'translate-x-1'}`}/>
        <div className={segment}> ID </div>
        <div className={segment}> EN </div>
      </button>
    </div>
  );
};

export default LanguageToggle;
