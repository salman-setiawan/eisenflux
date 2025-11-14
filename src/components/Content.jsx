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
        return ` ${textSemanticWarning}`;
      case 'problem':
        return ` ${textSemanticError}`;
      case 'process':
        return ` ${textSemanticWarning}`;
      case 'impact':
        return ` ${textSemanticSuccess}`;
      case 'keyLearnings':
        return ` ${textSemanticSuccess}`;
      case 'image':
        return 'bg-transparent';
      default:
        return 'bg-transparent';
    }
  };

  // Image rendering
  if (data.kind === 'image') {
    return (
      <div className={`text-justify flex flex-col items-center ${getBgClasses(data.kind)}`}>
        <img 
          className={`w-full max-w-[720px] ${containerShape}`} 
          src={data.img} 
          alt={data.alt ? data.alt[language] : altText[language]}
          loading="lazy"
        />
      </div>
    );
  }

  // Combined Process Card rendering
  if (data.kind === 'process') {
    return (
      <div className={`text-justify ${getBgClasses(data.kind)}`}>
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
    <div className={`text-justify ${getBgClasses(data.kind)}`}>
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
