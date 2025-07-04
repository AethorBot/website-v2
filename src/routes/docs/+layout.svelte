<script lang="ts">
	import { page } from '$app/stores';

	// export let data;
	let { data, children, ...rest } = $props();
	let docs = data.docs;
</script>

<div class="flex min-h-full flex-grow flex-col gap-2 md:flex-row">
	<ul class="menu bg-base-200 w-full pt-4 md:w-56 ">
		{#each docs as doc}
			<li class={`${$page.url.pathname == `${doc.slug}` ? 'bordered' : ''}`}>
				<a href={`${doc.slug}`}>{doc.meta.title}</a>
			</li>
		{/each}
	</ul>

	<div class="mt-4 p-4 pb-8 md:p-0 min-h-[90vh]">
		{@render children()}
	</div>
</div>
