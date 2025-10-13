import { Link } from 'react-router-dom';
import Chip from './Chip';

const BioCards = ({ type, title, role, company, date, dateStart, dateEnd, jobdesc, keyWord, language, proof }) => {
  const renderDateRange = () => (
    <div className="flex gap-x-2">
      <div className="md:text-end md:w-[62px]">{dateStart}</div>
      <div>⦁</div>
      <div className="md:text-end">{dateEnd}</div>
    </div>
  );

  const renderJobDesc = () => {
    // Render job description text
    const jobDescText = jobdesc?.[language] || jobdesc?.id || "";
    
    // Render keywords as chips
    const renderKeywords = () =>
      Array.isArray(keyWord) && keyWord.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {keyWord.map((keyword, idx) => (
            <Chip 
              key={idx} 
              label={keyword?.[language] || keyword?.id || keyword || ""} 
            />
          ))}
        </div>
      ) : null;

    return (
      <div className="mt-3">
        {renderKeywords()}
        {jobDescText && (
          <p className="text-[15px] text-white/80 mt-3 leading-relaxed">
            {jobDescText}
          </p>
        )}
      </div>
    );
  };

  const layoutStyle ="flex flex-col gap-y-0.5 text-[14px] text-white/60 font-medium"

  return (
    <div className="p-4 border-dot-b">
      <div className="font-semibold text-[17px]">{title}</div>

      {type === "certification" ? (
        <div className={`${layoutStyle}`}>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>{company}</div>
            <div className="md:text-end md:w-[62px]">{date}</div>
          </div>
          {proof &&
            <div className="pt-2.5">
            <Link to={proof} target="_blank" rel="noopener noreferrer">
              <button className="px-2 py-1 text-[13px] text-[#ffaa50] bg-[#ffaa50]/20 w-fit rounded-md font-semibold cursor-pointer">
                {language === 'en' ? 'See Certification Here' : 'Lihat Sertifikasi Disini'}
              </button>
            </Link>
          </div>
          }
        </div>
      ) : (
        <>
          <div className={`${layoutStyle}`}>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>{role}</div>
              {renderDateRange()}
            </div>
          </div>
          {type === "experience" && renderJobDesc()}
        </>
      )}
    </div>
  );
};

export default BioCards;
