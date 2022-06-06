import React from "react";
import "./ReviewSlider.css";
import SingleSlide from "./SingleSlide";
import img from "../../files/review.png";

const ReviewSlider = () => {
	const data = [
		{
			id: 1,
			title: "Title 1",
			text: "Hello, Here will be a text",
			image: img,
		},
		{
			id: 2,
			title: "Title 2",
			text: "Hello here will be another text",
			image: img,
		},
		{
			id: 3,
			title: "Title 3",
			text: "Hello here will be another text",
			image: img,
		},
		{
			id: 4,
			title: "Title 4",
			text: "Hello, Here will be a text",
			image: img,
		},
		{
			id: 5,
			title: "Title 5",
			text: "Hello, Here will be a text",
			image: img,
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
