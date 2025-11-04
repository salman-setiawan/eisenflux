import { paragraphText } from '../data/uiStyles.js';

const Content = ({ data, language }) => {
  const getBgClasses = (kind) => {
    switch (kind) {
      case 'overview':
        return 'bg-yellow-300/5 border-yellow-400/30 text-yellow-400';
      case 'problem':
        return 'bg-rose-500/5 border-rose-500/30 text-rose-400';
      case 'process':
        return 'bg-yellow-300/5 border-yellow-400/30 text-yellow-400';
      case 'impact':
        return 'bg-emerald-400/5 border-emerald-400/30 text-emerald-400';
      case 'keyLearnings':
        return 'bg-emerald-400/5 border-emerald-400/30 text-emerald-400';
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
          className="w-full max-w-[600px] rounded-lg shadow-lg" 
          src={data.img} 
          alt={data.alt ? data.alt[language] : altText[language]} 
        />
        {data.desc && (
          <p className="w-full text-center pt-3 text-sm text-gray-400 max-w-[600px]">
            {data.desc[language]}
          </p>
        )}
      </div>
    );
  }

  // Combined Process Card rendering
  if (data.kind === 'process') {
    return (
      <div className={`text-justify px-3 py-2.5 rounded-lg border-2 border-dashed ${getBgClasses(data.kind)}`}>
        <div className="font-semibold mb-1 text-[14px] md:text-[15px]">
          {data.title[language]}
        </div>
        {data.text && (
          <div className={`${paragraphText} mb-4`}>{data.text[language]}</div>
        )}
        {Array.isArray(data.steps) && data.steps.length > 0 && (
          <div className="flex flex-col gap-y-2">
            {data.steps.map((s, i) => (
              <div key={i}>
                <span className="font-medium text-[14px] md:text-[15px]">{s.label?.[language]}</span>
                {s.desc && (
                  <span className={paragraphText}>{" "}{s.desc[language]}</span>
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
        <div className="font-semibold mb-1 text-[14px] md:text-[15px]">
          {data.title[language]}  
        </div>
      )}
      {Array.isArray(data.text) ? (
        <div className="flex flex-col gap-y-2">
          {data.text.map((para, idx) => (
            <span key={idx} className={paragraphText}>{para?.[language] || para?.en || ''}</span>
          ))}
        </div>
      ) : (
        data.text && (
          <span className={paragraphText}>{data.text[language]}</span>
        )
      )}
    </div>
  );
};

export default Content;
