<script lang="ts">
	enum ApplicationCommandType {
		ChatInput = 1,
		User = 2,
		Message = 3
	}
	interface APIApplicationCommand {
		id: string;
		type: ApplicationCommandType;
		application_id: string;
		guild_id?: string;
		name: string;
		name_localized?: string;
		description: string;
		description_localized?: string;
		options?: any[];
		default_member_permissions: Permissions | null;
		dm_permission?: boolean;
		default_permission?: boolean;
		version: string;
	}
	import ToolTip from './ToolTip.svelte';
	export let name = '';
	export let options: APIApplicationCommand['options'] = [];
	export let type: ApplicationCommandType;
	export let types: ApplicationCommandType[] = [];
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

		{#if types.length != 0}
			{#each types as type}
				<span class="badge rounded-sm mx-1">
					{type == ApplicationCommandType.ChatInput
						? 'Slash'
						: ApplicationCommandType.Message
						? 'Message Context'
						: 'User Context'}
				</span>
			{/each}
		{:else}
			<span class="badge rounded-sm mx-1">
				{type == ApplicationCommandType.ChatInput
					? 'Slash'
					: ApplicationCommandType.Message
					? 'Message Context'
					: 'User Context'}
			</span>
		{/if}
		{#if premium}
			<span class="badge rounded-sm mx-1 badge-primary"> Premium </span>
		{/if}
	</div>

	<div class="collapse-content">
		<p>{description}</p>
		{#if type == ApplicationCommandType.ChatInput}
			<span>
				<div class="flex gap-2">
					<span
						><a href={`#${name}`}>
							/{name}
						</a></span
					>
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
