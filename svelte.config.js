import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'@': path.resolve('./src')
				}
			},
			optimizeDeps: ['svelte-lazy-image']
		}
	}
};

export default config;
