import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../data/languageContext.jsx";
import { useState } from "react";
import BioCards from "../components/BioCards.jsx";
import BioData from "../data/bio";
import Notfound from "./404.jsx";
import Footnote from '../components/Footnote.jsx';
import BubbleText from '../components/BubbleText.jsx';
import { bgBrand, textBrandLight, buttonDefault, dropdownButton, dropdownOuter, buttonPdf, textSub, containerBase } from '../data/uiStyles.js';
import Button from '../components/Button.jsx';
import Navigation from '../components/Navigation.jsx';
import aboutDialog from '../data/aboutDialog.js';

const About = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

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
    { name: "Dribbble", url: "https://dribbble.com/eisenflux" }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv_salman_setiawan.pdf';
    link.download = 'cv_salman_setiawan.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!language) return <Notfound />;

  const { experience, education, certification } = BioData[0];

  const renderBubbleWithCard = (item, label, index, isLast, timeBase) => {
    const timeStr = isLast ? timeBase : undefined;

    return (
      <BubbleText key={item.uid} type='type-2' time={timeStr}>
        <BioCards
          type={label}
          title={item.title?.[language] || item.title}
          role={item.role?.[language] || item.role}
          company={item.company}
          year={item.year}
          dateStart={item.dateStart}
          dateEnd={item.dateEnd}
          keyWord={item.keyWord}
          jobdesc={item.jobdesc}
          language={language}
          proof={item.proof}
        />
      </BubbleText>
    );
  };

  const cardMap = { experience, education, certification };

  return (
    <div className='flex justify-center'>
      <title>About Me</title>
      <Navigation type='type-1' />

      <div className="flex place-content-center w-full md:max-w-[720px] py-20 relative px-4">
        <div className="flex flex-col w-full gap-y-4 items-center">
          <div className={`px-6 py-1 rounded-xl ${bgBrand} ${textBrandLight} ${textSub}`}> {language === 'en' ? 'Today' : 'Hari ini'} </div>
          <div className="w-full md:max-w-[720px]">
            {aboutDialog.map((block, index) => {

              if (block.type === "bubble") {
                return (
                  <BubbleText key={index} type={block.bubbleType} text={block.text[language]} time={block.time} />
                );
              }

              if (block.type === "cards") {
                const list = cardMap[block.label];
                return (
                  <div key={index}>
                    <BubbleText type={block.intro.bubbleType} text={block.intro.text[language]} time={block.intro.time} />
                    <BubbleText type={block.description.bubbleType} text={block.description.text[language]} />
                    {list.map((item, idx) =>
                      renderBubbleWithCard( item, block.label, idx, idx === list.length - 1, block.timeBase )
                    )}
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </div>

      <div className={`fixed bottom-0 w-full ${containerBase} p-2 flex flex-col gap-y-1.5 justify-center`}>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-2 gap-x-2 h-[48px] items-end w-full max-w-[720px]">
            <Button onClick={handleDownload} fullWidth={true} style={buttonPdf} text={language === "en" ? "PDF Version Here" : "Versi PDF Disini"} />
            <div className="relative">
              <Button onClick={() => handleClick("socials")} fullWidth={true} style={buttonDefault} text={language === "en" ? "Contacts" : "Kontak"} />
              {openMenu === "socials" && (
                <div className={`${dropdownOuter} w-full left-0 bottom-13`}>
                  {socialList.map((item, idx) => (
                    <div key={idx} className={dropdownButton} onClick={() => window.open(item.url, "_blank")}> {item.name} </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <Footnote />
      </div>
    </div>
  );
};

export default About;
