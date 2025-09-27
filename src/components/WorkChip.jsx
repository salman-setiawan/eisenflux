import PropTypes from 'prop-types';

const WorkChip = ({ label }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-y-2 gap-x-3 w-fit md:items-center">
          <div className="w-[28px] md:w-[14px] h-[10px] md:h-[14px] rounded-lg animate-blink"></div>
        <div className="text-relaxed text-[14px] font-semibold"> {label} </div>
      </div>
    </div>
  )
}

WorkChip.propTypes = { label: PropTypes.string, };
WorkChip.defaultProps = { label: null, };

export default WorkChip