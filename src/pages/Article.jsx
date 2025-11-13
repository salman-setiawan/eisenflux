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
import { buttonDefault, textHeading1, textSmall, textNeutral300, textNeutral400, textBase, containerBase } from '../data/uiStyles.js';

const Article = ({csDataHeader, csDataLabel, csDataPos}) => {
  const { slug } = useParams();
  const { language } = useLanguage();
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

    // ✅ Disable horizontal scroll di halaman ini (menggunakan class untuk menghindari forced reflow)
    document.body.classList.add('overflow-x-hidden');

    // 🧹 Kembalikan scroll seperti semula saat keluar dari halaman
    return () => {
      document.body.classList.remove('overflow-x-hidden');
    };
  }, [selectedArticle, slug]);

  if (!selectedArticle) {
    return <Notfound />;
  }

  const { extUrl, extText, intImg2, intText2 } = selectedArticle;
  const pageTitle = csData?.title || selectedArticle.title;
  const navbarTitle = csData?.altTitle || selectedArticle.title3 || selectedArticle.title;

  const metaLabels = {
    role: { en: 'Role', id: 'Peran' },
    tools: { en: 'Tools', id: 'Perangkat' },
    duration: { en: 'Duration', id: 'Durasi' },
    type: { en: 'Type', id: 'Jenis' },
  };

  csDataPos = 'flex gap-2';
  csDataHeader = `${textNeutral400} min-w-[72px]`;
  csDataLabel = `font-semibold ${textBase}`;

  return (
    <div className="flex flex-col items-center overflow-x-hidden bg-[#141414]">
      <div className="lg:hidden flex w-full">
        <Navigation type='type-4' title={navbarTitle} />
        <div className="w-[150vw] h-[560px] bg-cover flex justify-center items-center bg-[#212121] overflow-hidden">
          <Showcase id={selectedArticle.id} />
        </div>
      </div>

      

      <div className="flex flex-col lg:flex-row w-full lg:max-w-[1400px]">
        <div className="flex flex-col w-full lg:max-w-[500px] p-4 lg:h-screen lg:overflow-y-auto bg-[#0c0c0c] lg:bg-[#141414] gap-y-4">
          <div className="hidden lg:block"><Navigation type='type-2' title={navbarTitle} /></div>
          <div className="hidden lg:flex h-[560px] bg-cover items-center overflow-hidden">
            <Showcase id={selectedArticle.id} />
          </div>
          <div className="flex flex-col gap-y-4 w-full">
            <div className={textHeading1}> {pageTitle} </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2 ${textSmall} ${textNeutral300}`}>
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
          </div>
        </div>

        <div className="space-y-4 bg-[#0c0c0c] p-4 lg:h-screen lg:overflow-y-auto">
          {contents.length === 0 ? (
            <div className={`${textNeutral300} text-center py-12`}>
              No Content Found.
            </div>
          ) : (
            contents.map((content, index) => (
              <div key={index}>
                <Content data={content} language={language} />
              </div>
            ))
          )}
          <Footnote />
        </div>
      </div>

      <div
        className={`fixed bottom-0 w-full ${containerBase} py-1.5 lg:hidden`}
        style={{ zIndex: 1 }}
      >
        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-y-2 w-full max-w-[800px] px-4 pt-1 pb-3">
            {extUrl && (
              <Button style={buttonDefault} to={extUrl} target="_blank" rel="noopener noreferrer" text={extText[language]} fullWidth={true} />
            )}
            {intText2 && (
              <Button style={buttonDefault} to={`/gallery/${slug}`} img={intImg2} text={intText2[language]} fullWidth={true} />
            )}
          </div>
        </div>
      </div>
      <title>{pageTitle}</title>
    </div>
  );
};

export default Article;
