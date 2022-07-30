import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		port: 4000
	},
	resolve: {
		alias: {
			'@': path.resolve('./src')
		}
	},
	optimizeDeps: {
		include: ['highlight.js']
	}
};

export default config;
