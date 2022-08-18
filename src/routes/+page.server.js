import { getPostMeta } from '@/utils';

const url = import.meta.env.VITE_WORDPRESS_API_BASE_PATH + '/posts';
/** @type {import('./').PageServerLoad} */
export const load = async ({ setHeaders }) => {
	const res = await fetch(`${url}?_embed`);
	const data = await res.json();
	const posts = getPostMeta(data);
	if (posts) {
		setHeaders({
			'cache-control': 'public, max-age=3600'
		});
		return {
			posts
		};
	}
};
