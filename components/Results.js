import React from "react";

const Results = ({results}) => {
	return (
		<div>
			{results.map((item) => (
				<h1 key={item.title}>{item.title}</h1>
			))}
		</div>
	);
};

export default Results;
