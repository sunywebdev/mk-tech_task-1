import React from "react";
import "./Banner.css";

const Banner = () => {
	return (
		<div className='mainPadding'>
			<div className='bannerGrid'>
				<div>
					<h1>Here will be a Title</h1>
					<h3>Here will be a text</h3>
				</div>
				<div>
					<img
						style={{ width: "500px", height: "300px" }}
						src='https://masterkey-assignment-01.netlify.app/static/media/advertisement.99456113d960ac0b467e.png'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
