<script lang="ts">
	import type { APIApplicationCommand } from 'discord-api-types/v10';
	import { ApplicationCommandOptionType, ApplicationCommandType } from 'discord-api-types/v10';
	import ToolTip from './ToolTip.svelte';
	export let name = '';
	export let options: APIApplicationCommand['options'] = [];
	export let type: ApplicationCommandType;
	export let description = '';
	export let premium = false;
	let tool;
</script>

<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200 rounded-box">
	<input type="checkbox" class="peer" />
	<div class="collapse-title bg-base-200 text-primary-content">
		<span class="text-xl" id={name}>
			<a href={`#${name}`}>
				/{name}
			</a>
		</span>
		<span class="badge rounded-sm ml-auto">
			{type == ApplicationCommandType.ChatInput
				? 'Slash'
				: ApplicationCommandType.Message
				? 'Message Context'
				: 'User Context'}
		</span>
		{#if premium}
			<span class="badge rounded-sm ml-auto badge-primary"> Premium </span>
		{/if}
	</div>

	<div class="collapse-content">
		<p>{description}</p>
		{#if type == ApplicationCommandType.ChatInput}
			<span>
				<div class="flex gap-2">
					<span>/{name}</span>
					{#each options as x}
						<button on:click={() => (tool == x.description ? (tool = '') : (tool = x.description))}
							>{x.required ? `[${x.name}]` : `<${x.name}>`}</button
						>
					{/each}
				</div>
			</span>
		{/if}
		<div class="">
			<pre>{tool || ''}</pre>
		</div>
	</div>
</div>
