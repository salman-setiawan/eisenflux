import PropTypes from 'prop-types';

const WorkChip = ({ label }) => {
  return (
    <div>
      <div className="flex gap-x-2 p-1 rounded-lg bg-[#111111] w-fit items-center">
          <div className="w-[12px] h-[12px] bg-green-500 rounded-lg animate-blink"></div>
        <div className="text-relaxed text-[14px] font-medium"> {label} </div>
      </div>
    </div>
  )
}

WorkChip.propTypes = { label: PropTypes.string, };
WorkChip.defaultProps = { label: null, };

export default WorkChip