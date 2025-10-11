import React from 'react';
import { useLanguage } from '../data/languageContext.jsx';
import BioData from '../data/bio.js'; 

const AvaCard = () => {
  const { language } = useLanguage();

  // Ambil deskripsi berdasarkan bahasa, fallback ke Bahasa Indonesia
  const description = BioData[0]?.desc?.[language] || BioData[0]?.desc?.id || '';

  return (
    <div className="flex flex-col md:flex-row gap-3 border border-neutral-800 p-3">
      <img src="/bg-bio.webp" alt="Background profile" className="w-16 md:w-20 h-full object-cover" />
      <div className='text-sm pr-1 text-justify'> {language === "en" ? "Hola! my name is" : "Hola! namaku"} <span className="font-semibold text-[#ffaa50]">Salman</span> {language === "en" ? "and i'm a" : "dan aku seorang"} {description}</div>
    </div>
  );
};

export default AvaCard;
