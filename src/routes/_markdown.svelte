<script>
	import { page } from '$app/stores';

	export let title;
	export let desc;
	export let padding;
</script>

<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
	<div
		class={`prose w-full max-w-4xl flex-grow prose-img:min-h-[20rem] prose-img:object-contain prose-img:min-w-[20rem] 
		    prose-h3:m-0
    		prose-h2:my-4
    		prose-p:m-0
		${padding ? 'pt-2 max-w-7xl mx-auto' : ''}`}
	>
		<h1>{title ?? ''}</h1>
		<p>{desc ?? ''}</p>
		<slot />

		<div class="not-prose flex justify-center xl:hidden" />
	</div>
</div>
