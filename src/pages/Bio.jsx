import { useState } from "react";
import { useLanguage } from "../data/languageContext.jsx";
import Experience from "../components/bio/Experience.jsx";
import BioData from "../data/bio";
import Notfound from "./404.jsx";
import Education from "../components/bio/Education.jsx";
import Certification from "../components/bio/Certification.jsx";
import Draggable from "react-draggable";

const Bio = () => {
  const { language, toggleLanguage } = useLanguage();
  const [positions, setPositions] = useState({
    education: { x: 0, y: 0 },
    certification: { x: 0, y: 0 },
    experience: { x: 0, y: 0 },
  });

  if (!language || !toggleLanguage) {
    return <Notfound />;
  }

  const { desc, experience, education, certification } = BioData[0];

  const handleDrag = (boxId, e, data) => {
    setPositions((prev) => ({
      ...prev,
      [boxId]: { x: Math.round(data.x), y: Math.round(data.y) },
    }));
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col place-content-center w-full md:max-w-[1200px]">
        <div className="w-full flex justify-end px-4 pt-4">
          <button
            onClick={toggleLanguage}
            className="text-[14px] h-fit font-medium underline underline-offset-1 text-[#ffa500]"
          >
            {language === "en" ? "English" : "Bahasa"}
          </button>
        </div>

        {/* desktop */}
        <div className="md:block hidden relative" style={{ minHeight: 500 }}>
          {["education", "certification", "experience"].map((box) => {
            const content =
              box === "education"
                ? education.map((edu) => (
                    <Education
                      key={edu.uid}
                      title={edu.title[language]}
                      role={edu.role[language]}
                      dateStart={edu.dateStart}
                      dateEnd={edu.dateEnd}
                    />
                  ))
                : box === "certification"
                ? certification.map((cert) => (
                    <Certification
                      key={cert.uid}
                      title={cert.title}
                      company={cert.company}
                      date={cert.date}
                    />
                  ))
                : experience.map((exp) => (
                    <Experience
                      key={exp.uid}
                      title={exp.title}
                      role={exp.role[language]}
                      dateStart={exp.dateStart}
                      dateEnd={exp.dateEnd}
                    />
                  ));

            const paddingBottom =
              box === "education" ? "pb-48" : box === "certification" ? "pb-24" : "pb-24";

            return (
              <Draggable
                key={box}
                defaultPosition={positions[box]}
                onDrag={(e, data) => handleDrag(box, e, data)}
              >
                <div className="relative inline-block">
                  <div className="absolute -top-6 left-0 text-[#ffaa00] text-[12px]">
                    x.{positions[box].x}, y.{positions[box].y}
                  </div>
                  <div className={`flex border-dot bg-[#111111] w-[720px] cursor-pointer`}>
                    <div className="max-w-[42px] border-dot-r">
                      <div className="p-2 uppercase font-semibold rotate-90 origin-bottom-left text-[#ffaa00]">
                        {box}
                      </div>
                    </div>
                    <div className={`flex w-full flex-col ${paddingBottom}`}>{content}</div>
                  </div>
                </div>
              </Draggable>
            );
          })}
        </div>

        {/* mobile */}
        <div className="flex flex-col lg:flex-row gap-4 p-4 block md:hidden">
          <div className="flex flex-col gap-y-4 lg:max-w-[400px]">
            <div className="w-full h-32 bg-white">x</div>
            <div className="uppercase text-[14px]">{desc[language]}</div>
          </div>
          <div className="flex flex-col gap-y-2 w-full">
            {[
              { label: "experience", items: experience },
              { label: "education", items: education },
              { label: "certification", items: certification },
            ].map((section) => (
              <div key={section.label} className="flex w-full border-dot">
                <div className="max-w-[42px] border-dot-r">
                  <div className="p-2 uppercase font-semibold rotate-90 origin-bottom-left text-[#ffaa00]">
                    {section.label}
                  </div>
                </div>
                <div className={`flex w-full flex-col ${section.label === "education" ? "pb-48" : "pb-24"}`}>
                  {section.items.map((item) =>
                    section.label === "experience" ? (
                      <Experience
                        key={item.uid}
                        title={item.title}
                        role={item.role[language]}
                        dateStart={item.dateStart}
                        dateEnd={item.dateEnd}
                      />
                    ) : section.label === "education" ? (
                      <Education
                        key={item.uid}
                        title={item.title[language]}
                        role={item.role[language]}
                        dateStart={item.dateStart}
                        dateEnd={item.dateEnd}
                      />
                    ) : (
                      <Certification
                        key={item.uid}
                        title={item.title}
                        company={item.company}
                        date={item.date}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
