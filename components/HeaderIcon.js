import React from "react";

const HeaderIcon = ({Icon, title}) => {
	return (
		<div className="mx-4 flex flex-col hover:text-white hover:cursor-pointer active:text-yellow-500 lg:mx-6">
			<Icon className="h-6" />
			<p className="my-2">{title}</p>
		</div>
	);
};

export default HeaderIcon;
