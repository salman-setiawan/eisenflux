import PropTypes from 'prop-types';

const Content = ({ data, language }) => {
  const isValidImage = (url) => {
    return url && /\.(jpg|jpeg|png|webp)$/i.test(url);
  };

  const hasValidImage = data && isValidImage(data.img);

  return (
    <div>
      {hasValidImage ? (
        <div className='py-2'>
          <img className="w-full" src={data.img} alt={data.desc ? data.desc[language] : 'image'} />
          <p className="w-full text-center pt-1.5 text-sm text-gray-500">{data.desc ? data.desc[language] : ''}</p>
        </div>
      ) : (
        <div className="leading-relaxed text-justify">
          {data.title && <div className="font-semibold text-xl pb-2"> {data.title[language]} </div>}
          {data.text && <div className="text-[15px] text-gray-300"> {data.text[language]} </div>}
        </div>
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
  }),
  language: PropTypes.string.isRequired,
};

Content.defaultProps = {
  data: {
    img: null,
    desc: null,
    title: null,
    text: null,
  },
};

export default Content;
