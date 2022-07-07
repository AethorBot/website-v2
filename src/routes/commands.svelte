<script context="module" lang="ts">
	import type { APIApplicationCommand } from 'discord-api-types/v10';
	export async function load({ params, fetch, session, stuff }) {
		const url = `/api/commands.json`;
		const response = await fetch(url);
		let res = response.ok && ((await response.json()) as APIApplicationCommand[]);
		let commands: (APIApplicationCommand & Record<string, any>)[] = [];
		const duped = [];
		if (res) {
			for (let command of res) {
				if (command.options?.[0]?.type == 1) {
					commands.push(
						//@ts-ignore -
						...command.options.map((x) => ({
							...x,
							name: `${command.name} ${x.name}`,
							//@ts-ignore -
							premium: command.premium
						}))
					);
				} else {
					let dupe = res.find((x) => x.name == command.name && x.type != command.type);
					if (dupe && !duped.includes(dupe.name)) {
						duped.push(dupe.name);
						commands.push({
							...command,
							types: [dupe.type, command.type]
						});
					}
					if (duped.includes(command.name)) {
						continue;
					}
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
