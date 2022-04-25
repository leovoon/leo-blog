import { getPostMeta } from '@/utils';

const url = import.meta.env.VITE_WORDPRESS_API_BASE_PATH + '/posts';
export const get = async ({ params }) => {
	const slug = params.slug;
	const res = await fetch(`${url}?slug=${slug}&_embed`);
	const posts = await res.json();
	const post = getPostMeta(posts)[0];
	if (post) return { status: 200, body: { post } };
	return { status: 404 };
};
