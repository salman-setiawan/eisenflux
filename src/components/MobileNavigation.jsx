import { useLanguage } from '../data/languageContext.jsx';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleData from "../data/card.js";

const MobileNavigation = () => {
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
    { name: "Gmail", url: "mailto:username@gmail.com" },
  ];

  // kelas umum untuk menu item mobile
  const menuClass =
    "w-full py-2.5 px-3.5 bg-[#282828] flex items-center cursor-pointer select-none hover:hover:bg-[#ffaa00] hover:hover:text-black";

  return (
    <div>
      <div className="flex gap-x-1 text-[13px] font-semibold shadow-md shadow-black/30">
        <div className={menuClass} onClick={() => handleClick("about")} data-clickable="true">
          {language === "en" ? "About Me" : "Tentang Saya"}
        </div>
        <div className={`${menuClass} relative`} onClick={() => handleClick("projects")} data-clickable="true">
          {language === "en" ? "Projects" : "Proyek"}
          {openMenu === "projects" && (
            <div className="absolute py-1.5 top-full right-0">
              <div className="bg-[#1e1e1e] text-white min-w-[200px] py-1 shadow-md">
                {ArticleData.map((article) => (
                  <div
                    key={article.id}
                    className="px-3 py-3 hover:bg-[#333] cursor-pointer"
                    onClick={() =>
                      article.slug === "bhumi-pemedas"
                        ? window.open("https://bhumipemedas.netlify.app/", "_blank")
                        : navigate(`/article/${article.slug}`)
                    }
                  >
                    / {article.nav}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className={`${menuClass} relative`} onClick={() => handleClick("socials")} data-clickable="true">
          {language === "en" ? "Socials" : "Sosial"}
          {openMenu === "socials" && (
            <div className="absolute py-1.5 top-full right-0">
              <div className="bg-[#1e1e1e] text-white min-w-[200px] py-1 shadow-md">
                {socialList.map((item, idx) => (
                  <div key={idx} className="px-3 py-3 hover:bg-[#333] cursor-pointer" onClick={() => window.open(item.url, "_blank")}>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
