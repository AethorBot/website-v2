<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status: status,
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	export const ssr = true;
	export const prerender = true;
	export const hydrate = false;
	export const router = false;
	export let title;
	export let status;
</script>

<article
	class="prose-headings:underline spac p-4 prose lg:prose-xl prose-teal dark:prose-invert prose-headings:text-green-500 dark:prose-headings:text-green-400 prose-p:text-emerald-900 dark:prose-p:text-lime-200 prose-a:text-red-900 dark:prose-a:text-red-500"
>
	{#if status === 404}
		<h1>404 not found</h1>
		<p>Tried finding the right url :D</p>
	{:else}
		<h1>{title}</h1>
	{/if}
	<p>Here take a frog instead</p>
	<img src="/frog.jpg" alt="frog" />
</article>
