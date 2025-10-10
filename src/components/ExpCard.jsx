import BioData from '../data/bio.js'; 
import { useLanguage } from '../data/languageContext.jsx';

const ExpCard = () => {
  const { language } = useLanguage();
  const experienceData = BioData[0].experience;
  const displayedExperiences = experienceData.slice(0, 3);

  return (
    <div className="w-full px-3 pt-3 pb-4 border-2 border-neutral-800">
      <h2 className="font-bold mb-3 text-[#ffaa50]">experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8">
        {displayedExperiences.map((exp) => (
          <div key={exp.uid} className="w-full flex md:flex-col gap-y-2 gap-x-3">
            <p className="text-[12px] font-semibold hidden md:block">
              {exp.dateEnd}
            </p>
            <div className="pt-1.5 md:pt-0">
              <div className="bg-[#ffaa50] rounded-full w-[13px] h-[13px]"></div>
            </div>
            <div>
              <h3 className="font-semibold text-sm truncate">{exp.title}</h3>
              <p className="text-[13px] truncate">
                {exp.role?.[language] || exp.role?.id}
              </p>
              <p className="text-[13px] block md:hidden">
                {exp.dateEnd}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpCard;
