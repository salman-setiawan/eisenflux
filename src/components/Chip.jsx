import PropTypes from 'prop-types';

const Chip = ({ label }) => {
  return (
    <div>
      <div className="flex gap-x-1 py-1 pl-1.5 pr-2 rounded-lg bg-[#111111] w-fit">
        <img className='w-[18px]' src="folder.svg" alt="icon" />
        <div className="text-relaxed text-[13px] text-gray-400 font-medium"> {label} </div>
      </div>
    </div>
  )
}

Chip.propTypes = { label: PropTypes.string, };
Chip.defaultProps = { label: null, };

export default Chip