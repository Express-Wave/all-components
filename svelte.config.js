import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: 'index.html',
			runtime: 'nodejs18.x' // or 'nodejs20.x'
		}),
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
