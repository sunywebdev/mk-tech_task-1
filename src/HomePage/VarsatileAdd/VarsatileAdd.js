import React, { useState } from "react";
import Tab from "./Tab";
import "./VarsatileAdd.css";
import addImg from "../../files/adds.png";

const VarsatileAdd = () => {
	const data = [
		{
			id: 0,
			title: "POP-UNDER",
			text: "This is one of the most popular ads. After user’s click, this ad opens landing page in behind. So, the user experience is not hampered much.",
			image: addImg,
		},
		{
			id: 1,
			title: "BANNER AD",
			text: "Choose between the available banner formats. Highlyeffective ad for visibility.",
			image: addImg,
		},
		{
			id: 2,
			title: "NATIVE",
			text: "Ad format with the image and the title, that perfectly fits intothe content of the site.Native ads are placed in the most visible areas of the pageand, thus, this format shows good results and the level ofinteraction.",
			image: addImg,
		},
		{
			id: 3,
			title: "SKIM",
			text: "SKIM is a link that a publisher inserts on a specific siteelement, and after clicking on it, an advertisement appearsto the user.SKIM gives 100% control of your sold traffic amount, higherCR to advertisers and CPM rates to publishers.",
			image: addImg,
		},
	];
	const [tabs, setTabs] = useState(1);
	return (
		<div className='mainPadding addPage'>
			<div className='dashedLine'>
				<h2>VERSATILE AD FORMATS</h2>
			</div>

			<div className='addButtons'>
				<button
					className={tabs === 0 ? "activeAddButton" : "addButton"}
					onClick={() => setTabs(0)}>
					POP-UNDER
				</button>
				<button
					className={tabs === 1 ? "activeAddButton" : "addButton"}
					onClick={() => setTabs(1)}>
					BANNER AD{" "}
				</button>
				<button
					className={tabs === 2 ? "activeAddButton" : "addButton"}
					onClick={() => setTabs(2)}>
					NATIVE
				</button>
				<button
					className={tabs === 3 ? "activeAddButton" : "addButton"}
					onClick={() => setTabs(3)}>
					SKIM
				</button>
			</div>
			<div>
				<Tab data={data[tabs]} />
			</div>
		</div>
	);
};

export default VarsatileAdd;
