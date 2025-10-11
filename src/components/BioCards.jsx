const BioCards = ({ type, title, role, company, date, dateStart, dateEnd, jobdesc, language }) => {
  const renderDateRange = () => (
    <div className="flex gap-x-2">
      <div className="md:text-end md:w-[62px]">{dateStart}</div>
      <div>⦁</div>
      <div className="md:text-end">{dateEnd}</div>
    </div>
  );

  const renderJobDesc = () =>
    Array.isArray(jobdesc) && jobdesc.length > 0 ? (
      <ul className="mt-3 list-disc pl-3 normal-case text-[15px] text-white space-y-1">
        {jobdesc.map((item, idx) => (
          <li key={idx}>{item?.desc?.[language] || item?.desc?.id || ""}</li>
        ))}
      </ul>
    ) : null;

    const layoutStyle ="flex flex-col md:flex-row md:justify-between md:items-center gap-y-0.5 text-[14px] text-white/60 font-medium"

  return (
    <div className="p-4 border-dot-b">
      <div className="font-semibold text-[17px]">{title}</div>

      {type === "certification" ? (
        <div className={`${layoutStyle}`}>
          <div>{company}</div>
          <div className="md:text-end md:w-[62px]">{date}</div>
        </div>
      ) : (
        <>
          <div className={`${layoutStyle}`}>
            <div>{role}</div>
            {renderDateRange()}
          </div>
          {type === "experience" && renderJobDesc()}
        </>
      )}
    </div>
  );
};

export default BioCards;
