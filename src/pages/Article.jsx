import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../data/languageContext';
import { getCardBySlug, getCaseStudyBySlug } from '../data/content/index.js';
import Notfound from '../pages/404.jsx';
import Footnote from '../components/Footnote.jsx';
import Content from '../components/Content.jsx';
import Showcase from '../components/Showcase.jsx';
import Chip from '../components/Chip.jsx';
import LanguageToggle from '../components/LanguageToggle.jsx';
import { useEffect, useState } from 'react';
import Button from '../components/Button.jsx';

const Article = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const selectedArticle = getCardBySlug(slug);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const cs = getCaseStudyBySlug(slug);
    // normalize to Content.jsx input array shape if present
    if (cs && Array.isArray(cs.process)) {
      const normalized = [];
      if (cs.overview) {
        normalized.push({ title: { en: 'Overview', id: 'Ringkasan' }, text: cs.overview });
      }
      if (cs.problem) {
        normalized.push({ title: { en: 'Problem', id: 'Masalah' }, text: cs.problem });
      }
      if (cs.process) {
        // map process items into textQuote blocks or simple text blocks
        cs.process.forEach((step) => {
          if (step.overview) {
            normalized.push({ text: step.overview });
          } else if (step.label || step.desc) {
            normalized.push({ title: step.label, text: step.desc });
          }
        });
      }
      if (cs.impact) {
        normalized.push({ title: { en: 'Impact', id: 'Dampak' }, text: cs.impact });
      }
      if (cs.keyLearnings) {
        normalized.push({ title: { en: 'Key Learnings', id: 'Pelajaran Utama' }, text: cs.keyLearnings });
      }
      setContents(normalized);
    } else {
      console.warn(`⚠️ Artikel "${slug}" tidak memiliki data konten.`);
      setContents([]);
    }

    // ✅ Disable horizontal scroll di halaman ini
    document.body.style.overflowX = "hidden";

    // 🧹 Kembalikan scroll seperti semula saat keluar dari halaman
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, [selectedArticle, slug]);

  if (!selectedArticle) {
    return <Notfound />;
  }

  const { title, categories, extUrl, extImg, extText, intImg2, intText2 } = selectedArticle;

  return (
    <div className="flex flex-col items-center overflow-x-hidden bg-[#141414]">
      <div className="fixed top-0 z-10 bg-[#141414] w-full flex justify-between py-4 px-5 items-center">
        <button 
          onClick={() => navigate(-1)}
          className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="text-center font-semibold text-[13px]">{title}</div>
        <LanguageToggle />
      </div>

      <div className="w-[150vw] h-[560px] md:h-[320px] bg-cover flex justify-center items-center bg-[#171717] overflow-hidden shadow-lg">
        <Showcase id={selectedArticle.id} />
      </div>

      <div className="px-5 flex flex-col gap-y-2 w-full max-w-[720px] pt-8 pb-12">
        <div className="text-2xl font-semibold leading-relaxed text-justify">
          {title}
        </div>
        <div className="flex flex-wrap gap-x-2 text-[12px] font-semibold pt-2">
          {categories.map((cat, i) => (
            <Chip key={i} label={cat[language] || cat} />
          ))}
        </div>

        {contents.length === 0 ? (
          <div className="text-neutral-300 text-center italic py-12">
            No content found.
          </div>
        ) : (
          contents.map((content, index) => (
            <div key={index}>
              <Content data={content} language={language} />
            </div>
          ))
        )}
      </div>

      <div
        className="fixed bottom-0 w-full bg-[#141414] py-1.5"
        style={{ zIndex: 1 }}
      >
        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-y-2 w-full max-w-[720px] px-4 pt-1 pb-3">
            {extUrl && (
              <Button to={extUrl} target="_blank" rel="noopener noreferrer" img={extImg} text={extText[language]} fullWidth={true} />
            )}
            {intText2 && (
              <Button to={`/gallery/${slug}`} img={intImg2} text={intText2[language]} fullWidth={true} />
            )}
          </div>
        </div>
        <Footnote />
        <title>{title}</title>
      </div>
    </div>
  );
};

export default Article;
