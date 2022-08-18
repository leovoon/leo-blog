import { getPostMeta } from '@/utils';

const url = import.meta.env.VITE_WORDPRESS_API_BASE_PATH + '/posts';
/** @type {import('./').RequestHandler} */
export const GET = async () => {
	const res = await fetch(`${url}?_embed`);
	const data = await res.json();
	const posts = getPostMeta(data);
	return {
		status: 200,
		headers: {
			'cache-control': 'public, max-age=3600'
		},
		body: { posts }
	};
};
