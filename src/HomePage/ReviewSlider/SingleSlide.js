import React from "react";

const SingleSlide = ({ item }) => {
	return (
		<div>
			<div className='review'>
				<div className='reviewGrid'>
					<div>
						<img
							style={{ width: "200px", height: "200px" }}
							src={item?.image}
							alt=''
						/>
					</div>
					<div className='reviewRetails'>
						<h4>{item?.title}</h4>
						<h3>{item?.text}</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleSlide;
