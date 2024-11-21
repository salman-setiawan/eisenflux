
const Content = ({ data }) => {
  const isValidImage = (url) => {
    return url && /\.(jpg|jpeg|png|webp)$/i.test(url);
  };

  const hasValidImage = data && isValidImage(data.img);

  return (
    <div>
      {hasValidImage ? (
        <div>
          <img className="w-full rounded-xl" src={data.img} alt="image" />
          <p className="pt-1.5 text-sm text-gray-500">{data.desc}</p>
        </div>
      ) : (
        <div className="text-[15px] leading-relaxed text-justify">
          {data}
        </div>
      )}
    </div>
  );
};

export default Content;
