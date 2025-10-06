import { useLanguage } from '../data/languageContext.jsx';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import ArticleData from "../data/card.js";
import Typewriter from "./animate/Typewriter.jsx";

const Navigation = () => {
  const { language } = useLanguage();

  const [openMenu, setOpenMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // kelas umum untuk menu item
  const menuClass =
    "w-full md:w-fit py-2.5 px-3.5 bg-[#282828] flex items-center cursor-pointer select-none hover:hover:bg-[#ffaa00] hover:hover:text-black";

  return (
    <div>
      <Draggable disabled={isMobile} handle=".drag-handle">
        <div className="relative flex flex-col gap-y-1 h-fit">
          <div className="flex gap-x-1 text-[13px] md:text-[14px] font-semibold shadow-md md:shadow-lg shadow-black/30 md:shadow-black/40">
            <div
              className="drag-handle px-3 bg-[#282828] text-[#ffaa00] text-[18px] font-black md:flex items-center cursor-move hidden select-none"
              data-draggable="true"
            >
              : :
            </div>
            <div className="p-2 bg-[#282828] text-[18px] font-black items-center hidden md:flex select-none">
              <Typewriter text="enfx." />
            </div>
            <div
              className={menuClass}
              onClick={() => handleClick("about")}
              data-clickable="true"
            >
              About Me
            </div>
            <div className={`${menuClass} relative`} onClick={() => handleClick("projects")} data-clickable="true">
              Projects
              {openMenu === "projects" && (
                <div className="absolute py-1.5 top-full right-0 md:left-0">
                  <div className="bg-[#1e1e1e] text-white min-w-[200px] py-1 shadow-md">
                    {ArticleData.map((article) => (
                      <div
                        key={article.id}
                        className="px-3 py-3 md:py-2 hover:bg-[#333] cursor-pointer"
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
              Socials
              {openMenu === "socials" && (
                <div className="absolute py-1.5 top-full right-0 md:left-0">
                  <div className="bg-[#1e1e1e] text-white min-w-[200px] py-1 shadow-md">
                    {socialList.map((item, idx) => (
                      <div key={idx} className="px-3 py-3 md:py-2 hover:bg-[#333] cursor-pointer" onClick={() => window.open(item.url, "_blank")}>
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="py-0.5 px-1 bg-black/40 w-fit text-[12px] text-[#ffaa00] hidden md:block font-medium">
            {language === "en" ? "tap the orange-dotted box to drag navigation" : "tekan kotak dengan titik-oranye untuk menyeret navigasi"}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Navigation;
