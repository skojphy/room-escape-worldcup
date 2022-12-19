import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import "./static/style.scss";`
		}
	}),

	kit: {
		adapter: adapter(),
		alias: {
			'@': path.resolve('./src')
		}
	}
};

export default config;
