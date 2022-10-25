const API_key = process.env.API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	fetchTrending: {
		title: "Trending",
		url: `/trending/all/week?api_key=${API_key}&language=en-US`,
	},
	fetchTopRated: {
		title: "Top Rated",
		url: `/movie/top_rated?api_key=${API_key}&language=en-US`,
	},
};
