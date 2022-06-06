import React from "react";
import "./Banner.css";
import img from "../../files/title.png";

const Banner = () => {
	return (
		<div className='mainPadding'>
			<div className='bannerGrid'>
				<div>
					<h1>Here will be a Title</h1>
					<h3>Here will be a text</h3>
				</div>
				<div>
					<img style={{ width: "500px", height: "300px" }} src={img} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Banner;
