import { useLanguage } from '../data/languageContext.jsx';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleData from "../data/card.js";;
import LanguageToggle from './LanguageToggle.jsx';
import { dropdownButton, dropdownOutter } from '../data/uiStyles.js';

const MobileNavigation = ({specsButton}) => {
  const { language } = useLanguage();
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const handleClick = (menu) => {
    if (menu === "about") {
      navigate("/me");
    } else {
      setOpenMenu(openMenu === menu ? null : menu);
    }
  };

  const socialList = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/salman-setiawan" },
    { name: "Instagram", url: "https://www.instagram.com/eisenflux" },
    { name: "Gmail", url: "mailto:stwnsalmann@gmail.com" },
    { name: "Dribbble", url: "https://dribbble.com/eisenflux" },
  ];
  
  specsButton = 'flex w-fit cursor-pointer h-[40px] items-center px-2.5 md:px-3 hover:bg-[#3E3124] hover:text-[#FED1A1] bg-[#0c0c0c] rounded-lg';

  return (
    <div className='flex justify-between items-center w-full'>
      <div className="flex gap-x-1 text-[14px] font-semibold">
        <button className={`${specsButton}`} onClick={() => handleClick("about")}>
          {language === "en" ? "About Me" : "Tentang Saya"}
        </button>
        <button className={`${specsButton} relative`} onClick={() => handleClick("projects")}>
          {language === "en" ? "Projects" : "Proyek"}
          {openMenu === "projects" && (
            <div className={`${dropdownOutter} top-12 left-0 min-w-[200px]`}>
              {ArticleData.map((article) => (
                <div
                  key={article.id}
                  className={dropdownButton}
                  onClick={() =>
                    article.slug === "bhumi-pemedas"
                      ? window.open("https://bhumipemedas.netlify.app/", "_blank")
                      : navigate(`/article/${article.slug}`)
                  }
                >
                  {article.nav}
                </div>
              ))}
            </div>
          )}
        </button>
        <button className={`${specsButton} relative xl:hidden`} onClick={() => handleClick("socials")}>
          {language === "en" ? "Contacts" : "Kontak"}
          {openMenu === "socials" && (
            <div className={`${dropdownOutter} top-12 left-0 min-w-[200px]`}>
              {socialList.map((item, idx) => (
                <div key={idx} className={dropdownButton} onClick={() => window.open(item.url, "_blank")}>
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </button>
      </div>
      <LanguageToggle />
    </div>
  );
};

export default MobileNavigation;
