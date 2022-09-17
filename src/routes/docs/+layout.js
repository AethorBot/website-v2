import { page } from '$app/stores';

export async function load({ params, fetch }) {
	const allPostFiles = import.meta.glob('../docs/**/*.svelte.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			//@ts-ignore -
			const { metadata } = await resolver();
			let slug;

			if (path.includes('./+page.svelte.md')) {
				slug = '/docs';
			} else {
				slug = '/docs/' + path.split('/')[1];
			}

			return {
				meta: metadata,
				slug: slug
			};
		})
	);
	return {
		docs: allPosts
	};
}
export const prerender = true;
