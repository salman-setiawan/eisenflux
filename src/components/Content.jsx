import { 
  containerShape, 
  articleHeading,
  textSemanticWarning,
  textSemanticError,
  textSemanticSuccess,
  textParagraphArticle,
} from '../data/uiStyles.js';

const Content = ({ data, language, altText }) => {
  const getBgClasses = (kind) => {
    switch (kind) {
      case 'overview':
        return textSemanticWarning;
      case 'problem':
        return textSemanticError;
      case 'process':
        return textSemanticWarning;
      case 'impact':
        return textSemanticSuccess;
      case 'keyLearnings':
        return textSemanticSuccess;
      default:
        return 'bg-transparent';
    }
  };

  // Image rendering
  if (data.kind === 'image') {
    return (
      <img className={`w-full max-w-[720px] ${containerShape}`} src={data.img} alt={data.alt ? data.alt[language] : altText[language]}loading="lazy" />
    );
  }

  if (data.kind === 'gallery') {
    return (
      <div className='flex flex-col items-center gap-y-2'>
        {Array.isArray(data.items) && data.items.length > 0 && (
          data.items.map((item, i) => {
            if (item.type === 'image') {
              return (
                <img key={i} className={`w-full max-w-[720px] ${containerShape}`} src={item.src} alt={item.alt && item.alt[language] ? item.alt[language] : 'gallery image'} loading="lazy" />
              );
            }
            if (item.type === 'video') {
              return (
                <video key={i} className={`w-full max-w-[720px] ${containerShape}`} src={item.src} autoPlay loop muted playsInline preload="none" />
              );
            }
            return null;
          })
        )}
      </div>
    );
  }
  
  

  // Combined Process Card rendering
  if (data.kind === 'process') {
    return (
      <div className={`${getBgClasses(data.kind)} text-justify`}>
        <div className={`${articleHeading} mb-1`}> {data.title[language]} </div>
        {data.text && (
          <div className={`${textParagraphArticle} mb-4`}>{data.text[language]}</div>
        )}
        {Array.isArray(data.steps) && data.steps.length > 0 && (
          <div className="flex flex-col gap-y-2">
            {data.steps.map((s, i) => (
              <div key={i}>
                <span className={articleHeading}>{s.label?.[language]}</span>
                <span className={textParagraphArticle}>{" "}{s.desc[language]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${getBgClasses(data.kind)} text-justify`}>
      {data.title && (
        <div className={`${articleHeading} mb-1`}>
          {data.title[language]}  
        </div>
      )}
      {Array.isArray(data.text) ? (
        <div className="flex flex-col gap-y-2">
          {data.text.map((para, idx) => (
            <span key={idx} className={textParagraphArticle}>{para?.[language]}</span>
          ))}
        </div>
      ) : (
        data.text && (
          <span className={textParagraphArticle}>{data.text[language]}</span>
        )
      )}
    </div>
  );
};

export default Content;
