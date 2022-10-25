import React from "react";

const Footer = () => {
	return (
		<div className="py-2 bottom-0  bg-black">
			<p className="text-gray-400 text-center text-sm">
				Copyright &copy; {new Date().getFullYear()} Vincent
			</p>
		</div>
	);
};

export default Footer;
