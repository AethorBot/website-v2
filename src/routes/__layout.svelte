<script>
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
<!--  Add "sticky top-0 z-50" to class below for sticky nav -->
<nav 
	class="w-full gap-2 bg-zinc-300 dark:bg-zinc-900 dark:text-zinc-200 p-4 text-slate-900 flex flex-col md:flex-row"
>
	{#each buttons as button}
		<a
			href={button.l}
			class="hover:bg-zinc-900 hover:text-zinc-300 dark:hover:bg-zinc-200 dark:hover:text-zinc-900 duration-150 py-1 px-2 text-lg rounded-lg"
			>{button.n}</a
		>
	{/each}

	<button
		class="md:last:ml-auto hover:bg-zinc-900 hover:text-zinc-300 dark:hover:bg-zinc-200 dark:hover:text-zinc-900 duration-150 py-1 px-2 text-lg rounded-lg"
		on:click={theme}>Change theme</button
	>
</nav>
<slot id="top" />
<div class="sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition duration-150">
	<a href="#top"><div class="text-gray-400 hover:text-slate-400 hover:bg-slate-800 transition duration-150 p-2 rounded-lg">
		Top
	</div></a>
</div>
<footer class="w-full bg-gradient-to-t from-zinc-300 to-slate-300 dark:from-zinc-900 dark:to-slate-900 p-4">
	<Paragraph>
		<p>
			<a href="https://top.gg/bot/870383692403593226" class="hover:bg-zinc-900 hover:text-zinc-300 dark:hover:bg-zinc-200 dark:hover:text-zinc-900 duration-150 py-1 px-2 text-lg rounded-lg">
				Top.gg
			</a>
			<a href="https://discord.gg/zwUQGAG4cP" class="hover:bg-zinc-900 hover:text-zinc-300 dark:hover:bg-zinc-200 dark:hover:text-zinc-900 duration-150 py-1 px-2 text-lg rounded-lg">
				Support/Discord
			</a>
		</p>
	</Paragraph>
</footer>
