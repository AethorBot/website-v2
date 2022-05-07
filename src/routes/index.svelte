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
			description: 'Every message sent in a set channel becomes a suggestion, courtesy of Aethor.',
			image: 'suggestions.png'
		},
		{
			name: 'Accepted Channel',
			description: 'You can set a channel in which to send all accepted suggestions for Aethor.',
			image: 'accepted.png'
		},
		{
			name: 'Denied Channel',
			description: 'You can set a channel in which to send all denied suggestions for Aethor.',
			image: 'denied.png'
		},
		{
			name: 'Customizeability',
			description: 'There are many suggestion-related commands.',
			image: 'suggestions-help.png'
		}
	];
</script>


<div class="py-72 bg-gradient-to-b dark:from-zinc-900 dark:to-slate-900 text-center">
	<h1 class="text-4xl text-zinc-100 py-2">
		Welcome to the Aethor website
	</h1>
	<p class="text-xl text-zinc-100 py-2"><b>
		The best suggestions bot
	</b></p>
</div>

<div class="w-full">
	{#each features as feature, index}
		<div
			class={`md:flex w-full p-2 bg-zinc-800 my-10 ${
				index % 2 ? 'md:ml-auto md:mr-0 text-right' : 'md:mr-auto md:ml-0 md:flex-row-reverse'
			}`}
		>
			<div class="m-auto p-4">
				<h3 class="md:text-5xl text-2xl dark:text-zinc-200 text-sky-700 py-3"><b>{feature.name}</b></h3>
				<p class="md:text-2xl text-lg dark:text-zinc-400 text-blue-800">{feature.description}</p>
			</div>
			<div class="m-auto p-1">
				<img
					class="md:h-96 md:object-cover w-auto h-auto rounded-xl"
					alt={feature.name}
					src={`/features/${feature.image}`}
				/>
			</div>
		</div>
	{/each}
</div>
<div class="flex justify-center">
	<a
		class={'hover:text-teal-100 bg-blue-800 text-white border-blue-900 border-4 p-4 text-2xl hover:bg-sky-800 hover:border-sky-900 duration-200 md:duration-700 text-center bg-blue hover:bg-blue-light font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded'}
		href="https://discord.com/oauth2/authorize?client_id=870383692403593226&permissions=117824&scope=bot%20applications.commands"
		target="_blank"
	>
		Add Aethor</a
	>
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
