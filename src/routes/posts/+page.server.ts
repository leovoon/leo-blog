import { getPostMeta } from '@/utils';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const apiUrl = import.meta.env.VITE_WORDPRESS_API_BASE_PATH + '/posts';
export const load: PageServerLoad = async ({ url, setHeaders, fetch }) => {
	const query = url.searchParams;
	const searchQuery = query.get('search');
	let queryUrl;
	let posts;

	if (!searchQuery) queryUrl = `${apiUrl}?per_page=100&_embed`;
	else queryUrl = `${apiUrl}?search=${searchQuery}&_embed`;
	const res = await fetch(queryUrl);
	const data = await res.json();
	posts = getPostMeta(data);

	if (posts) {
		setHeaders({
			'cache-control': 'public, max-age=1800'
		});
		return {
			posts,
			search: searchQuery
		};
	}
	throw error(404, 'Not found');
};
