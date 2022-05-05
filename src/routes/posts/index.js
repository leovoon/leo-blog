import { getPostMeta } from '@/utils';

const apiUrl = import.meta.env.VITE_WORDPRESS_API_BASE_PATH + '/posts';
export const get = async ({ url }) => {
	const query = url.searchParams;
	const searchQuery = query.get('search');
	console.log(searchQuery);
	const res = await fetch(`${apiUrl}?search=${searchQuery}&_embed`);
	const data = await res.json();
	const posts = getPostMeta(data);
	if (posts) return { status: 200, body: { posts } };
	return { status: 404 };
};
