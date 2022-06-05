import React from "react";
import "./SummaryInfo.css";

const SummaryInfo = () => {
	return (
		<div className='summaryBg'>
			<h2>Title 1</h2>
			<div className='mainPadding'>
				<div className='summaryGrid'>
					<div className='circle1'>
						<h1>1 BN+</h1>
						<h4>Daily Impressions</h4>
					</div>
					<div className='circle2'>
						<h1>$500K+</h1>
						<h4>Paid</h4>
					</div>
					<div className='circle3'>
						<h1>8K+</h1>
						<h4>Global Publishers</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SummaryInfo;
