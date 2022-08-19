<script>
	export let title = `Aethor website`;
	export let pageTitle = title;
	export let description = `Aethor is the best suggestions bot!`;
	export let logo = '/Logo Round.png';
	export let image = '/Logo.png';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="manifest" href="/manifest.webmanifest" />
	<meta name="theme-color" content="#0EC5FF" />

	<meta name="title" content={title} />
	<meta name="og:title" content={title} />

	<meta name="og:description" content={description} />
	<meta name="description" content={description} />

	<meta name="og:image" content={image} />

	<link rel="icon" href={logo} type="image/png" />

	<title>{pageTitle}</title>
</svelte:head>
