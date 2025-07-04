import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import headingSlugs from 'rehype-slug';
import linkHeadings from 'rehype-autolink-headings';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const path_to_layout = join(__dirname, './src/components/Markdown.svelte');


const rehypePlugins = [
	headingSlugs,
	[
		linkHeadings,
		{
			behavior: 'prepend',
			content: {
				type: 'element',
				tagName: 'span',
				properties: {
					className: [
						'mr-1 opacity-20 hover:opacity-60 text-base-100 font-bold inline-block align-middle relative -mt-1 text-sm'
					]
				},
				children: [
					{
						type: 'text',
						value: '#'
					}
				]
			}
		}
	]
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess({ script: true }), mdsvex(
		{
			extensions: ['.svelte.md', '.md'],
			rehypePlugins: rehypePlugins,
			layout: {
				_: path_to_layout
			}
		}
	)],
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
		}
	},
	extensions: ['.svelte', '.svx', ".md"]
};

export default config;
