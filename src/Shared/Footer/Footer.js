import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className='mainPadding'>
			<div className='footerFlex'>
				<div className='footerCol'>
					<h4>We are social</h4>
					<h4>FOLLOW US</h4>
					<div style={{ display: "flex" }}>
						<svg
							className='instagram'
							aria-hidden='true'
							focusable='false'
							data-prefix='fab'
							data-icon='instagram'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 448 512'>
							<path
								fill='currentColor'
								d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
						</svg>
						<svg
							className='facebook'
							aria-hidden='true'
							focusable='false'
							data-prefix='fab'
							data-icon='facebook'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'>
							<path
								fill='currentColor'
								d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z'></path>
						</svg>
						<svg
							className='youtube'
							aria-hidden='true'
							focusable='false'
							data-prefix='fab'
							data-icon='youtube'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 576 512'>
							<path
								fill='currentColor'
								d='M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z'></path>
						</svg>
					</div>
					<h2>LOGO</h2>
				</div>
				<div className='footerCol'>
					<h4>Links</h4>
					<h4>ADVERTISERS</h4>
					<h4>PUBLISHERS</h4>
					<h4>INFLUENCERS</h4>
					<h4>AD FORMATS</h4>
				</div>
				<div className='footerCol'>
					<h4>Documentation</h4>
					<h4>TERMS & CONDITIONS</h4>
					<h4>PRIVACY POLICY </h4>
					<h4>CANCELLATION POLICY</h4>
					<h4>BLOG</h4>
				</div>
				<div className='footerCol'>
					<h4>Support</h4>
					<h4>FAQ</h4>
					<h4>MEDIA KIT</h4>
					<h4>CONTACT US</h4>
				</div>
			</div>
		</div>
	);
};

export default Footer;
