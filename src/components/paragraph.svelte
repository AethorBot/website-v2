<script>
	export let center = false;
	export let full = false;
</script>

<article
	class={`p-4
    prose
    prose-teal
    dark:prose-invert
    prose-headings:text-sky-900
    dark:prose-headings:text-sky-500
    prose-p:text-gray-900
    dark:prose-p:text-blue-300
    prose-a:text-red-900
    dark:prose-a:text-red-500
    prose-h3:m-0
    prose-h2:my-4
    prose-p:m-0
    ${center ? 'text-center' : ''}
    ${full ? 'max-w-none' : ''}
    `}
>
	<slot />
</article>
