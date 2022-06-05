import React from "react";
import Banner from "./Banner/Banner";
import InfoIcons from "./InfoIcons/InfoIcons";
import ReviewSlider from "./ReviewSlider/ReviewSlider";
import SummaryInfo from "./SummaryInfo/SummaryInfo";
import VarsatileAdd from "./VarsatileAdd/VarsatileAdd";

const HomePage = () => {
	return (
		<div>
			<Banner />
			<InfoIcons />
			<VarsatileAdd />
			<SummaryInfo />
			<ReviewSlider />
		</div>
	);
};

export default HomePage;
