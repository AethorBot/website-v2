<script>
	import '@fontsource/aldrich';
	import Addbutton from '../components/addbutton.svelte';
	import { onMount } from 'svelte';
	import '../app.css';

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
</script>

<nav class="w-full bg-slate-500 dark:bg-slate-900 dark:text-green-200 p-4 text-green-400">
	<button
		class="p-2 text-lg border-2 border-green-500 rounded-md dark:hover:text-lime-600 hover:text-green-900 duration-200"
		on:click={theme}>Change theme</button
	>
	<a
		href="/"
		class="hover:border-emerald-900 hover:rounded-xl duration-300 p-2 text-lg border-2 border-green-500 rounded-md"
		>Home</a
	>
	<a
		href="/privacy"
		class="hover:border-emerald-900 hover:rounded-xl duration-300 p-2 text-lg border-2 border-green-500 rounded-md"
		>Privacy</a
	>
	<a
		href="/terms"
		class="hover:border-emerald-900 hover:rounded-xl duration-300 p-2 text-lg border-2 border-green-500 rounded-md"
		>Terms</a
	>
	<a
		href="/commands"
		class="hover:border-emerald-900 hover:rounded-xl duration-300 p-2 text-lg border-2 border-green-500 rounded-md"
		>Commands</a
	>
</nav>
<slot />
<footer class="w-full bg-slate-400 dark:bg-zinc-900 p-4">
	<div
		class="p-4 prose lg:prose-xl prose-teal dark:prose-invert prose-headings:text-green-500 dark:prose-headings:text-green-400 prose-p:text-emerald-900 dark:prose-p:text-lime-200 prose-a:text-red-900 dark:prose-a:text-red-500"
	>
		<p>
			<a href="https://top.gg/bot/870383692403593226">Top.gg</a>
			<a href="https://discord.gg/zwUQGAG4cP">Support/Discord</a>
		</p>
	</div>
	<div class="p-2">
		<Addbutton />
	</div>
</footer>
