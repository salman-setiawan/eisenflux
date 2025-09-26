import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";

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

  const projectList = ["eduworks", "edufams", "another_island"];
  const socialList = ["linkedIn", "instagram", "gmail"];

  return (
    <div>
      <Draggable>
        <div className="relative flex gap-x-1 h-fit text-[14px] font-semibold">
          <div className="py-2 px-3 bg-[#282828] text-[#ffaa00] text-[20px] font-black flex items-center cursor-move" data-draggable="true">
            : :
          </div>
          <div className="py-2 px-3 bg-[#282828] flex items-center cursor-pointer" onClick={() => handleClick("about")} data-clickable="true"> About Me </div>
          <div className="py-2 px-3 bg-[#282828] flex items-center cursor-pointer relative" onClick={() => handleClick("projects")} data-clickable="true">
            Projects
            {openMenu === "projects" && ( 
              <div className="absolute py-1 top-full left-0">
                <div className="bg-[#1e1e1e] text-white min-w-[150px] shadow-md">
                  {projectList.map((item, idx) => (
                    <div key={idx} className="px-3 py-2 hover:bg-[#333] cursor-pointer"> {item} </div>
                  ))} 
                </div> 
              </div>
            )}
          </div>
          <div className="py-2 px-3 bg-[#282828] flex items-center cursor-pointer relative" onClick={() => handleClick("socials")} data-clickable="true">
            Socials
            {openMenu === "socials" && (
              <div className="absolute py-1 top-full left-0">  
                <div className="bg-[#1e1e1e] text-white min-w-[150px] shadow-md">
                  {socialList.map((item, idx) => (
                    <div key={idx} className="px-3 py-2 hover:bg-[#333] cursor-pointer"> {item} </div>
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
