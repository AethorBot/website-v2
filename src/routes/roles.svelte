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

<div class="grid gap-4 justify-center">
	<label class="container break-words w-96 bg-gray-100 p-2 rounded-md">
		<input type="checkbox" checked={true} on:change={() => (data.dropdown = !data.dropdown)} />
		Dropdown?
	</label>
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
		{#if data.input.length != 0}
			<p class="dark:text-cyan-100">Button/Field adjust as needed</p>
		{/if}
		{#each data.input as input, index}
			<div class="w-auto grid gap-2">
				<div class="flex gap-1 w-auto flex-col">
					<input
						value={input.text}
						class="bg-gray-100 p-2 rounded-md w-auto"
						placeholder="Text"
						on:input={(e) => {
							//@ts-ignore
							input.text = e.target.value;
						}}
					/>
				</div>
				<div class="flex gap-1 w-auto flex-row">
					<input
						value={input.role}
						class="bg-gray-100 p-2 rounded-md w-auto"
						placeholder="Role"
						minlength={15}
						maxlength={22}
						on:input={(e) => {
							//@ts-ignore
							input.role = e.target.value.toString().replace(/[^0-9]+/g, '') || '';
						}}
					/>
					<div class="flex justify-center">
						<button
							class="dark:text-cyan-100 bg-orange-600 p-2 px-4 rounded-md ml-auto"
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
		class="bg-gray-100 p-2 rounded-md"
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
		class="bg-gray-100 p-2 rounded-md disabled:bg-gray-400 disabled:text-gray-800"
		disabled={!buttonEnabled}
		on:click={() => {
			output = btoa(String.fromCharCode(...encode(data)));
		}}>Export</button
	>
	{#if output && buttonEnabled}
		<div class="prose prose-invert">
			<pre class="break-words w-96"><code class="dark:text-cyan-50 break-words w-96">{output}</code
				></pre>
		</div>
		<button class="bg-gray-100 p-2 rounded-md" on:click={() => (output = undefined)}>Clear</button>
	{/if}
</div>
