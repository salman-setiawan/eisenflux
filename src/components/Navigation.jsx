import { useLanguage } from '../data/languageContext.jsx';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleData from "../data/card.js";
import Button from './Button.jsx';

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
    { name: "Gmail", url: "mailto:stwnsalmann@gmail.com" },
    { name: "Dribbble", url: "https://dribbble.com/eisenflux" },
  ];
  

  return (
    <div>
      <div className="flex gap-x-1 text-[13px] font-semibold">
        <div className='flex w-fit' onClick={() => handleClick("about")}>
          <Button text={language === "en" ? "About Me" : "Tentang Saya"} />
        </div>
        <div className='flex w-fit relative' onClick={() => handleClick("projects")}>
          <Button text={language === "en" ? "My Projects" : "Proyek Saya"} />
          {openMenu === "projects" && (
            <div className="absolute py-1.5 top-full right-0 rounded-lg z-20">
              <div className="bg-[#1e1e1e] text-white min-w-[200px] py-1 shadow-lg shadow-black/30 rounded-lg border border-neutral-800">
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
                    {article.nav}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className='flex w-fit relative xl:hidden' onClick={() => handleClick("socials")}>
          <Button text={language === "en" ? "My Contacts" : "Kontak Saya"} />
          {openMenu === "socials" && (
            <div className="absolute py-1.5 top-full right-0 rounded-lg z-20">
              <div className="bg-[#1e1e1e] text-white min-w-[200px] py-1 shadow-lg shadow-black/30 rounded-lg border border-neutral-800">
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
