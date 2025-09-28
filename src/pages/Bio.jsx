import { useState } from "react";
import { useLanguage } from "../data/languageContext.jsx";
import Experience from "../components/bio/Experience.jsx";
import Education from "../components/bio/Education.jsx";
import Certification from "../components/bio/Certification.jsx";
import BioData from "../data/bio";
import Notfound from "./404.jsx";
import Draggable from "react-draggable";
import Typewriter from "../components/animate/Typewriter.jsx";

const sectionMap = {
  experience: (item, lang) => <Experience key={item.uid} {...item} role={item.role[lang]} />,
  education: (item, lang) => <Education key={item.uid} {...item} title={item.title[lang]} role={item.role[lang]} />,
  certification: (item) => <Certification key={item.uid} {...item} />,
};

const paddingMap = { education: "pb-48", certification: "pb-24", experience: "pb-24" };

const randomPosition = (maxX = 712, maxY = 462, step = 80) => {
  const randX = Math.round((Math.random() * maxX) / step) * step;
  const randY = Math.round((Math.random() * maxY) / step) * step;
  return { x: randX, y: randY };
};

const Bio = () => {
  const { language, toggleLanguage } = useLanguage();

  const [positions, setPositions] = useState({ bioImage: randomPosition(), bioDesc: randomPosition(), education: randomPosition(), certification: randomPosition(), experience: randomPosition() });

  const [zIndexes, setZIndexes] = useState({ bioImage: 1, bioDesc: 1, education: 1, certification: 1, experience: 1 });

  const [maxZ, setMaxZ] = useState(1);

  if (!language) return <Notfound />;

  const { desc, experience, education, certification } = BioData[0];
  const dataMap = { experience, education, certification };

  const bringToFront = (label) => { 
    setMaxZ((prev) => prev + 1); 
    setZIndexes((prev) => ({ ...prev, [label]: maxZ + 1 })) 
  };

  const renderSection = (label, isMobile = false) => {
    const content = dataMap[label].map((item) => sectionMap[label](item, language));

    if (isMobile) {
      return (
        <div key={label} className="flex w-full border-dot">
          <div className="max-w-[42px] border-dot-r">
            <div className="p-2 uppercase font-semibold rotate-90 origin-bottom-left text-[#ffaa00]"> {label} </div>
          </div>
          <div className={`flex w-full flex-col ${paddingMap[label]}`}> {content} </div>
        </div>
      );
    }

    return (
      <Draggable
        key={label}
        grid={[1, 1]}
        position={positions[label]}
        onStart={() => bringToFront(label)} 
        onDrag={(_, data) => setPositions((p) => ({ ...p, [label]: { x: Math.round(data.x), y: Math.round(data.y) }}))}
      >
        <div data-draggable="true" onMouseDown={() => bringToFront(label)} className="absolute gap-y-1 flex flex-col" style={{ zIndex: zIndexes[label], cursor: "grab" }}>
          <div className="text-[#ffaa00] text-[12px] py-1 px-2 border-dot w-fit bg-[#111]">
            x.{positions[label].x}, y.{positions[label].y}
          </div>
          <div className="flex border-dot bg-[#111]/85 backdrop-blur-sm w-[640px] cursor-pointer">
            <div className="max-w-[42px] border-dot-r">
              <div className="p-2 uppercase font-semibold rotate-90 origin-bottom-left text-[#ffaa00]"> {label} </div>
            </div>
            <div className={`flex w-full flex-col ${paddingMap[label]}`}> {content} </div>
          </div>
        </div>
      </Draggable>
    );
  };

  const renderBioImage = () => (
    <Draggable
      grid={[1,1]}
      position={positions.bioImage}
      onStart={() => bringToFront("bioImage")}
      onDrag={(_, data) => setPositions((p) => ({ ...p, bioImage: { x: Math.round(data.x), y: Math.round(data.y) }}))}
    >
      <div
        data-draggable="true"
        onMouseDown={() => bringToFront("bioImage")}
        className="absolute cursor-grab"
        style={{ zIndex: zIndexes.bioImage }}
      >
        <div className="text-[#ffaa00] text-[12px] py-1 px-2 border-dot w-fit bg-[#111]">
          x.{positions.bioImage.x}, y.{positions.bioImage.y}
        </div>
        <div className="w-[240px] h-[240px] pt-1">
          <div className="h-full bg-white bg-[url('/bg-bio.png')] bg-cover bg-center"></div>
        </div>
      </div>
    </Draggable>
  );

  const renderBioDesc = () => (
    <Draggable
      grid={[1,1]}
      position={positions.bioDesc}
      onStart={() => bringToFront("bioDesc")}
      onDrag={(_, data) => setPositions((p) => ({ ...p, bioDesc: { x: Math.round(data.x), y: Math.round(data.y) }}))}
    >
      <div
        data-draggable="true"
        onMouseDown={() => bringToFront("bioDesc")}
        className="absolute cursor-grab"
        style={{ zIndex: zIndexes.bioDesc }}
      >
        <div className="text-[#ffaa00] text-[12px] py-1 px-2 border-dot w-fit bg-[#111]">
          x.{positions.bioDesc.x}, y.{positions.bioDesc.y}
        </div>
        <div className="pt-1">
          <div className="bg-[#111]/85 backdrop-blur-sm w-[480px] uppercase cursor-pointer p-4 border-dot text-[14px]">{desc[language]}</div>
        </div>
      </div>
    </Draggable>
  );

  return (
    <div className="flex justify-center bg-cover bg-center">
      <div className="hidden lg:flex h-screen items-center w-full justify-center absolute overflow-hidden">
      <div className="text-white/10 text-[28rem] 2xl:text-[40rem] select-none">
        <Typewriter text='enfx.' />
      </div>
      </div>
      <div className="flex flex-col place-content-center w-full lg:max-w-[1200px] relative">
        <div className="w-full flex justify-end px-4 pt-4">
          <button onClick={toggleLanguage} className="text-[14px] font-medium underline underline-offset-1 text-[#ffa500]">
            {language === "en" ? "English" : "Bahasa"}
          </button>
        </div>

        {/* desktop draggable */}
        <div className="hidden lg:block relative">
          {Object.keys(dataMap).map((label) => renderSection(label))}
          {renderBioImage()}
          {renderBioDesc()}
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-[14px] min-w-[1000px]" style={{ zIndex: 9999 }}>
            <div className="flex gap-x-1.5 justify-center">
              <div className="py-2 px-4 text-[#ffaa00] font-semibold bg-[#212121]">protips_</div>
              <div className="py-2 px-4 bg-[#212121]">{language === "en" ? "click once to bring object to the front" : "tekan sekali untuk memindahkan objek ke posisi depan"}</div>
              <div className="py-2 px-4 bg-[#212121]">{language === "en" ? "click and drag to move object anywhere" : "tekan lalu seret untuk memindahkan objek kemana saja"}</div>
            </div>
          </div>
        </div>

        {/* mobile static */}
        <div className="block lg:hidden flex flex-col lg:flex-row gap-4 p-4">
          <div className="flex flex-col gap-y-4 lg:max-w-[400px]">
            <div className="w-full h-32 bg-white bg-[url('/bg-bio.png')] bg-cover bg-center"></div>
            <div className="uppercase text-[14px]">{desc[language]}</div>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            {Object.keys(dataMap).map((label) => renderSection(label, true))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
