import React from "react";
import "./NavBar.css";

const NavBar = () => {
	const urls = [
		{
			id: 0,
			url: "/",
			name: "HOME",
		},
		{
			id: 1,
			url: "/ADVERTISERS",
			name: "ADVERTISERS",
		},
		{
			id: 2,
			url: "/publishers",
			name: "PUBLISHERS",
		},
		{
			id: 3,
			url: "/INFLUENCERS",
			name: "INFLUENCERS",
		},
		{
			id: 4,
			url: "/ad",
			name: "AD FORMATS",
		},
		{
			id: 5,
			url: "/blog",
			name: "BLOG",
		},
		{
			id: 6,
			url: "/contact",
			name: "CONTACT US",
		},
	];
	const [isOpen, setIsOpen] = React.useState("signUp");
	const [en, setEn] = React.useState(true);

	return (
		<div className='NavPadding '>
			<div className='navTop'>
				<div>
					{" "}
					<h1>LOGO</h1>{" "}
				</div>
				<div style={{ cursor: "pointer" }}>
					<h5>
						<span
							onClick={() => setEn(true)}
							className={en === true ? "active" : ""}>
							BN{" "}
						</span>{" "}
						/{" "}
						<span
							onClick={() => setEn(false)}
							className={en === false ? "active" : ""}>
							EN{" "}
						</span>
					</h5>
				</div>
			</div>
			<div className='navButtons'>
				<div className='navLinks'>
					{urls?.map((url) => (
						<h5 key={url?.id}>
							<a href={url?.url}>{url?.name}</a>
						</h5>
					))}
				</div>
				<div className='userLogin'>
					<button
						className={isOpen === "login" ? "activeUserLogin" : "btn"}
						onClick={() => setIsOpen("login")}>
						LOGIN
					</button>
					<button
						className={isOpen === "signUp" ? "activeUserLogin" : "btn"}
						onClick={() => setIsOpen("signUp")}>
						SIGN UP
					</button>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
