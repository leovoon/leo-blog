import { getPostMeta } from '@/utils';

const apiUrl = import.meta.env.VITE_WORDPRESS_API_BASE_PATH + '/posts';
export const get = async ({ url }) => {
	const query = url.searchParams;
	const searchQuery = query.get('search');
	const res = await fetch(`${apiUrl}?search=${searchQuery}&_embed`);
	const data = await res.json();
	const posts = getPostMeta(data);
	if (posts)
		return {
			status: 200,
			headers: {
				'cache-control': 'public, max-age=3600'
			},
			body: { posts, search: searchQuery }
		};
	return { status: 404 };
};