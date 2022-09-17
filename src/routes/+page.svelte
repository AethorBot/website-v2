<script lang="ts">
	import Paragraph from '../components/paragraph.svelte';
	import { Parallax, ParallaxLayer } from 'svelte-parallax';
	import { INVITE } from '../consts';
	import Seo from '../components/Seo.svelte';
	export let data;
	let { servers, stats } = data as { servers: Record<string, any>[]; stats: any };

	export const ssr = true;
	export const prerender = true;
	export const hydrate = false;
	export const router = false;

	const features = [
		{
			name: 'Suggestions Channel',
			description: 'Every message sent in a set channel becomes a suggestion, courtesy of Aethor.',
			image: 'Suggestion.png'
		},
		{
			name: 'Accepted Channel',
			description: 'You can set a channel in which to send all accepted suggestions for Aethor.',
			image: 'Accepted.png'
		},
		{
			name: 'Denied Channel',
			description: 'You can set a channel in which to send all denied suggestions for Aethor.',
			image: 'Denied.png'
		}
	];
</script>

<Seo />

<Parallax
	sections={features.length + 6}
	config={{ stiffness: 0.2, damping: 1 }}
	sectionHeight={300}
>
	<ParallaxLayer rate={0.5} span={2}>
		<div
			class="py-72 bg-gradient-to-b from-zinc-300 to-slate-300 dark:from-zinc-900 dark:to-slate-900"
		>
			<div class="text-center">
				<h1 class="text-4xl text-zinc-900 dark:text-zinc-100 py-2">
					Welcome to the Aethor website
				</h1>
				<p class="text-xl text-zinc-900 dark:text-zinc-100 py-2">
					<b> The best suggestions bot </b>
				</p>
			</div>
		</div>
	</ParallaxLayer>

	<ParallaxLayer rate={1.25} span={5} offset={1.1}>
		<div class="flex justify-center z-50">
			<a
				class={'text-white p-4 text-2xl hover:bg-sky-800 duration-150 text-center font-bold py-2 px-4 rounded'}
				href={INVITE}
				target="_blank"
				id="download"
			>
				Add Aethor. Aethor is in {stats.numbers.guilds} servers
			</a>
		</div>
	</ParallaxLayer>
	<ParallaxLayer rate={1.1} span={3} offset={2}>
		<div
			class="flex servers horizontal pausing animate mt-40"
			style="animation-duration: 20s; animation-delay: .5s; animation-iteration-count: infinite;"
		>
			{#each servers as server}
				<div class="max-w-md p-4 bg-base-300 m-2 rounded-sm first">
					<div class="flex">
						<img height="128" class="h-14 rounded-md mr-2" src={server.icon} alt={server.name} />
						<div>
							<span class="flex gap-1">
								<p class="font-bold truncate max-w-md w-40">{server.name}</p>
							</span>
							<p class="text-gray-600">{server.memberCount}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</ParallaxLayer>
	{#each features as feature, index}
		<ParallaxLayer rate={1.25} offset={3 + index} span={1}>
			<div
				class={`md:flex w-full p-2 my-10 h-100 ${
					index % 2 ? 'md:ml-auto md:mr-0 text-right' : 'md:mr-auto md:ml-0 md:flex-row-reverse'
				}`}
			>
				<div class="m-auto p-4">
					<h3 class="md:text-5xl text-2xl dark:text-zinc-200 text-zinc-900 py-3">
						<b>{feature.name}</b>
					</h3>
					<p class="md:text-2xl text-lg dark:text-zinc-400 text-zinc-800">{feature.description}</p>
				</div>
				<div class="m-auto p-1">
					<img
						class="md:h-96 md:object-cover w-auto h-auto rounded-xl"
						alt={feature.name}
						src={`/features/${feature.image}`}
					/>
				</div>
			</div>
		</ParallaxLayer>
	{/each}

	<ParallaxLayer offset={features.length + 4}>
		<div class="flex justify-center">
			<a
				class={'text-white p-4 text-2xl hover:bg-sky-800 duration-150 text-center font-bold py-2 px-4 rounded'}
				href={INVITE}
				target="_blank"
				id="download"
			>
				Add Aethor</a
			>
		</div>
	</ParallaxLayer>
</Parallax>

<style>
	.servers {
		transform: translateZ(0);
	}
	.horizontal.servers {
		display: inline-block;
		white-space: nowrap;
	}
	.horizontal.servers > * {
		display: inline-block !important;
	}
	.animate.servers {
		animation-timing-function: linear;
	}
	.pausing.servers:hover {
		animation-play-state: paused;
	}
	.animate.horizontal.servers {
		animation-name: servers-horizontal;
	}
	@keyframes servers-horizontal {
		0% {
			transform: translate(0);
		}
		to {
			transform: translate(-50%);
		}
	}
</style>
