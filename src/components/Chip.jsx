import PropTypes from 'prop-types';

const Chip = ({ label }) => {
  return (
    <div>
      <div className="flex py-1 px-2 bg-neutral-700/40 w-fit border-2 border-neutral-700">
        <div className="text-[12px] md:text-[13px] font-medium"> {label} </div>
      </div>
    </div>
  )
}

Chip.propTypes = { label: PropTypes.string, };
Chip.defaultProps = { label: null, };

export default Chip