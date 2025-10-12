import { useLanguage } from '../data/languageContext.jsx';
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import ArticleData from "../data/card.js";
import Typewriter from "./animate/Typewriter.jsx";

const DesktopNavigation = () => {
  const { language } = useLanguage();
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();
  const dragRef = useRef(null);

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

  // kelas umum untuk menu item desktop
  const menuClass =
    "w-fit py-2.5 px-3.5 bg-[#282828] flex items-center cursor-pointer select-none hover:hover:bg-[#ffaa00] hover:hover:text-black";

  return (
    <div>
      <Draggable handle=".drag-handle" nodeRef={dragRef}>
        <div ref={dragRef} className="relative flex flex-col gap-y-1">
          <div className="flex gap-x-1 text-[14px] font-semibold shadow-lg shadow-black/40">
            <div
              className="drag-handle px-3 bg-[#282828] text-[#ffaa00] text-[25px] pb-0.5 font-black flex items-center cursor-move select-none"
              data-draggable="true">
              ::
            </div>
            <div className="p-2 bg-[#282828] text-[18px] font-black items-center select-none">
              <Typewriter className='flex px-2' text="enfx." />
            </div>
            <div className={menuClass} onClick={() => handleClick("about")} data-clickable="true">
            {language === "en" ? "About Me" : "Tentang Saya"}
            </div>
            <div className={`${menuClass} relative`} onClick={() => handleClick("projects")} data-clickable="true">
              {language === "en" ? "Projects" : "Proyek"}
              {openMenu === "projects" && (
                <div className="absolute py-1.5 top-full left-0 rounded-lg">
                  <div className="bg-[#1e1e1e] text-white min-w-[200px] py-1 shadow-lg shadow-black/30 rounded-lg">
                    {ArticleData.map((article) => (
                      <div
                        key={article.id}
                        className="px-3 py-2 hover:bg-[#333] cursor-pointer"
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
                <div className="absolute py-1.5 top-full left-0 rounded-lg">
                  <div className="bg-[#1e1e1e] text-white min-w-[200px] py-1 shadow-lg shadow-black/30 rounded-lg">
                    {socialList.map((item, idx) => (
                      <div key={idx} className="px-3 py-2 hover:bg-[#333] cursor-pointer" onClick={() => window.open(item.url, "_blank")}>
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="py-0.5 px-2 bg-[#141414]/90 w-fit text-[12px] text-[#ffaa00] font-medium">
            {language === "en" ? "tap the orange-dotted box to drag navigation" : "tekan kotak dengan titik-oranye untuk menyeret navigasi"}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default DesktopNavigation;
