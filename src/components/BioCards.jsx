const BioCards = ({ type, title, role, company, date, dateStart, dateEnd }) => {
  const renderContent = () => {
    switch (type) {
      case "certification":
        return (
          <div className="flex flex-col p-4 border-dot-b uppercase">
            <div className="text-[14px] font-semibold uppercase">{title}</div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-0.5 text-[12px] text-white/60 font-medium">
              <div className="">{company}</div>
              <div className="md:text-end md:w-[52px]">{date}</div>
            </div>
          </div>
        );

      case "education":
        return (
          <div className="flex flex-col p-4 border-dot-b uppercase">
            <div className="text-[14px] font-semibold uppercase">{title}</div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-0.5 text-[12px] text-white/60 font-medium">
              <div className="">{role}</div>
              <div className="flex gap-x-2">
                <div className="md:text-end md:w-[52px]">{dateStart}</div>
                <div className="">⦁</div>
                <div className="md:text-end md:w-[52px]">{dateEnd}</div>
              </div>
            </div>
          </div>
        );

      case "experience":
        return (
          <div className="flex flex-col p-4 border-dot-b uppercase">
            <div className="text-[14px] font-semibold">{title}</div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-0.5 text-[12px] text-white/60 font-medium">
              <div className="">{role}</div>
              <div className="flex gap-x-2">
                <div className="md:text-end md:w-[52px]">{dateStart}</div>
                <div className="">⦁</div>
                <div className="md:text-end md:w-[52px]">{dateEnd}</div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <>{renderContent()}</>;
};

export default BioCards;
