const Content = ({ data, language }) => {
  const isValidImage = (url) => url && /\.(jpg|jpeg|png|webp)$/i.test(url);
  const hasValidImage = data && isValidImage(data.img);

  const altText = {
    en: "Can't load the image",
    id: "Tidak dapat menggugah gambar",
  };

  if (hasValidImage && !data.textQuote) {
    return (
      <div>
        <img
          className="text-center text-blue-300 text-sm py-1"
          src={data.img}
          alt={altText[language] || ""}
        />
        <p className="w-full text-center pt-1.5 text-sm text-gray-500">
          {data.desc ? data.desc[language] : ""}
        </p>
      </div>
    );
  }

  if (Array.isArray(data.textQuote)) {
    return (
      <div className="py-2.5">
        <div className="border-l-4 border-[#ffaa00] pl-4 py-0.5 leading-relaxed text-justify flex flex-col gap-y-4">
          {data.textQuote.map((item, idx) => {
            if (item.type === "text" && item.value[language]) {
              return (
                <div key={idx} className="text-[15px] text-gray-300">
                  {item.value[language]}
                </div>
              );
            }
            if (item.type === "image" && isValidImage(item.value)) {
              return (
                <img
                  key={idx}
                  className="text-sm text-center text-blue-300 mb-4"
                  src={item.value}
                  alt={altText[language] || ""}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="leading-relaxed text-justify">
      {data.title && (
        <div className="font-semibold text-2xl pt-6 pb-3">
          {data.title[language]}
        </div>
      )}
      {data.text && (
        <div className="text-[15px] text-gray-300 py-2">{data.text[language]}</div>
      )}
    </div>
  );
};

export default Content;
