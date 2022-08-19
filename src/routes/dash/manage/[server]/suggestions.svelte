<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ session, params, fetch }) => {
		if (!session.user) {
			return {
				status: 307,
				redirect: '/login'
			};
		}
		const guild = await fetch(`/api/guild/${params.server}`);
		return {
			props: { user: session.user, guild: await guild.json() }
		};
	};
</script>

<script lang="ts">
	let editing: any;
	let logging: string;
	export let guild: Record<string, any>;
	const update = {
		new_channel: null,
		denied: null,
		accepted: null
	};
</script>

<div class="m-4 bg-base-200 p-4 h-min">
	<div class="form-control w-full max-w-xs">
		{#if editing}
			<label class="text-sm text-gray-600"
				>{guild.channels.find((x) => x.id == editing.channel)?.name || editing.channel}
			</label>
			<label class="label">
				<span class="label-text">Pick a suggestions channel</span>
			</label>
			<select class="select select-bordered rounded-none" bind:value={update.new_channel}>
				<option disabled selected value="">Select a channel</option>
				{#each guild.channels as channel}
					<option value={channel.id}>{channel.name}</option>
				{/each}
			</select>
			<label class="label">
				<span class="label-text">Pick a denied channel</span>
			</label>
			<select class="select select-bordered rounded-none" bind:value={update.denied}>
				<option value="">None</option>
				{#each guild.channels as channel}
					<option value={channel.id}>{channel.name}</option>
				{/each}
			</select>
			<label class="label">
				<span class="label-text">Pick a accepted channel</span>
			</label>
			<select class="select select-bordered rounded-none" bind:value={update.accepted}>
				<option value="">None</option>
				{#each guild.channels as channel}
					<option value={channel.id}>{channel.name}</option>
				{/each}
			</select>
			<button
				on:click={async () => {
					await fetch(`/api/guild/${guild.id}`, {
						method: 'PATCH',
						body: JSON.stringify({
							t: 0,
							old_channel: editing.channel,
							...update
						})
					});

					editing = undefined;
					update.accepted = null;
					update.denied = null;
					update.new_channel = null;
				}}
				class="btn btn-primary my-1">Edit</button
			>
			<button on:click={() => (editing = undefined)} class="btn my-1">Stop</button>
		{:else}
			<label class="text-sm text-gray-600">Edit Setup</label>
			{#each guild.suggestion_setups as setup}
				<button on:click={() => (editing = setup)}
					>{guild.channels.find((x) => x.id == setup.channel)?.name || setup.channel}</button
				>
			{/each}
		{/if}
	</div>
</div>
<div class="m-4 bg-base-200 p-4 h-min">
	<div class="form-control w-full max-w-xs">
		<label class="text-sm text-gray-600">Logging Channel</label>
		<select class="select select-bordered rounded-none" bind:value={logging}>
			{#if guild.suggestions_logs}
				<option selected value={guild.suggestions_logs}
					>{guild.channels.find((x) => x.id == guild.suggestions_logs)?.name ||
						guild.suggestions_logs}</option
				>
			{:else}
				<option disabled selected value="">Select a channel</option>
			{/if}
			{#each guild.channels as channel}
				<option value={channel.id}>{channel.name}</option>
			{/each}
		</select>
		<button
			on:click={async () => {
				await fetch(`/api/guild/${guild.id}`, {
					method: 'PATCH',
					body: JSON.stringify({
						t: 1,
						suggestions_logs: logging
					})
				});
				guild.suggestions_logs = logging;
			}}
			class="btn btn-primary my-1">Edit</button
		>
		<button
			on:click={async () => {
				await fetch(`/api/guild/${guild.id}`, {
					method: 'PATCH',
					body: JSON.stringify({
						t: 1,
						suggestions_logs: null
					})
				});
				guild.suggestions_logs = null;
				logging = null;
			}}
			class="btn btn-primary my-1">Remove</button
		>
	</div>
</div>
