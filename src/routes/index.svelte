<script>
	import Paragraph from '../components/paragraph.svelte';

	import Addbutton from '../components/addbutton.svelte';

	export const ssr = true;
	export const prerender = true;
	export const hydrate = false;
	export const router = false;

	const features = [
		{
			name: 'Suggestions Channel',
			description: 'Every message inside a suggestions channel becomes a suggestion.',
			image: 'suggestions.png'
		},
		{
			name: 'Accepted Channel',
			description: 'You can set a channel for aethor where all accepted suggestions go into',
			image: 'accepted.png'
		},
		{
			name: 'Denied Channel',
			description: 'You can set a channel for aethor where all denied suggestions go into',
			image: 'denied.png'
		},
		{
			name: 'Lots of Suggestions Commands',
			description: 'Theres tons of commands related to suggestions',
			image: 'suggestions-help.png'
		}
	];
</script>

<Paragraph center full>
	<h2>Welcome to the aethor website</h2>
	<p class="italic">The best suggestions bot</p>
</Paragraph>

<div class="w-full">
	{#each features as feature, index}
		<div
			class={`md:flex w-full p-2 ${
				index % 2 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0 md:flex-row-reverse'
			}`}
		>
			<div class="m-auto p-1">
				<h3 class="md:text-7xl text-2xl text-sky-700">{feature.name}</h3>
				<p class="md:text-2xl text-lg dark:text-sky-500 text-blue-800">{feature.description}</p>
			</div>
			<div class="m-auto p-1">
				<img
					class="md:h-96 md:object-cover w-auto h-auto"
					alt={feature.name}
					src={`/features/${feature.image}`}
				/>
			</div>
		</div>
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
