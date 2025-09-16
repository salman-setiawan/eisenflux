import React from 'react'

const Bio = () => {
  return (
    <div>
			<div className="grid grid-cols-2 gap-x-8 px-6 py-8 w-full">
				<div className="uppercase text-xl font-semibold">experiences</div>
				<div className="flex flex-col gap-y-0.5">
					<div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-0.5">
						<div className="flex gap-x-3 lg:order-last text-[12px] uppercase">
							<div>Sept 2025</div>
							<div>⦁</div>
							<div>Present</div>
						</div>
						<div className="text-[20px] font-semibold uppercase">PT. Cipta Lima Sekawan</div>
					</div>
					<div className="text-[12px] uppercase font-medium">Digital Marketing Specialist</div>
				</div>
			</div>
		</div>
  )
}

export default Bio