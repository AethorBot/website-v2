<script>
	import '@fontsource/aldrich';
	import { onMount } from 'svelte';
	import '../app.css';
	import Paragraph from '../components/paragraph.svelte';

	onMount(() => {
		if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});

	function theme() {
		if (localStorage.theme !== 'dark') {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
		} else {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
		}
	}
	const buttons = [
		{
			l: '/',
			n: 'Home'
		},
		{
			l: 'https://aethor.tricked.pro/',
			n: 'Wiki'
		},
		{
			l: '/privacy',
			n: 'Privacy'
		},
		{
			l: '/terms',
			n: 'Terms'
		},
		{
			l: '/commands',
			n: 'Commands'
		},
		{
			l: '/roles',
			n: 'Button Roles'
		}
	];
</script>

<nav
	class="w-full gap-2 bg-sky-600 dark:bg-slate-900 dark:text-sky-200 p-4 text-sky-200 flex flex-col md:flex-row"
>
	{#each buttons as button}
		<a
			href={button.l}
			class="hover:border-sky-900 hover:rounded-xl duration-300 py-1 px-2 text-lg border-2 border-sky-500 rounded-md"
			>{button.n}</a
		>
	{/each}

	<button
		class="md:last:ml-auto py-1 px-2 text-lg border-2 border-sky-500 rounded-md dark:hover:text-sky-600 hover:text-sky-900 duration-200"
		on:click={theme}>Change theme</button
	>
</nav>
<slot id="top" />
<div class="sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition">
	<div class="text-gray-400 hover:text-blue-400 transition p-2">
		<a href="#top">Scroll to top</a>
	</div>
</div>
<footer class="w-full bg-sky-500 dark:bg-sky-900 p-4">
	<Paragraph>
		<p>
			<a href="https://top.gg/bot/870383692403593226">Top.gg</a>
			<a href="https://discord.gg/zwUQGAG4cP">Support/Discord</a>
		</p>
	</Paragraph>
</footer>
