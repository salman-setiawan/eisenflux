import { useParams } from 'react-router-dom';
import { useLanguage } from '../data/languageContext';
import { getCardBySlug, getCaseStudyBySlug } from '../data/content/index.js';
import Notfound from '../pages/404.jsx';
import Footnote from '../components/Footnote.jsx';
import Content from '../components/Content.jsx';
import Showcase from '../components/Showcase.jsx';
import { useEffect, useState } from 'react';
import Button from '../components/Button.jsx';
import Navigation from '../components/Navigation.jsx';
import { buttonDefault, textHeading1, textBaseSemi, textBase, containerBase, textSmall } from '../data/uiStyles.js';

const Article = ({csDataHeader, csDataLabel, csDataPos}) => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const selectedArticle = getCardBySlug(slug);
  const [contents, setContents] = useState([]);
  const csData = getCaseStudyBySlug(slug);

  useEffect(() => {
    const cs = getCaseStudyBySlug(slug);
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

    document.body.classList.add('overflow-x-hidden');

    return () => {
      document.body.classList.remove('overflow-x-hidden');
    };

  }, [selectedArticle, slug]);

  if (!selectedArticle) {
    return <Notfound />;
  }

  const { extUrl, extText } = selectedArticle;
  const pageTitle = csData?.title || selectedArticle.title;
  const navbarTitle = csData?.altTitle || selectedArticle.title3 || selectedArticle.title;

  const metaLabels = {
    role: { en: 'Role', id: 'Peran' },
    tools: { en: 'Tools', id: 'Perangkat' },
    duration: { en: 'Duration', id: 'Durasi' },
    type: { en: 'Type', id: 'Jenis' },
  };

  csDataPos = 'flex flex-col gap-y-1 items-center';
  csDataHeader = `${textBaseSemi}`;
  csDataLabel = `text-center ${textBase} font-medium w-[190px]`;

  const renderDataLabels = () => (
    <div className={`grid grid-cols-2 gap-y-4 ${textSmall} gap-x-6 md:gap-x-12 justify-center`}>
      {csData.role && (
        <div className={csDataPos}>
          <span className={csDataHeader}>{metaLabels.role[language]} :</span>
          <span className={csDataLabel}>{csData.role[language] || csData.role.en || csData.role}</span>
        </div>
      )}
      {csData.duration && (
        <div className={csDataPos}>
          <span className={csDataHeader}>{metaLabels.duration[language]} :</span>
          <span className={csDataLabel}>{csData.duration[language] || csData.duration.en || csData.duration}</span>
        </div>
      )}
      {csData.type && (
        <div className={csDataPos}>
          <span className={csDataHeader}>{metaLabels.type[language]} :</span>
          <span className={csDataLabel}>{csData.type[language] || csData.type.en || csData.type}</span>
        </div>
      )}
      {csData.tools && Array.isArray(csData.tools) && csData.tools.length > 0 && (
        <div className={csDataPos}>
          <span className={csDataHeader}>{metaLabels.tools[language]} :</span>
          <span className={csDataLabel}>{csData.tools.join(', ')}</span>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col items-center overflow-x-hidden bg-[#0c0c0c]">

      <Navigation type='type-4' title={navbarTitle} />

      <div className="relative w-full h-[560px] bg-cover flex justify-center items-center bg-[#212121] overflow-hidden">
        <Showcase id={selectedArticle.id} />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,_#0c0c0c_0%,_rgba(12,12,12,0.91)_27%,_rgba(12,12,12,0.35)_70%,_transparent_100%)] pointer-events-none"></div>
        <div className="absolute bottom-6 z-10">
          <div className="w-full px-4 flex flex-col gap-y-6 items-center">
            <div className={`${textHeading1} text-center px-4`}>{pageTitle}</div>
            {renderDataLabels()}
          </div>
        </div>
      </div>


      <div className="flex flex-col gap-y-6 px-4 py-8 w-full md:max-w-[720px]">
        {contents.length === 0 ? (
          <div className={`${textBaseSemi} text-center py-12`}>
            No Content Found.
          </div>
        ) : (
          contents.map((content, index) => (
            <div key={index}>
              <Content data={content} language={language} />
            </div>
          ))
        )}
        <div className="pt-2 pb-12"><Footnote /></div>
      </div>

      <div
        className={`fixed bottom-0 w-full ${containerBase} flex justify-center`}
        style={{ zIndex: 1 }}
      >
        <div className="w-[720px] px-4 py-2">
          {extUrl && (
            <Button style={buttonDefault} to={extUrl} target="_blank" rel="noopener noreferrer" text={extText[language]} fullWidth={true} />
          )}
        </div>
      </div>
      <title>{pageTitle}</title>
    </div>
  );
};

export default Article;
