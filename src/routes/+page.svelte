<script lang="ts">
	import Seo from '../components/Seo.svelte';
	export let data;
	let { servers, stats } = data as { servers: Record<string, any>[]; stats: any };
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
	let isPaused = false;
</script>

<Seo />

<!-- Hero Section -->
<div
	class="bg-gradient-to-b from-zinc-300 to-slate-300 py-72 text-center dark:from-zinc-900 dark:to-slate-900"
>
	<h1 class="py-2 text-4xl text-zinc-900 dark:text-zinc-100">Welcome to the Aethor website</h1>
	<p class="py-2 text-xl text-zinc-900 dark:text-zinc-100">
		<b>The best suggestions bot</b>
	</p>
</div>

<!-- Invite Button -->
<div class="z-50 mt-10 flex justify-center">
	<a
		class="btn btn-primary btn-xl rounded p-4 px-4 py-2 text-center text-2xl font-bold text-white duration-150 hover:bg-sky-800"
		href="/invite"
		target="_blank"
		id="download"
	>
		Add Aethor. {#if stats?.numbers?.guilds}
			Aethor is in {stats?.numbers?.guilds} servers
		{/if}
	</a>
</div>

<!-- Scrolling Server List -->
<div
	class="server-carousel mt-20"
	aria-hidden={true}
	on:mouseover={() => (isPaused = true)}
	on:focus={() => (isPaused = true)}
	on:mouseout={() => (isPaused = false)}
	on:blur={() => (isPaused = false)}
>
	<div class="carousel-track" class:paused={isPaused}>
		{#each [...(servers ?? []), ...(servers ?? [])] as server (server.id + Math.random())}
			<div class="server-card bg-base-300">
				<div class="flex">
					<img class="server-icon" src={server.icon} alt={server.name} />
					<div class="server-info">
						<p class="server-name">{server.name}</p>
						<p class="server-count">{server.memberCount}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<!-- Features Section -->
{#each features as feature, index}
	<div
		class={`my-10 h-100 w-full p-2 md:flex ${
			index % 2 ? 'text-right md:mr-0 md:ml-auto' : 'md:mr-auto md:ml-0 md:flex-row-reverse'
		}`}
	>
		<div class="m-auto p-4">
			<h3 class="py-3 text-2xl text-zinc-900 md:text-5xl dark:text-zinc-200">
				<b>{feature.name}</b>
			</h3>
			<p class="text-lg text-zinc-800 md:text-2xl dark:text-zinc-400">{feature.description}</p>
		</div>
		<div class="m-auto p-1">
			<img
				class="h-auto w-auto rounded-xl md:h-96 md:object-cover"
				alt={feature.name}
				src={`/features/${feature.image}`}
			/>
		</div>
	</div>
{/each}

<!-- Final CTA Button -->
<div class="my-16 flex justify-center">
	<a
		class="btn btn-primary btn-xl rounded p-4 px-4 py-2 text-center text-2xl font-bold text-white duration-150 hover:bg-sky-800"
		href="/invite"
		target="_blank"
		id="download"
	>
		Add Aethor
	</a>
</div>

<style>
	.server-carousel {
		overflow: hidden;
		position: relative;
		width: 100%;
	}

	.carousel-track {
		display: flex;
		width: max-content;
		animation: scroll-left 40s linear infinite;
		will-change: transform;
	}

	.carousel-track.paused {
		animation-play-state: paused;
	}

	.server-card {
		min-width: 16rem;
		padding: 1rem;
		margin: 0.5rem;
		border-radius: 0.25rem;
		display: inline-block;
	}

	.server-icon {
		height: 3.5rem;
		width: 3.5rem;
		object-fit: cover;
		border-radius: 0.375rem;
		margin-right: 0.5rem;
	}

	.server-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.server-name {
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 10rem;
	}

	.server-count {
		color: #999;
		font-size: 0.875rem;
	}

	@keyframes scroll-left {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
