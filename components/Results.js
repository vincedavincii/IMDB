import React from "react";
import Card from "./Card";

const Results = ({results}) => {
	return (
		<div className="bg-black text-gray-400 select-none sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
			{results.map((item) => (
				<Card
					key={item.id}
					item={item}
				/>
			))}
		</div>
	);
};

export default Results;
