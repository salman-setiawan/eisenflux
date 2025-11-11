import { Link } from 'react-router-dom';
import Chip from './Chip';
import { cardStyles, defaultButton, paragraphText, smallTitleText, subText } from '../data/uiStyles';
import Button from './Button';

const BioCards = ({ type, title, role, company, year, dateStart, dateEnd, jobdesc, keyWord, language, proof }) => {
  const renderDateRange = () => (
    <div className="flex gap-x-2">
      <div>{dateStart}</div>
      <div>⦁</div>
      <div>{dateEnd}</div>
    </div>
  );

  return (
    <div className={cardStyles}>
      <div className={`${smallTitleText}`}>{title}</div>

      {type === "certification" && (
        <>
          <div className={subText}>{company} ({year})</div>
          {proof && (
            <div className="pt-1">
              <Button to={proof} style={defaultButton} text={language === "en" ? "See Certification Here" : "Lihat Sertifikasi Disini"} />
            </div>
          )}
        </>
      )}

      {type === "experience" && (
        <div className='flex flex-col gap-y-3'>
          <div className={`flex flex-col md:flex-row md:justify-between ${subText}`}>
            <div>{role}</div>
            {renderDateRange()}
          </div>
          {Array.isArray(keyWord) && keyWord.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {keyWord.map((keyword, idx) => (
                <Chip key={idx} label={keyword?.[language]} />
              ))}
            </div>
          )}
          <p className={`${paragraphText}`}>{jobdesc?.[language]}</p>
        </div>
      )}

      {type === "education" && (
        <div className={`flex flex-col ${subText}`}>
          <div>{role}</div>
          {renderDateRange()}
        </div>
      )}

    </div>
  );
};

export default BioCards;
