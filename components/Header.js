import Image from "next/image";
import React from "react";
import HeaderIcon from "./HeaderIcon";
import {
	HomeIcon,
	InformationCircleIcon,
	PhoneIcon,
	UserIcon,
} from "@heroicons/react/24/solid";

const Header = ({Icon, Home}) => {
	return (
		<div className="bg-black text-gray-400 flex flex-col items-center p-6 select-none sm:flex-row justify-between">
			<div className="flex">
				<HeaderIcon
					Icon={HomeIcon}
					title="HOME"
				/>
				<HeaderIcon
					Icon={UserIcon}
					title="ACCOUNT"
				/>
				<HeaderIcon
					Icon={PhoneIcon}
					title="CONTACT"
				/>
				<HeaderIcon
					Icon={InformationCircleIcon}
					title="ABOUT"
				/>
			</div>
			<Image
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
				width={100}
				height={100}
				objectFit="contain"
				alt="imdb logo"
				className="cursor-pointer active:brightness-110"
			/>
		</div>
	);
};

export default Header;
