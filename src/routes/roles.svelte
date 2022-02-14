<script lang="ts">
	import { encode, decode } from '@msgpack/msgpack';

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

	let output;
</script>

<div class="grid gap-4 justify-center">
	<div>
		<input
			value={data.title}
			class="bg-gray-100 p-2 rounded-md w-96"
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
			class="bg-gray-100 p-2 rounded-md w-96"
			placeholder="Description"
			on:change={(e) => {
				//@ts-ignore
				data.description = e.target.value;
			}}
		/>
	</div>

	<div class="w-auto grid gap-2">
		{#each data.input as input, index}
			<div class="w-auto">
				<p class="dark:text-cyan-100">Button/Field adjust as needed</p>
				<div class="flex gap-1 w-auto">
					<input
						value={input.text}
						class="bg-gray-100 p-2 rounded-md w-auto"
						placeholder="Text"
						on:change={(e) => {
							//@ts-ignore
							input.text = e.target.value;
						}}
					/>
				</div>
				<input
					value={input.role}
					class="bg-gray-100 p-2 rounded-md"
					placeholder="Role"
					on:change={(e) => {
						//@ts-ignore
						input.role = e.target.value;
					}}
				/>
				<button
					class="dark:text-cyan-100"
					on:click={() => {
						data.input[index] = undefined;
						data.input = data.input.filter((x) => x);
					}}>X</button
				>
			</div>
		{/each}
	</div>
	<button
		class="bg-gray-100 p-2 rounded-md"
		on:click={() => {
			data.input = [...data.input, { role: '', text: '' }];
		}}>Add role</button
	>
	{#if data.title != '' && data.input.length != 0}
		<button
			class="bg-gray-100 p-2 rounded-md"
			on:click={() => {
				output = btoa(String.fromCharCode(...encode(data)));

				// Decode console.log(decode([...atob(pp)].map((char) => char.charCodeAt(0))));
			}}>Export</button
		>
	{/if}
	{#if output}
		<div class="prose prose-invert">
			<pre class="break-words w-96"><code class="dark:text-cyan-50 break-words w-96">{output}</code
				></pre>
		</div>
		<button class="bg-gray-100 p-2 rounded-md" on:click={() => (output = undefined)}>Clear</button>
	{/if}
</div>
