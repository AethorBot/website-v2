<script>
	export let category = undefined;
	export let n;
	export let s;
	export let d;
</script>

<div
	class="bg-sky-500 dark:bg-sky-900 border-indigo-700 text-sky-100 dark:text-sky-200 p-4 rounded-lg border-2"
>
	<span class="text-xl" id={n.join('-')}>
		<a href={`#${n.join('-')}`}>
			{s}
		</a>
	</span>

	{#if category}
		<span class="text-right">
			<p class="leading-[0px]">
				{category}
			</p>
		</span>
	{/if}

	<p class="text-sky-800 dark:text-blue-300 text-lg">
		{d || ''}
	</p>
</div>
