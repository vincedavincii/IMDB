import {useRouter} from "next/router";
import React from "react";
import requests from "../utils/requests";

const Navbar = () => {
	const router = useRouter();
	return (
		<div className="flex justify-center bg-gray-900 text-gray-400 select-none text-xl lg:text-2xl">
			{Object.entries(requests).map(([key, {title, url}]) => (
				<h2
					className="m-6 cursor-pointer hover:text-white active:text-yellow-500"
					key={key}
					onClick={() => {
						router.push(`?genre=${key}`);
					}}
				>
					{title}
				</h2>
			))}
		</div>
	);
};

export default Navbar;
