<script context="module">
	import { page } from '$app/stores';

	export async function load({ params, fetch, session, stuff }) {
		const url = `/api/docs.json`;
		const response = await fetch(url);

		return {
			status: response.status,
			props: {
				docs: response.ok && (await response.json())
			}
		};
	}
</script>

<script>
	export let docs;
</script>

<div class="flex gap-2 md:flex-row flex-col">
	<div>
		<ul class="menu bg-base-200 w-56 pt-4 h-full">
			{#each docs as doc}
				<li class={`${$page.url.pathname == `/docs/${doc.slug}` ? 'bordered' : ''}`}>
					<a sveltekit:prefetch href={doc.slug == 'index' ? '/docs' : `/docs/${doc.slug}`}
						>{doc.meta.title}</a
					>
				</li>
			{/each}
		</ul>
	</div>

	<div class="md:p-0 p-4 mt-4">
		<slot />
	</div>
</div>
