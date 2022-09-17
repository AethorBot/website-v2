<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session, params, fetch }) => {
		console.log(params);
		if (!session.user) {
			return {
				status: 307,
				redirect: '/login'
			};
		}
		return {
			props: { user: session.user, server: params.server }
		};
	};
</script>

<script lang="ts">
	const data = {
		image: null,
		embed: null,
		description: null,
		color: null,
		title: null,
		footer: null,
		topics: null,
		ping: null,
		ticket_embed: null,
		ticket_title: null,
		ticket_description: null,
		channel: null
	};
	export let user;
	export let server: string;
</script>

<div class="m-4 bg-base-200 p-4 h-min">
	<div class="form-control w-full max-w-xs">
		<input bind:value={data.image} type="text" placeholder="image" class="input rounded-sm" />
		<p>Embed</p>
		<input bind:value={data.embed} type="checkbox" class="toggle" checked />
		<input
			bind:value={data.description}
			type="text"
			placeholder="description"
			class="input rounded-sm"
		/>
		<input bind:value={data.color} type="text" placeholder="color" class="input rounded-sm" />
		<input bind:value={data.title} type="text" placeholder="title" class="input rounded-sm" />
		<input bind:value={data.footer} type="text" placeholder="footer" class="input rounded-sm" />
		<input bind:value={data.topics} type="text" placeholder="topics" class="input rounded-sm" />
		<input bind:value={data.ping} type="text" placeholder="ping" class="input rounded-sm" />
		<input
			bind:value={data.ticket_embed}
			type="text"
			placeholder="ticket_embed"
			class="input rounded-sm"
		/>
		<input
			bind:value={data.ticket_title}
			type="text"
			placeholder="ticket_title"
			class="input rounded-sm"
		/>
		<input
			bind:value={data.ticket_description}
			type="text"
			placeholder="ticket_description"
			class="input rounded-sm"
		/>
		<input bind:value={data.channel} type="text" placeholder="channel" class="input rounded-sm" />
		<button
			class="btn btn-primary"
			on:click={() => {
				fetch(`/api/guild/${server}`, {
					method: 'PATCH',
					body: JSON.stringify({ ...data, t: 2 })
				});
			}}>Submit</button
		>
	</div>
</div>
