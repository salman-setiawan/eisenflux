const Content = ({ data, language }) => {
  const getBgClasses = (kind) => {
    switch (kind) {
      case 'overview':
        return 'bg-yellow-200/5 border-yellow-200/30 text-yellow-200';
      case 'problem':
        return 'bg-rose-500/5 border-rose-500/30 text-rose-400';
      case 'process':
        return 'bg-yellow-200/5 border-yellow-200/30 text-yellow-200';
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
  const isValidImage = (url) => url && /\.(jpg|jpeg|png|webp)$/i.test(url);
  const hasValidImage = data && isValidImage(data.img);

  const altText = {
    en: "Can't load the image",
    id: "Tidak dapat menggugah gambar",
  };

  if (hasValidImage && !data.textQuote) {
    return (
      <div>
        <img className="text-center text-blue-300 text-sm py-1" src={data.img} alt={altText[language] || ""} />
        <p className="w-full text-center pt-1.5 text-sm text-gray-500"> {data.desc ? data.desc[language] : ""}</p>
      </div>
    );
  }

  // Image rendering
  if (data.kind === 'image') {
    return (
      <div className={`flex flex-col items-center ${getBgClasses(data.kind)}`}>
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
      <div className={`leading-relaxed text-justify px-3 py-2.5 rounded-lg border-2 border-dashed text-[14px] md:text-[15px] ${getBgClasses(data.kind)}`}>
        <div className="font-bold mb-1">
          {data.title ? data.title[language] : (language === 'id' ? 'Proses' : 'Process')}
        </div>
        {data.text && (
          <div className="font-medium text-gray-300 mb-6">{data.text[language]}</div>
        )}
        {Array.isArray(data.steps) && data.steps.length > 0 && (
          <div className="flex flex-col gap-y-1.5">
            {data.steps.map((s, i) => (
              <div key={i} className="font-bold">
                <span className="font-semibold">{s.label?.[language]}</span>
                {s.desc && (
                  <span className="font-medium text-gray-300">{"\u00A0"}{s.desc[language]}</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`leading-relaxed text-justify px-3 py-2.5 border-2 border-dashed rounded-lg text-[14px] md:text-[15px] ${getBgClasses(data.kind)}`}>
      {data.title && (
        <div className="font-bold mb-1">
          {data.title[language]}
        </div>
      )}
      {Array.isArray(data.text) ? (
        <div className="flex flex-col gap-y-2">
          {data.text.map((para, idx) => (
            <span key={idx} className="font-medium text-gray-300">{para?.[language] || para?.en || ''}</span>
          ))}
        </div>
      ) : (
        data.text && (
          <span className="font-medium text-gray-300">{data.text[language]}</span>
        )
      )}
    </div>
  );
};

export default Content;
