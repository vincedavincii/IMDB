import Image from "next/image";
import React from "react";
import {HandThumbUpIcon} from "@heroicons/react/24/outline";

const Card = ({item}) => {
	const BASE_URL = "https://image.tmdb.org/t/p/original";
	return (
		<div className="hover:text-white hover:cursor-pointer active:text-yellow-400 p-3 lg:hover:scale-105 transition-transform duration-200ms">
			<Image
				src={BASE_URL + item.backdrop_path}
				height="100"
				width="100"
				layout="responsive"
				alt="movie images"
			/>
			<div className="p-2">
				<p className="truncate text-lg">{item.overview}</p>

				<h2 className=" font-bold text-lg">{item.title || item.name}</h2>

				<p className="flex items-center ">
					{item.release_date || item.first_air_date}{" "}
					<HandThumbUpIcon className="h-5 ml-3 mr-2" />
					{item.vote_count}
				</p>
			</div>
		</div>
	);
};
export default Card;
