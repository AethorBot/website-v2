<script>
	export let size = 'normal';
	export let classes =
		'hover:text-teal-100 bg-blue-800 text-white border-blue-900 rounded-3xl border-4 p-4 text-2xl hover:bg-sky-800 hover:border-sky-900 duration-200';
	if (size === 'xxxl') {
		classes =
			'hover:text-teal-100 bg-blue-800 text-white border-blue-900 rounded-3xl border-4 p-8 text-6xl hover:bg-sky-800 hover:border-sky-900 duration-200';
	}
</script>

<a
	class={classes}
	href="https://discord.com/oauth2/authorize?client_id=870383692403593226&permissions=117824&scope=bot%20applications.commands"
	target="_blank"
>
	Add Aethor</a
>
