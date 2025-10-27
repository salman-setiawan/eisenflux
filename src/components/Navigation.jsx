import { useLanguage } from '../data/languageContext.jsx';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleData from "../data/card.js";;
import LanguageToggle from './LanguageToggle.jsx';

const MobileNavigation = ({specsButton, specsDropdown1, specsDropdown2}) => {
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
  
  specsButton = 'flex w-fit cursor-pointer h-[40px] items-center pb-0.5 px-3 hover:bg-[#ffaa50]/20 hover:text-[#ffaa50] bg-[#0c0c0c] rounded-lg';
  specsDropdown1 = 'bg-[#141414] min-w-[200px] overflow-hidden shadow-xl shadow-black/40 rounded-lg border border-neutral-800 absolute top-12 left-0 rounded-lg z-20';
  specsDropdown2 = 'px-3 py-3 hover:bg-[#333] cursor-pointer text-white text-start';

  return (
    <div className='flex justify-between items-center w-full'>
      <div className="flex gap-x-1 text-[14px] font-semibold">
        <button className={`${specsButton}`} onClick={() => handleClick("about")}>
          {language === "en" ? "About Me" : "Tentang Saya"}
        </button>
        <button className={`${specsButton} relative`} onClick={() => handleClick("projects")}>
          {language === "en" ? "Projects" : "Proyek"}
          {openMenu === "projects" && (
            <div className={`${specsDropdown1}`}>
              {ArticleData.map((article) => (
                <div
                  key={article.id}
                  className={`${specsDropdown2}`}
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
            <div className={`${specsDropdown1}`}>
              {socialList.map((item, idx) => (
                <div key={idx} className={`${specsDropdown2}`} onClick={() => window.open(item.url, "_blank")}>
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
