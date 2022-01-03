<script>
	import Paragraph from '../components/paragraph.svelte';

	import Mediaquery from '../components/mediaquery.svelte';
	import Addbutton from '../components/addbutton.svelte';

	export const ssr = true;
	export const prerender = true;
	export const hydrate = false;
	export const router = false;

	const features = [
		{
			name: 'suggestions channel',
			description: 'Every message inside a suggestions channel becomes a suggestion.',
			image: 'suggestions.png'
		},
		{
			name: 'accepted channel',
			description: 'You can set a channel for aethor where all accepted suggestions go into',
			image: 'accepted.png'
		},
		{
			name: 'denied channel',
			description: 'You can set a channel for aethor where all denied suggestions go into',
			image: 'denied.png'
		},
		{
			name: 'Lots of suggestion commands',
			description: 'Theres tons of commands related to suggestions',
			image: 'suggestions-help.png'
		}
	];
</script>

<Paragraph>
	<h2>Welcome to the aethor website</h2>
	<p class="italic">The best suggestions bot</p>
</Paragraph>

<div class="w-full">
	{#each features as feature, index}
		<Mediaquery query="(max-width: 1024px)" let:matches>
			{#if matches}
				<div
					class={'md:flex lg:flex !prose-headings:text-black rounded-3xl w-full p-2 ml-auto mr-0'}
				>
					<div class="m-auto">
						<h3 class="text-7xl text-green-500">{feature.name}</h3>
						<p class="text-2xl dark:text-green-600 text-blue-800">{feature.description}</p>
					</div>
					<div class="m-auto">
						<img class="h-96 object-cover" alt={feature.name} src={`/features/${feature.image}`} />
					</div>
				</div>
			{:else}
				<div
					class={'md:flex lg:flex !prose-headings:text-black rounded-3xl w-full p-2' +
						(index % 2 ? 'ml-auto mr-0' : 'mr-auto ml-0')}
				>
					{#if index % 2}
						<div class="m-auto">
							<h3 class="text-7xl text-green-500">{feature.name}</h3>
							<p class="text-2xl dark:text-green-600 text-blue-800">{feature.description}</p>
						</div>
						<div class="m-auto">
							<img
								class="h-96 object-cover"
								alt={feature.name}
								src={`/features/${feature.image}`}
							/>
						</div>
					{:else}
						<div class="m-auto">
							<img
								class="h-96 object-cover"
								alt={feature.name}
								src={`/features/${feature.image}`}
							/>
						</div>
						<div class="m-auto">
							<h3 class="text-7xl text-green-500">{feature.name}</h3>
							<p class="text-2xl dark:text-green-600 text-blue-800">{feature.description}</p>
						</div>
					{/if}
				</div>
			{/if}
		</Mediaquery>
	{/each}
</div>
<div class="flex justify-center">
	<Addbutton size="xxxl" />
</div>

<Paragraph>
	<!-- <p>
		<a
			href="https://discord.com/oauth2/authorize?client_id=870383692403593226&permissions=117824&scope=bot%20applications.commands"
			>Invite aethor</a
		> now
	</p>
	<img src="/frog.jpg" alt="frog" /> -->
</Paragraph>
