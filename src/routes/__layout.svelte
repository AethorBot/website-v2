<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import '@fontsource/roboto';
	import { DISCORD, INVITE } from '../consts';
	import Paragraph from '../components/paragraph.svelte';
	import Fire from 'svelte-material-icons/Fire.svelte';
	import Home from 'svelte-material-icons/Home.svelte';
	import Book from 'svelte-material-icons/Book.svelte';
	import Feed from 'svelte-material-icons/RouterWirelessSettings.svelte';
	import Roles from 'svelte-material-icons/AccountMultiplePlus.svelte';
	onMount(() => {
		document.documentElement.classList.add('dark');
	});
	const buttons = [
		{
			l: '/',
			n: 'Home',
			i: Home
		},
		{ l: '/premium', n: 'Premium', i: Fire },
		{
			l: '/docs',
			n: 'Wiki',
			i: Book
		},
		{
			l: '/commands',
			n: 'Commands',
			i: Feed
		},
		{
			l: '/roles',
			n: 'Button Roles',
			i: Roles
		}
	];
</script>

<div class="min-h-screen">
	<nav class="w-full gap-2 bg-zinc-900 text-zinc-200 p-4 flex flex-col md:flex-row">
		{#each buttons as button}
			<a
				href={button.l}
				rel={button.l.startsWith('https') ? 'external' : undefined}
				target={button.l.startsWith('https') ? '_blank' : undefined}
				sveltekit:prefetch
				class={`hover:bg-zinc-900 hover:text-zinc-300 dark:hover:bg-zinc-200 dark:hover:text-zinc-900 duration-150 py-1 px-2 text-lg rounded-lg flex align-middle leading-[1em] gap-2 ${
					button.l == '/premium' ? 'animate-pulse-slow' : ''
				}`}
			>
				<svelte:component this={button.i} />
				{button.n}
			</a>
		{/each}
	</nav>
	<main class="">
		<slot />
	</main>
	<footer class="footer p-10 bg-base-300 text-base-content">
		<div>
			<span class="footer-title">Company</span>
			<a class="link link-hover" href={INVITE}>Invite</a>
			<a class="link link-hover" href={DISCORD}>Support</a>
			<a class="link link-hover" href={DISCORD}>Discord</a>
			<a class="link link-hover" href="/docs">Wiki</a>
		</div>
		<div>
			<span class="footer-title">About</span>
			<a class="link link-hover" href="/privacy">Privacy</a>
			<a class="link link-hover" href="/terms">Terms</a>
			<a class="link link-hover" href="/opensource">Opensource</a>
		</div>
		<div>
			<span class="footer-title">Social</span>
			<a class="link link-hover" href="https://top.gg/bot/870383692403593226">Top.gg</a>
			<a class="link link-hover" href="https://discordlist.gg/bot/870383692403593226/vote"
				>Discordlist.gg</a
			>
		</div>
	</footer>
</div>
