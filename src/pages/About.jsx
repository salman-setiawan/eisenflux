import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../data/languageContext.jsx";
import BioCards from "../components/BioCards.jsx";
import BioData from "../data/bio";
import Notfound from "./404.jsx";
import LanguageToggle from "../components/LanguageToggle.jsx";
import Footnote from '../components/Footnote.jsx';
import BubbleText from '../components/BubbleText.jsx';
import WorkChip from '../components/WorkChip.jsx';

const About = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

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
        <div className="w-full border-dot bg-black/80">
          <BioCards
            type={label}
            title={item.title?.[language] || item.title}
            role={item.role?.[language] || item.role}
            company={item.company}
            date={item.date}
            dateStart={item.dateStart}
            dateEnd={item.dateEnd}
            keyWord={item.keyWord}
            jobdesc={item.jobdesc}
            language={language}
            proof={item.proof}
          />
        </div>
      </BubbleText>
    );
  };

  return (
    <div className='flex justify-center'>
      <title>About Me</title>
      <div className="fixed top-0 z-10 bg-[#141414] w-full flex justify-between px-4 py-3 items-center">
        <div className="flex items-center gap-x-4 md:gap-x-6">
          <button 
            onClick={() => navigate(-1)}
            className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="flex gap-x-3 items-center">
            <img src="/bg-bio.webp" alt="ava" className="h-[40px] rounded-lg" />
            <div className='space-y-[1px]'><div className="font-semibold text-[14px]">Salman Setiawan</div>
            <WorkChip color='text-white/70' label={language === "en" ? "Open to Work" : "Terbuka untuk Pekerjaan"} /></div>
          </div>
        </div>
        <LanguageToggle />
      </div>

      <div className="flex place-content-center w-full md:max-w-[720px] py-24 relative px-4">
        <div className="flex flex-col w-full gap-y-4 items-center">
          <div className="px-6 py-1 rounded-xl bg-[#ffaa50]/8 text-[#ffaa50] text-[12px] font-medium w-fit">
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

      <div className="fixed bottom-0 w-full bg-[#141414] py-1.5" style={{ zIndex: 1 }}>
        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-y-2 w-full max-w-[720px] px-4 pt-1 pb-3">
            <div className="flex items-end h-[48px]">
              <button onClick={handleDownload} className='flex rounded-lg pb-1 hover:pb-1.5 bg-black w-full'>
                <div className={`bg-red-700 text-white py-1.5 px-2.5 flex gap-x-1.5 w-full cursor-pointer rounded-lg border-3 border-black hover:bg-red-800 font-bold text-[13px] md:text-[14px]`}>
                  {language === 'en' ? 'PDF Version Here' : 'Versi PDF Disini'}
                </div>
              </button>
            </div>
          </div>
        </div>
        <Footnote />
      </div>
    </div>
  )
}

export default About