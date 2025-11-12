import Chip from './Chip';
import { cardStyles, buttonDefault, textParagraph, textSubSemi, textHeading3 } from '../data/uiStyles';
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
      <div className={`${textHeading3}`}>{title}</div>

      {type === "certification" && (
        <>
          <div className={`${textSubSemi} pb-1`}>{company} ({year})</div>
          {proof && (
            <Button to={proof} style={buttonDefault} text={language === "en" ? "See Certification Here" : "Lihat Sertifikasi Disini"} />
          )}
        </>
      )}

      {type === "experience" && (
        <div className='space-y-3'>
          <div className={`flex flex-col md:flex-row md:justify-between ${textSubSemi}`}>
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
          <p className={textParagraph}>{jobdesc?.[language]}</p>
        </div>
      )}

      {type === "education" && (
        <div className={textSubSemi}>
          <div>{role}</div>
          {renderDateRange()}
        </div>
      )}

    </div>
  );
};

export default BioCards;
