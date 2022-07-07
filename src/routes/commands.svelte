<script context="module" lang="ts">
	import type { APIApplicationCommand } from 'discord-api-types/v10';
	export async function load({ params, fetch, session, stuff }) {
		const url = `/api/commands.json`;
		const response = await fetch(url);
		let res = response.ok && ((await response.json()) as APIApplicationCommand[]);
		let commands: APIApplicationCommand[] = [];
		if (res) {
			for (let command of res) {
				if (command.options?.[0]?.type == 1) {
					commands.push(
						//@ts-ignore -
						...command.options.map((x) => ({ ...x, name: `${command.name} ${x.name}`, premium: command.premium })),
					);
				} else {
					commands.push(command);
				}
			}
		}
		return {
			status: response.status,
			props: {
				commands
			}
		};
	}
</script>

<script lang="ts">
	import CommandItem from '../components/commandItem.svelte';
	export let commands: APIApplicationCommand[];
</script>

<div class="px-4 py-4">
	<div class="grid grid-cols-1 gap-4 py-2">
		{#each commands as command}
			<CommandItem {...command} />
		{/each}
	</div>
</div>
