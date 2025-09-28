import PropTypes from 'prop-types';

const Chip = ({ label }) => {
  return (
    <div>
      <div className="flex gap-x-1 py-1 px-2 bg-[#ffaa00]/50 w-fit shadow-lg shadow-black/40">
        <div className="text-[12px] font-semibold"> {label} </div>
      </div>
    </div>
  )
}

Chip.propTypes = { label: PropTypes.string, };
Chip.defaultProps = { label: null, };

export default Chip