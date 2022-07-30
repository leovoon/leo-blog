export const getPostMeta = (posts) => {
	if (!posts.length) return;
	// pick out categories, author, title, content, date, slug, excerpt, tags from posts and return
	return posts.map((post) => {
		post.categories = post._embedded['wp:term'][0]?.map((category) => category.name);
		post.author = post._embedded['author'][0]?.name;
		post.title.rendered = post.title.rendered.replace(/&nbsp;/g, ' ');
		const { id, title, content, date, slug, excerpt, author, categories, tags } = post;
		return {
			id,
			title,
			content,
			date,
			slug,
			excerpt,
			author,
			categories,
			tags
		};
	});
};
