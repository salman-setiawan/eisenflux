import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import ArticleData from "../data/article.js"; // ambil semua artikel
import Typewriter from "./animate/Typewriter.jsx";

const Navigation = () => {
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
    { name: "LinkedIn", url: "https://www.linkedin.com/in/username" },
    { name: "Instagram", url: "https://www.instagram.com/username" },
    { name: "Gmail", url: "mailto:username@gmail.com" },
  ];

  return (
    <div>
      <Draggable>
        <div className="relative flex gap-x-1 h-fit text-[14px] font-semibold shadow-lg shadow-black/40">
          {/* draggable icon */}
          <div className="py-2 px-3 bg-[#282828] text-[#ffaa00] text-[20px] font-black flex items-center cursor-move hidden md:block" data-draggable='true'>
            : :
          </div>

          <div className="p-2 bg-[#282828] text-[#ffaa00] text-[20px] font-black flex items-center cursor-move hidden md:block">
            <Typewriter text='enfx.' />
          </div>

          {/* About */}
          <div
            className="py-3 px-3.5 bg-[#282828] flex items-center cursor-pointer"
            onClick={() => handleClick("about")}
            data-clickable='true'
          >
            About Me
          </div>

          {/* Projects */}
          <div
            className="py-3 px-3.5 bg-[#282828] flex items-center cursor-pointer relative"
            onClick={() => handleClick("projects")}
            data-clickable='true'
          >
            Projects
            {openMenu === "projects" && (
              <div className="absolute py-1.5 top-full right-0 md:left-0">
                <div className="bg-[#1e1e1e] text-white min-w-[200px] py-1 shadow-md">
                  {ArticleData.map((article) => (
                    <div
                      key={article.id}
                      className="px-3 py-3 md:py-2 hover:bg-[#333] cursor-pointer"
                      onClick={() => navigate(`/article/${article.id}`)}
                    >
                      / {article.nav}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Socials */}
          <div
            className="py-3 px-3.5 bg-[#282828] flex items-center cursor-pointer relative"
            onClick={() => handleClick("socials")}
            data-clickable='true'
          >
            Socials
            {openMenu === "socials" && (
              <div className="absolute py-1.5 top-full right-0 md:left-0">
                <div className="bg-[#1e1e1e] text-white min-w-[200px] py-1 shadow-md">
                  {socialList.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-3 md:py-2 hover:bg-[#333] cursor-pointer"
                      onClick={() => window.open(item.url, "_blank")}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Navigation;
