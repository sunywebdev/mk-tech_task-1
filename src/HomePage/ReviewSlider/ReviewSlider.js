import React from "react";
import "./ReviewSlider.css";
import SingleSlide from "./SingleSlide";

const ReviewSlider = () => {
	const data = [
		{
			id: 1,
			title: "POP-UNDER 1",
			text: "Hello, Here will be a text",
			image:
				"https://masterkey-assignment-01.netlify.app/static/media/advertisement.99456113d960ac0b467e.png",
		},
		{
			id: 2,
			title: "POP-UNDER 2",
			text: "Hello, Here will be a text",
			image:
				"https://masterkey-assignment-01.netlify.app/static/media/advertisement.99456113d960ac0b467e.png",
		},
		{
			id: 3,
			title: "POP-UNDER 3",
			text: "Hello, Here will be a text",
			image:
				"https://masterkey-assignment-01.netlify.app/static/media/advertisement.99456113d960ac0b467e.png",
		},
		{
			id: 4,
			title: "POP-UNDER 4",
			text: "Hello, Here will be a text",
			image:
				"https://masterkey-assignment-01.netlify.app/static/media/advertisement.99456113d960ac0b467e.png",
		},
		{
			id: 5,
			title: "POP-UNDER 5",
			text: "Hello, Here will be a text",
			image:
				"https://masterkey-assignment-01.netlify.app/static/media/advertisement.99456113d960ac0b467e.png",
		},
	];
	const [currentSlide, setCurrentSlide] = React.useState(0);
	return (
		<div className='mainPadding reviewSection'>
			<h2>Title 1</h2>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					margin: "2rem 0 ",
				}}>
				{data.map((item) => (
					<div
						className={`${
							currentSlide === item?.id ? "dotActive" : "dot"
						}`}></div>
				))}
			</div>
			<div style={{ display: "flex", justifyContent: "space-around" }}>
				{data.slice(currentSlide, currentSlide + 2).map((item) => (
					<SingleSlide item={item} />
				))}
			</div>
			<div className='sliderButton'>
				<button
					onClick={() => setCurrentSlide(currentSlide > 1 && currentSlide - 1)}>
					{"<"}
				</button>
				<button
					onClick={() =>
						setCurrentSlide(currentSlide < data.length - 2 && currentSlide + 1)
					}>
					{">"}
				</button>
			</div>
		</div>
	);
};

export default ReviewSlider;
