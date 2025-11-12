import { useLanguage } from '../data/languageContext.jsx';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleData from "../data/card.js";
import LanguageToggle from './LanguageToggle.jsx';
import { bgBase, containerShape, dropdownButton, dropdownOuter, textHeading3, textBaseSemi, textBase } from '../data/uiStyles.js';
import WorkChip from './WorkChip.jsx';

const Navigation = ({ specsButton, specsNavbar, type, title }) => {
  const { language } = useLanguage();
  const [openMenu, setOpenMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
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
    { name: "Gmail", url: "mailto:salmansetiawan88@gmail.com" },
    { name: "Dribbble", url: "https://dribbble.com/eisenflux" },
  ];

  specsButton = `flex cursor-pointer h-[36px] items-center px-2 hover:bg-[#3D3B38] hover:text-orange-200 ${bgBase} ${containerShape} ${textHeading3} font-medium`;
  specsNavbar = 'fixed top-0 z-10 bg-[#141414] w-full flex justify-between px-4 py-3 items-center';

  let navbarContent;

  switch (type) {

    // --- Type 1: Navbar atas dengan ProfileCard ---
    case "type-1":
      navbarContent = (
        <div className={specsNavbar}>
          <div className="flex items-center gap-x-3">
            <button onClick={() => navigate(-1)} className={specsButton}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="flex gap-x-3 items-center">
              <img src="/bg-bio.webp" loading="lazy" alt="ava" className="h-[40px] rounded-lg cursor-pointer" onClick={() => setIsOpen(true)} />
              <div>
                <div className={`font-semibold ${textHeading3}`}>Salman Setiawan</div>
                <WorkChip color={textBaseSemi} label={language === "en" ? "Open to Work" : "Terbuka untuk Pekerjaan"} />
              </div>
            </div>
            {isOpen && (
              <div className="fixed flex flex-col gap-y-8 inset-0 z-50 bg-black/20 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
                <button aria-label="Close" className={`${textBase} cursor-pointer`} onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
                  {language === 'en' ? 'tap anywhere to close' : 'tekan dimana saja untuk menutup'}
                </button>
                <img src="/bg-bio.webp" alt="ava" className="max-h-[72vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
              </div>
            )}
          </div>
          <LanguageToggle />
        </div>
      );
      break;

    // --- Type 2: Navbar atas dengan judul halaman ---
    case "type-2":
      navbarContent = (
        <div className={specsNavbar}>
          <button onClick={() => navigate(-1)} className={specsButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className={`text-center font-semibold ${textHeading3}`}>{title}</div>
          <LanguageToggle />
        </div>
      );
      break;

    // --- Type 3: Navigasi utama (About, Projects, Contacts) ---
    case "type-3":
      navbarContent = (
        <div className='flex justify-between items-center w-full'>
          <div className="flex gap-x-1">
            <button className={`${specsButton}`} onClick={() => handleClick("about")}>
              {language === "en" ? "About Me" : "Tentang Saya"}
            </button>
            <button className={`${specsButton} relative`} onClick={() => handleClick("projects")}>
              {language === "en" ? "Projects" : "Proyek"}
              {openMenu === "projects" && (
                <div className={`${dropdownOuter} top-11 left-0 min-w-[200px]`}>
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
            <button className={`${specsButton} relative lg:hidden`} onClick={() => handleClick("socials")}>
              {language === "en" ? "Contacts" : "Kontak"}
              {openMenu === "socials" && (
                <div className={`${dropdownOuter} top-11 left-0 min-w-[200px]`}>
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
