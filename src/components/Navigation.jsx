import { useLanguage } from '../data/languageContext.jsx';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleData from "../data/card.js";
import LanguageToggle from './LanguageToggle.jsx';
import { dropdownButton, dropdownOutter } from '../data/uiStyles.js';
import ProfileCard from './ProfileCard.jsx';

const Navigation = ({ specsButton, type, title }) => {
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

  specsButton = 'flex w-fit cursor-pointer h-[36px] items-center px-2.5 hover:bg-[#3E3124] hover:text-[#FED1A1] bg-[#0c0c0c] rounded-lg';

  let navbarContent;

  switch (type) {
    // --- Type 1: Navbar atas dengan ProfileCard ---
    case "type-1":
      navbarContent = (
        <div className="fixed top-0 z-10 bg-[#141414] w-full flex justify-between px-4 py-3 items-center">
          <div className="flex items-center gap-x-4">
            <button 
              onClick={() => navigate(-1)}
              className={specsButton}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <ProfileCard type="type-3" />
          </div>
          <LanguageToggle />
        </div>
      );
      break;

    // --- Type 2: Navbar atas dengan judul halaman ---
    case "type-2":
      navbarContent = (
        <div className="fixed top-0 z-10 bg-[#141414] w-full flex justify-between py-3 px-5 items-center">
          <button 
            onClick={() => navigate(-1)}
            className={specsButton}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="text-center font-semibold text-[13px]">
            {title}
          </div>
          <LanguageToggle />
        </div>
      );
      break;

    // --- Type 3: Navigasi utama (About, Projects, Contacts) ---
    case "type-3":
      navbarContent = (
        <div className='flex justify-between items-center w-full'>
          <div className="flex gap-x-1 text-[14px] font-medium">
            <button className={`${specsButton}`} onClick={() => handleClick("about")}>
              {language === "en" ? "About Me" : "Tentang Saya"}
            </button>

            <button className={`${specsButton} relative`} onClick={() => handleClick("projects")}>
              {language === "en" ? "Projects" : "Proyek"}
              {openMenu === "projects" && (
                <div className={`${dropdownOutter} top-11 left-0 min-w-[200px]`}>
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
                <div className={`${dropdownOutter} top-11 left-0 min-w-[200px]`}>
                  {socialList.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={dropdownButton} 
                      onClick={() => window.open(item.url, "_blank")}
                    >
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
      break;

    default:
      return null; // jika type tidak valid
  }

  return <>{navbarContent}</>;
};

export default Navigation;
