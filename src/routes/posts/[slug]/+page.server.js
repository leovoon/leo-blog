import { getPostMeta } from '@/utils';
import { error } from '@sveltejs/kit';
const url = import.meta.env.VITE_WORDPRESS_API_BASE_PATH + '/posts';
export const load = async ({ params, setHeaders }) => {
	const slug = params.slug;
	const res = await fetch(`${url}?slug=${slug}&_embed`);
	const posts = await res.json();
	const post = getPostMeta(posts)[0];
	if (post) {
		setHeaders({
			'cache-control': 'public, max-age=3600'
		});
		return {
			post
		};
	}
	throw error(404, 'Not found');
};
