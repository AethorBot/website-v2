<script context="module">
	import Paragraph from '../components/paragraph.svelte';
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

<Paragraph>
	{#if status === 404}
		<h1>404 not found</h1>
		<p>Tried finding the right url :D</p>
	{:else}
		<h1>{title}</h1>
	{/if}
	<p>Here take a frog instead</p>
	<img src="/frog.jpg" alt="frog" />
</Paragraph>
