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
	import { encode } from '@msgpack/msgpack';

	interface ButtonRole {
		dropdown: boolean;
		description: string;
		title: string;
		input: {
			text: string;
			role: string;
		}[];
	}
	$: data = {
		dropdown: true,
		description: '',
		title: '',
		input: []
	} as ButtonRole;
	export let guild: Record<string, any>;

	let output;
	$: buttonEnabled =
		data.title != '' &&
		data.input.length != 0 &&
		!data.input.find((x) => x.role == '') &&
		!data.input.find((x) => x.text == '');
	$: {
		if (output || buttonEnabled) {
			output = btoa(String.fromCharCode(...encode(data)));
		}
	}
</script>

<div>
	<div class="grid gap-4 justify-center">
		<!-- <label
			class="container break-words w-96 p-2 rounded-md label cursor-pointer bg-base-200"
			disabled
		>
			<input
				type="checkbox"
				class="checkbox checkbox-secondary"
				checked={false}
				disabled
				on:change={() => (data.dropdown = !data.dropdown)}
			/>
			Dropdown?
		</label> -->
		<div>
			<input
				value={data.title}
				class="p-2 rounded-md w-96 input input-bordered input-secondary bg-primary"
				placeholder="Title"
				on:change={(e) => {
					//@ts-ignore
					data.title = e.target.value;
				}}
			/>
		</div>
		<div>
			<textarea
				value={data.description}
				class="p-2 rounded-md w-96 input input-bordered input-secondary bg-primary"
				placeholder="Description"
				on:change={(e) => {
					//@ts-ignore
					data.description = e.target.value;
				}}
			/>
		</div>

		<div class="w-auto grid gap-2">
			{#if data.input.length != 0}
				<p class="">Button/Field adjust as needed</p>
			{/if}
			{#each data.input as input, index}
				<div class="w-auto grid gap-2">
					<div class="flex gap-1 w-auto flex-col">
						<input
							value={input.text}
							class="bg-base-200 p-2 rounded-md w-auto input input-bordered input-secondary"
							placeholder="Text"
							on:input={(e) => {
								//@ts-ignore
								input.text = e.target.value;
							}}
						/>
					</div>
					<div class="flex gap-1 w-auto flex-row">
						<select class="select select-bordered rounded-none" bind:value={input.role}>
							<option value="">None</option>
							{#each guild.roles as role}
								<option value={role.id}>{role.name}</option>
							{/each}
						</select>

						<div class="flex justify-center">
							<button
								class="dark:text-cyan-100 bg-orange-600 p-2 px-4 rounded-md ml-auto btn"
								on:click={() => {
									data.input[index] = undefined;
									data.input = data.input.filter((x) => x);
								}}>X</button
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<button
			class="bg-base-200 p-2 rounded-md"
			on:click={() => {
				data.input = [...data.input, { role: '', text: '' }];
			}}>Add role</button
		>

		<p class="dark:text-cyan-100">
			{#if data.title == ''}
				Title empty
			{:else if data.input.length == 0}
				No roles found
			{:else if !buttonEnabled}
				Empty roles detected
			{/if}
		</p>
		<button
			class="bg-base-200 p-2 rounded-md disabled:bg-gray-400 disabled:text-gray-800"
			disabled={!buttonEnabled}
			on:click={() => {
				output = btoa(String.fromCharCode(...encode(data)));
			}}>Export</button
		>
		{#if output && buttonEnabled}
			<div class="prose prose-invert">
				<pre class="break-words w-96"><code class="dark:text-cyan-50 break-words w-96"
						>{output}</code
					></pre>
			</div>
			<button class="bg-base-200 p-2 rounded-md" on:click={() => (output = undefined)}>Clear</button
			>
		{/if}
	</div>
</div>
