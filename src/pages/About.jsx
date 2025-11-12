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

  return (
    <div className='flex justify-center'>
      <title>About Me</title>
      <Navigation type='type-1' />

      <div className="flex place-content-center w-full md:max-w-[720px] py-20 relative px-4">
        <div className="flex flex-col w-full gap-y-4 items-center">
          <div className={`px-6 py-1 rounded-xl ${bgBrand} ${textBrandLight} ${textSub}`}>
            {language === 'en' ? 'Today' : 'Hari ini'}
          </div>
          <div className="w-full md:max-w-[720px]">
            <BubbleText 
              type='type-1' 
              text={language === 'en' ? 'Can you introduce yourself?' : 'Bisakah kamu memperkenalkan dirimu?'} 
              time='08:05 AM' 
            />
            <BubbleText 
              type='type-2' 
              text={language === 'en' 
                ? "Sure. My name is Salman Setiawan, a UI/UX Designer with a Bachelor's degree in Informatics from Kalimantan Institute of Technology. I'm currently based in Balikpapan, Indonesia." 
                : 'Tentu. Nama saya Salman Setiawan, seorang UI/UX Designer dengan latar belakang Sarjana Informatika dari Institut Teknologi Kalimantan. Saat ini saya berdomisili di Balikpapan, Indonesia.'} 
              time='08:05 AM' 
            />
            <BubbleText 
              type='type-1' 
              text={language === 'en' 
                ? 'What initially sparked your interest in UX Design?' 
                : 'Apa yang awalnya membuatmu tertarik menekuni dunia UX Design?'} 
              time='08:06 AM' 
            />
            <BubbleText 
              type='type-2' 
              text={language === 'en' 
                ? 'It started from my curiosity about why some apps feel so effortless to use, while others are confusing and frustrating.' 
                : 'Awalnya, saya penasaran kenapa ada aplikasi yang terasa begitu mudah digunakan, sementara yang lain justru bikin frustrasi.'} 
            />
            <BubbleText 
              type='type-2' 
              text={language === 'en' 
                ? "From there, I realized the importance of user-centered design. Since then, i've been passionate about creating digital experiences that are intuitive, human-centered, and meaningful." 
                : 'Dari situ, saya mulai menyadari pentingnya desain yang berpusat pada pengguna, dan sejak itu saya ingin menciptakan pengalaman digital yang lebih intuitif, manusiawi, dan bermanfaat.'} 
              time='08:07 AM' 
            />
            <BubbleText 
              type='type-1' 
              text={language === 'en' 
                ? 'How do you usually approach the design process?' 
                : 'Lalu, bagaimana biasanya kamu mendekati proses desain?'} 
              time='08:07 AM' 
            />
            <BubbleText 
              type='type-2' 
              text={language === 'en' 
                ? 'I believe great design is born from a balance between empathy and logic.' 
                : 'Saya percaya rancangan yang baik lahir dari perpaduan empati dan logika.'} 
            />
            <BubbleText 
              type='type-2' 
              text={language === 'en' 
                ? "So I always start with research, understanding users needs and the problem context, then collaborate with the team to turn those insights into simple yet impactful solutions." 
                : 'Jadi, saya selalu memulai dari riset, memahami kebutuhan pengguna dan konteks masalahnya, lalu berkolaborasi dengan tim untuk mengubah temuan itu menjadi solusi yang sederhana namun memiliki dampak.'} 
            />
            <BubbleText 
              type='type-2' 
              text={language === 'en' 
                ? 'I also emphasize iterative evaluation and feedback to ensure the final design meets both user expectations and business goals.' 
                : 'Tak lupa evaluasi dan umpan balik secara iteratif saya lakukan agar rancangan yang saya berikan dapat memenuhi espektasi pengguna dan juga bisnis.'} 
              time='08:08 AM' 
            />
            <BubbleText 
              type='type-1' 
              text={language === 'en' 
                ? 'How about your work experience?' 
                : 'Bagaimana dengan pengalaman kerja kamu?'} 
              time='08:09 AM' 
            />
            <BubbleText 
              type='type-2' 
              text={language === 'en' 
                ? "Here's a summary of my professional experience." 
                : 'Berikut saya lampirkan informasi pengalaman kerja saya.'} 
            />
            {experience.map((item, index) => 
              renderBubbleWithCard(item, "experience", index, index === experience.length - 1, '08:10 AM')
            )}
            <BubbleText 
              type='type-1' 
              text={language === 'en' 
                ? 'And how about your educational background?' 
                : 'Lalu bagaimana dengan pendidikan kamu?'} 
              time='08:12 AM' 
            />
            <BubbleText 
              type='type-2' 
              text={language === 'en' 
                ? "Here's a summary of my education." 
                : 'Berikut saya lampirkan informasi pendidikan saya.'} 
            />
            {education.map((item, index) => 
              renderBubbleWithCard(item, "education", index, index === education.length - 1, '08:13 AM')
            )}
            <BubbleText 
              type='type-1' 
              text={language === 'en' 
                ? 'Do you have any certifications?' 
                : 'Apakah kamu punya sertifikasi?'} 
              time='08:13 AM' 
            />
            <BubbleText 
              type='type-2' 
              text={language === 'en' 
                ? "Here's a summary of my certification." 
                : 'Berikut saya lampirkan informasi sertifikasi saya.'} 
            />
            <div className="w-full">
              {certification.map((item, index) => renderBubbleWithCard(item, "certification", index, index === certification.length - 1, '08:15 AM'))}
            </div>
          </div>
        </div>
      </div>

      <div className={`fixed bottom-0 w-full ${containerBase} py-1.5`} style={{ zIndex: 1 }}>
        <div className="flex w-full justify-center">
          <div className="w-full max-w-[720px] px-4 pt-1 pb-3">
            <div className="grid grid-cols-2 gap-x-2 h-[48px] items-end">
              <Button text={language === "en" ? "PDF Version Here" : "Versi PDF Disini"} onClick={handleDownload} fullWidth={true} style={buttonPdf} />
              <div className="relative">
                <Button text={language === "en" ? "Contacts" : "Kontak"} onClick={() => handleClick("socials")} fullWidth={true} style={buttonDefault}>
                  {openMenu === "socials" && (
                    <div className={`${dropdownOuter} w-full left-0 bottom-13`}>
                      {socialList.map((item, idx) => (
                        <div key={idx} className={dropdownButton} onClick={() => window.open(item.url, "_blank")}> 
                          {item.name}
                        </div>
                      ))}
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footnote />
      </div>
    </div>
  )
}

export default About