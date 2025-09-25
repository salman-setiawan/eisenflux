import PropTypes from 'prop-types';

const Certification = ({ title, company, date }) => {
  return (
    <div>
			<div className="flex flex-col p-4 border-dot-b">
				<div className="text-[14px] font-semibold uppercase">{title}</div>
				<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-0.5">
					<div className="text-[12px] uppercase">{company}</div>
					<div className='md:text-end md:w-[52px] text-[12px] uppercase'>{date}</div>
				</div>
			</div>
		</div>
  )
}

Certification.propTypes = { 
	title: PropTypes.string, 
	company: PropTypes.string,
	date: PropTypes.string,
};

Certification.defaultProps = { 
	title: null, 
	company: null,  
	date: null, 
};

export default Certification