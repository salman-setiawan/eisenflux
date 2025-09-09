import PropTypes from "prop-types";

const Content = ({ data, language }) => {
  const isValidImage = (url) => url && /\.(jpg|jpeg|png|webp)$/i.test(url);
  const hasValidImage = data && isValidImage(data.img);

  const altText = {
    en: "Can't load the image",
    id: "Tidak dapat menggugah gambar",
  };

  if (hasValidImage && !data.textQuote) {
    return (
      <div className="py-2">
        <img
          className="text-center text-blue-300 text-sm"
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
      <div className="border-l-4 border-[#ffaa00] pl-4 py-1 leading-relaxed text-justify">
        {data.textQuote.map((item, idx) => {
          if (item.type === "text" && item.value[language]) {
            return (
              <div key={idx} className="text-[15px] text-gray-300 mb-4">
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
        <div className="text-[15px] text-gray-300">{data.text[language]}</div>
      )}
    </div>
  );
};

Content.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    desc: PropTypes.object,
    title: PropTypes.object,
    text: PropTypes.object,
    textQuote: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(["text", "image"]).isRequired,
        value: PropTypes.oneOfType([
          PropTypes.object, // untuk text { en, id }
          PropTypes.string, // untuk image URL
        ]).isRequired,
      })
    ),
  }),
  language: PropTypes.string.isRequired,
};

Content.defaultProps = {
  data: {
    img: null,
    desc: null,
    title: null,
    text: null,
    textQuote: null,
  },
};

export default Content;
