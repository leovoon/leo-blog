import { getPostMeta } from '@/utils';

const apiUrl = import.meta.env.VITE_WORDPRESS_API_BASE_PATH + '/posts';
export const GET = async ({ url }) => {
	const query = url.searchParams;
	const searchQuery = query.get('search');
	let queryUrl;
	let posts;

	if (!searchQuery) queryUrl = `${apiUrl}?per_page=100&_embed`;
	else queryUrl = `${apiUrl}?search=${searchQuery}&_embed`;
	const res = await fetch(queryUrl);
	const data = await res.json();
	posts = getPostMeta(data);

	if (posts)
		return {
			status: 200,
			headers: {
				'cache-control': 'public, max-age=60'
			},
			body: { posts, search: searchQuery }
		};
	return { status: 404 };
};
