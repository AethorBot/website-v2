<script lang="ts">
	import CommandItem from '../../components/commandItem.svelte';
	import Seo from '../../components/Seo.svelte';

	/** @type {import('./$types').PageData */
	export let data;
	let { commands } = data;
</script>

<Seo />

<div class="px-4 py-4">
	<div class="grid grid-cols-1 gap-4 py-2">
		{#each commands as command}
			<CommandItem {...command} />
		{/each}
	</div>
</div>
