import { useLanguage } from '../data/languageContext';
import { bgBase, containerCard, containerShape, textSub } from '../data/uiStyles';

const LanguageToggle = ({segment}) => {
  const { language, toggleLanguage } = useLanguage();

  segment = `z-10 flex h-full w-[36px] items-center justify-center ${textSub}`;

  return (
    <div className={`flex items-center ${bgBase} ${containerShape}`}>
      <button
        onClick={toggleLanguage}
        className={`flex h-[36px] w-[72px] items-center cursor-pointer ${containerShape}`}
        role="switch"
        aria-checked={language === 'en'}
        aria-label="toggle-language"
      >
        <div className={`absolute h-[28px] w-[28px] ${containerShape} ${containerCard} transition-transform duration-200 ${language === 'en' ? 'translate-x-10' : 'translate-x-1'}`}/>
        <div className={segment}> ID </div>
        <div className={segment}> EN </div>
      </button>
    </div>
  );
};

export default LanguageToggle;
