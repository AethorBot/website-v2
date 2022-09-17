<script context="module">
</script>

<script>
	import Paragraph from '../components/paragraph.svelte';
	import { page } from '$app/stores';
</script>

<Paragraph>
	{#if $page.status === 404}
		<h1>404 not found</h1>
		<p>Tried finding the right url :D</p>
	{:else}
		<h1>{$page.error.message}</h1>
	{/if}
	<p>Here take a frog instead</p>
	<img src="/frog.jpg" alt="frog" />
</Paragraph>
