import PropTypes from 'prop-types';

const Chip = ({ label }) => {
  return (
    <div>
      <div className="flex gap-x-1 py-1 px-2 bg-[#ffaa00]/15 w-fit shadow-lg shadow-black/40 border-2 border-[#ffaa00]/30">
        <div className="text-[12px] md:text-[13px] font-medium"> {label} </div>
      </div>
    </div>
  )
}

Chip.propTypes = { label: PropTypes.string, };
Chip.defaultProps = { label: null, };

export default Chip