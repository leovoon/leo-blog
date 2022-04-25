import { getPostMeta } from '@/utils';

const url = import.meta.env.VITE_WORDPRESS_API_BASE_PATH + '/posts';
export const get = async ({ params }) => {
	const search = params.search;
	const res = await fetch(`${url}?search=${search}&_embed`);
	const data = await res.json();
	const posts = getPostMeta(data);
	if (posts) return { status: 200, body: { posts } };
	return { status: 404 };
};
