const url = import.meta.env.VITE_WORDPRESS_API_BASE_PATH + '/posts';
/** @type {import('./').RequestHandler} */
export const get = async (req) => {
	const search = req.url.search;
	const formattedUrl = `${url}${search === '' ? '?_embed' : search + '&_embed'}`;
	const res = await fetch(`${formattedUrl}`);

	const posts = await res.json();
	posts.map((post) => {
		post.image = post._embedded['wp:featuredmedia']?.[0].source_url;
		post.categories = post._embedded['wp:term'][0]?.map((category) => category.name);
	});
	return {
		status: 200,
		body: { posts }
	};
};
