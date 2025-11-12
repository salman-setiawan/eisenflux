import { 
  containerShape, 
  textParagraph, 
  textHeading3,
  textRegular,
  textSemanticWarning,
  textSemanticError,
  textSemanticSuccess,
  bgSemanticWarning,
  bgSemanticError,
  bgSemanticSuccess,
  borderSemanticWarning,
  borderSemanticError,
  borderSemanticSuccess
} from '../data/uiStyles.js';

const Content = ({ data, language, altText }) => {
  const getBgClasses = (kind) => {
    switch (kind) {
      case 'overview':
        return `${bgSemanticWarning} ${borderSemanticWarning} ${textSemanticWarning}`;
      case 'problem':
        return `${bgSemanticError} ${borderSemanticError} ${textSemanticError}`;
      case 'process':
        return `${bgSemanticWarning} ${borderSemanticWarning} ${textSemanticWarning}`;
      case 'impact':
        return `${bgSemanticSuccess} ${borderSemanticSuccess} ${textSemanticSuccess}`;
      case 'keyLearnings':
        return `${bgSemanticSuccess} ${borderSemanticSuccess} ${textSemanticSuccess}`;
      case 'image':
        return 'bg-transparent border-transparent';
      default:
        return 'bg-transparent border-neutral-800';
    }
  };

  // Image rendering
  if (data.kind === 'image') {
    return (
      <div className={`text-justify flex flex-col items-center ${getBgClasses(data.kind)}`}>
        <img 
          className={`w-full max-w-[600px] ${containerShape}`} 
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
      <div className={`text-justify px-3 py-2.5 rounded-lg border-2 border-dashed ${getBgClasses(data.kind)}`}>
        <div className={textHeading3}>
          {data.title[language]}
        </div>
        {data.text && (
          <div className={`${textParagraph} mb-4`}>{data.text[language]}</div>
        )}
        {Array.isArray(data.steps) && data.steps.length > 0 && (
          <div className="flex flex-col gap-y-2">
            {data.steps.map((s, i) => (
              <div key={i}>
                <span className={`font-medium ${textHeading3} ${textRegular}`}>{s.label?.[language]}</span>
                {s.desc && (
                  <span className={textParagraph}>{" "}{s.desc[language]}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`text-justify px-3 py-2.5 border-2 border-dashed rounded-lg ${getBgClasses(data.kind)}`}>
      {data.title && (
        <div className={textHeading3}>
          {data.title[language]}  
        </div>
      )}
      {Array.isArray(data.text) ? (
        <div className="flex flex-col gap-y-2">
          {data.text.map((para, idx) => (
            <span key={idx} className={textParagraph}>{para?.[language] || para?.en || ''}</span>
          ))}
        </div>
      ) : (
        data.text && (
          <span className={textParagraph}>{data.text[language]}</span>
        )
      )}
    </div>
  );
};

export default Content;
