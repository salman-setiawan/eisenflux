import { Link } from 'react-router-dom';
import Chip from './Chip';
import { cardStyles, defaultButton, paragraphText, subText } from '../data/uiStyles';
import Button from './Button';

const BioCards = ({ type, title, role, company, date, dateStart, dateEnd, jobdesc, keyWord, language, proof }) => {
  const renderDateRange = () => (
    <div className="flex gap-x-2">
      <div>{dateStart}</div>
      <div>⦁</div>
      <div>{dateEnd}</div>
    </div>
  );

  return (
    <div className={cardStyles}>
      <div className="font-semibold mb-0.5">{title}</div>
      {type === "certification" && (
        <div className="flex flex-col gap-y-0.5">
          <div className={`flex gap-x-1 ${subText}`}>
            <div>{company}</div>
            <div>({date})</div>
          </div>
          {proof &&
            <Button to={proof} text={language === 'en' ? 'See Certification Here' : 'Lihat Sertifikasi Disini'} style={defaultButton} />
          }
        </div>
      )}
      {type === "experience" && (
        <div className='flex flex-col gap-y-3'>
          <div className={`flex flex-col md:flex-row md:justify-between ${subText}`}>
            <div>{role}</div>
            {renderDateRange()}
          </div>
          {Array.isArray(keyWord) && keyWord.length > 0 && (
            <div className="flex flex-wrap gap-2 translate-x-[-1px]">
              {keyWord.map((keyword, idx) => (
                <Chip key={idx} label={keyword?.[language] || keyword?.id || keyword || ""} />
              ))}
            </div>
          )}
          <p className={`${paragraphText}`}>
            {jobdesc?.[language] || jobdesc?.id || ""}
          </p>
        </div>
      )}
      {type === "education" && (
        <div className="flex flex-col gap-y-0.5">
          <div className={`flex flex-col ${subText}`}>
            <div>{role}</div>
            {renderDateRange()}
          </div>
        </div>
      )}
    </div>
  );
};

export default BioCards;
