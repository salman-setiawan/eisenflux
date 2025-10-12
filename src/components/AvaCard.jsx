import React from 'react';
import { useLanguage } from '../data/languageContext.jsx';
import BioData from '../data/bio.js'; 
import Chip from './Chip.jsx';

const AvaCard = () => {
  const { language } = useLanguage();

  // Ambil deskripsi berdasarkan bahasa, fallback ke Bahasa Indonesia
  const description = BioData[0]?.desc?.[language] || BioData[0]?.desc?.id || '';

  return (
    <div className="flex flex-row gap-3.5 border border-neutral-800 p-3 bg-[#141414] rounded-xl">
      <img src="/bg-bio.webp" alt="ava" className="w-20 md:w-24 h-full object-cover rounded-lg" />
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          <Chip label='UI/UX Designer' />
          <Chip label='Balikpapan - Indonesia 🇮🇩' />
        </div>
        <div className='text-sm px-0.5 pr-1 text-justify'> {language === "en" ? "Hola! my name is" : "Hola! namaku"} <span className="font-semibold text-[#ffaa50]">Salman</span> {language === "en" ? "and i'm a" : "dan aku seorang"} {description}</div>
      </div>
    </div>
  );
};

export default AvaCard;
