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
  const csData = getCaseStudyBySlug(slug);

  useEffect(() => {
    const cs = getCaseStudyBySlug(slug);
    // normalize to Content.jsx input array shape if present
    if (cs && Array.isArray(cs.process)) {
      const normalized = [];
      if (cs.overview) {
        normalized.push({ kind: 'overview', title: { en: 'Overview', id: 'Ringkasan' }, text: cs.overview });
      }
      if (cs.problem) {
        normalized.push({ kind: 'problem', title: { en: 'Problem', id: 'Masalah' }, text: cs.problem });
      }
      if (cs.processImg) {
        normalized.push({ 
          kind: 'image', 
          img: cs.processImg,
          alt: { en: 'Process Image', id: 'Gambar Proses' },
          desc: { en: '', id: '' }
        });
      }
      if (cs.process) {
        // Build a single combined process card: overview + labeled steps
        let processOverview = null;
        const steps = [];
        cs.process.forEach((step) => {
          if (step.overview) {
            processOverview = step.overview;
          } else if (step.label || step.desc) {
            steps.push({ label: step.label, desc: step.desc });
          }
        });
        normalized.push({
          kind: 'process',
          title: { en: 'Process', id: 'Proses' },
          text: processOverview,
          steps,
        });
      }
      if (cs.impact) {
        normalized.push({ kind: 'impact', title: { en: 'Impact', id: 'Dampak' }, text: cs.impact });
      }
      if (cs.keyLearnings) {
        normalized.push({ kind: 'keyLearnings', title: { en: 'Key Learnings', id: 'Pelajaran Utama' }, text: cs.keyLearnings });
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

  const { extUrl, extImg, extText, intImg2, intText2 } = selectedArticle;
  const pageTitle = csData?.title || selectedArticle.title;
  const navbarTitle = csData?.altTitle || selectedArticle.title3 || selectedArticle.title;

  const metaLabels = {
    role: { en: 'Role', id: 'Peran' },
    tools: { en: 'Tools', id: 'Perangkat' },
    duration: { en: 'Duration', id: 'Durasi' },
    type: { en: 'Type', id: 'Jenis' },
  };

  return (
    <div className="flex flex-col items-center overflow-x-hidden bg-[#191919]">
      <div className="fixed top-0 z-10 bg-[#141414] w-full flex justify-between py-4 px-5 items-center">
        <button 
          onClick={() => navigate(-1)}
          className="text-white hover:text-gray-300 transition-colors duration-200 cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="text-center font-semibold text-[13px]">{navbarTitle}</div>
        <LanguageToggle />
      </div>

      <div className="w-[150vw] h-[560px] md:h-[320px] bg-cover flex justify-center items-center bg-[#212121] overflow-hidden">
        <Showcase id={selectedArticle.id} />
      </div>

      <div className="px-5 flex flex-col gap-y-4 w-full max-w-[800px] pt-6 pb-28">
        <div className="text-2xl font-semibold pb-1">
          {pageTitle}
        </div>

        {csData && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[14px] text-neutral-300 pb-4">
            {csData.role && (
              <div className="flex gap-2">
                <span className="text-neutral-400 min-w-[72px]">{metaLabels.role[language]}:</span>
                <span className="font-semibold text-white">{csData.role[language] || csData.role.en || csData.role}</span>
              </div>
            )}
            {csData.duration && (
              <div className="flex gap-2">
                <span className="text-neutral-400 min-w-[72px]">{metaLabels.duration[language]}:</span>
                <span className="font-semibold text-white">{csData.duration[language] || csData.duration.en || csData.duration}</span>
              </div>
            )}
            {csData.type && (
              <div className="flex gap-2">
                <span className="text-neutral-400 min-w-[72px]">{metaLabels.type[language]}:</span>
                <span className="font-semibold text-white">{csData.type[language] || csData.type.en || csData.type}</span>
              </div>
            )}
            {csData.tools && Array.isArray(csData.tools) && csData.tools.length > 0 && (
              <div className="flex gap-2">
                <span className="text-neutral-400 min-w-[72px]">{metaLabels.tools[language]}:</span>
                <span className="font-semibold text-white">{csData.tools.join(', ')}</span>
              </div>
            )}
          </div>
        )}

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
        <title>{pageTitle}</title>
      </div>
    </div>
  );
};

export default Article;
