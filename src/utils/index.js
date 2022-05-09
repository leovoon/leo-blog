export const getPostMeta = (posts) => {
	posts.map((post) => {
		// post.image = post._embedded['wp:featuredmedia']?.[0].source_url;
		post.categories = post._embedded['wp:term'][0]?.map((category) => category.name);
		post.author = post._embedded['author'][0]?.name;
	});
	return posts;
};
