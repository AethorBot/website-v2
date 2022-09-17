<script>
	import { page } from '$app/stores';

	export let data;
	let { docs } = data;
</script>

<div class="flex gap-2 md:flex-row flex-col">
	<div>
		<ul class="menu bg-base-200 md:w-56 w-full pt-4 h-full">
			{#each docs as doc}
				<li class={`${$page.url.pathname == `${doc.slug}` ? 'bordered' : ''}`}>
					<a sveltekit:prefetch href={`${doc.slug}`}>{doc.meta.title}</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="md:p-0 p-4 mt-4 pb-8">
		<slot />
	</div>
</div>
