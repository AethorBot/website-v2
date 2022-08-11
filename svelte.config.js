import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
import headingSlugs from 'rehype-slug';
import linkHeadings from 'rehype-autolink-headings';

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
	extensions: ['.svelte', '.svelte.md', '.md'],
	onwarn: (warning, handler) => {
		// handler(warning);
	},
	preprocess: [
		preprocess({}),
		mdsvex({
			extensions: ['.svelte.md', '.md'],
			rehypePlugins: rehypePlugins,
			layout: {
				_: 'src/routes/_markdown.svelte'
			}
		})
	],
	target: 'es2020',
	kit: {
		adapter: adapter()
	}
};

export default config;
