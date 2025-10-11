import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BioData from '../data/bio.js'; 
import { useLanguage } from '../data/languageContext.jsx';
import Button from './Button.jsx';

const ExpCard = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const experienceData = BioData[0].experience;
  const displayedExperiences = experienceData.slice(0, 3);

  return (
    <div className="w-full p-3 border-2 border-neutral-800 relative overflow-hidden md:min-h-[160px] bg-[#111]">
      <h2 className="font-bold mb-3 text-[#ffaa50]">{language === "en" ? "Work Experience" : "Pengalaman Kerja"}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8">
        {displayedExperiences.map((exp, index) => (
          <div key={exp.uid} className="w-full flex md:flex-col gap-y-2 gap-x-3 relative">
            <p className="text-[12px] font-semibold hidden md:block">
              {exp.dateEnd}
            </p>
            <div className="pt-1.5 md:pt-0 pl-0.5 md:pl-0">
              <div
                className={index === 0 ? "animate-blink rounded-full w-[13px] h-[13px]" : "rounded-full w-[13px] h-[13px]"}
                style={{ backgroundColor: index === 0 ? undefined : '#4C341A'}}
              ></div>
              {index < displayedExperiences.length - 1 && (
                <div
                  className="hidden md:block absolute"
                  style={{ top: 32, left: 13,  width: 'calc(100% + 21rem)',  borderTop: '2px solid #4C341A'}}
                ></div>
              )}
              {index < displayedExperiences.length - 1 && (
                <div
                  className="block md:hidden absolute"
                  style={{ top: 19, left: 7.5,  height: 'calc(100% + 5rem)',  borderLeft: '2px solid #4C341A'}}
                ></div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-sm truncate">{exp.title}</h3>
              <p className="text-[13px] truncate">
                {exp.role?.[language] || exp.role?.id}
              </p>
              <p className="text-[13px] block md:hidden">
                {exp.dateEnd}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient color overlay - bottom for mobile, right side for desktop */}
      <div 
        className="absolute block md:hidden bottom-0 left-0 right-0 h-[160px] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #111111 0%, transparent 80%)'
        }}
      ></div>
      
      {/* Desktop-specific right side gradient color */}
      <div 
        className="hidden md:block absolute top-0 bottom-0 right-0 md:w-[640px] lg:w-[800px] pointer-events-none"
        style={{
          background: 'linear-gradient(to left, #111111 0%, transparent 80%)'
        }}
      ></div>
      
      {/* Gradient blur overlay - bottom for mobile, right side for desktop */}
      <div 
        className="absolute block md:hidden bottom-0 left-0 right-0 h-[240px] pointer-events-none"
        style={{
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          mask: 'linear-gradient(to top, black 0%, black 35%, transparent 100%)',
          WebkitMask: 'linear-gradient(to top, black 0%, black 35%, transparent 100%)'
        }}
      ></div>
      
      {/* Desktop-specific right side gradient blur */}
      <div 
        className="hidden md:block absolute top-0 bottom-0 right-0 md:w-[640px] lg:w-[800px] pointer-events-none"
        style={{
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
          mask: 'linear-gradient(to left, black 0%, black 35%, transparent 100%)',
          WebkitMask: 'linear-gradient(to left, black 0%, black 35%, transparent 100%)'
        }}
      ></div>
      
      {/* Learn more button */}
      <div className="absolute right-3 bottom-3 md:right-4 z-10">
        <div className="flex">
          <Link className='p-0.5 snake' to='/me'>
            <Button bg='bg-[#111]' text='Learn More' hoverText="hover:text-[#FFAA00]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
