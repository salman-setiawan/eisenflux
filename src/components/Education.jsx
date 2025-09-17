import PropTypes from 'prop-types';

const Education = ({ title, role, dateStart, dateEnd }) => {
  return (
    <div>
			<div className="flex flex-col p-4 border-dot-b">
				<div className="text-[14px] font-semibold uppercase">{title}</div>
				<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-0.5 text-[12px] uppercase text-gray-400">
					<div className="font-medium">{role}</div>
					<div className="flex gap-x-2 font-medium">
						<div className='md:text-end md:w-[52px]'>{dateStart}</div>
						<div className=''>⦁</div>
						<div className='md:text-end md:w-[52px]'>{dateEnd}</div>
					</div>
				</div>
			</div>
		</div>
  )
}

Education.propTypes = { 
  title: PropTypes.string, 
  role: PropTypes.string,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string, 
};

Education.defaultProps = { 
  title: null, 
  role: null,  
  dateStart: null, 
  dateEnd: null, 
};

export default Education