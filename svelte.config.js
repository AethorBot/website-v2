import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { VitePWA } from 'vite-plugin-pwa';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({}), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter({ split: false }),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#main',
		vite: {
			plugins: [
				VitePWA({
					includeAssets: ['favicon.svg', 'favicon.png', 'favicon.jpg', 'frog.jpg', 'robots.txt'],
					manifest: {
						name: 'Aethoe website',
						short_name: 'Aethor',
						description: 'Aethor is the best suggestions bot',
						theme_color: '#0EC5FF',
						background_color: '#0EC5FF',
						icons: [
							{
								src: 'favicon.png',
								sizes: '512x512',
								type: 'image/png'
							}
						]
					}
				})
			]
		}
	}
};

export default config;
