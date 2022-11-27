import { getPostMeta } from '@/utils';
import type { PageServerLoad } from './$types';
const url = import.meta.env.VITE_WORDPRESS_API_BASE_PATH + '/posts';

export const load: PageServerLoad = async ({ setHeaders, fetch }) => {
	const res = await fetch(`${url}?_embed`);
	if (res.ok) {
		setHeaders({
			'cache-control': 'public, max-age=1800'
		});
	}
	const data = await res.json();
	const posts = getPostMeta(data);
	if (posts) {
		return {
			posts
		};
	}
};
