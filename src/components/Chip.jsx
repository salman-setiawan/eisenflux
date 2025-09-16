import PropTypes from 'prop-types';

const Chip = ({ label }) => {
  return (
    <div>
      <div className="flex gap-x-1 py-1 px-2 rounded-lg bg-[#ffaa00]/25 w-fit">
        {/* <img className='w-[18px]' src="folder.svg" alt="icon" /> */}
        <div className="text-[12px] font-semibold"> {label} </div>
      </div>
    </div>
  )
}

Chip.propTypes = { label: PropTypes.string, };
Chip.defaultProps = { label: null, };

export default Chip