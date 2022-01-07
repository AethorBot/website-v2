export const pwaConfiguration = {
	includeAssets: ['favicon.svg', 'favicon.png', 'favicon.jpg', 'frog.jpg', 'robots.txt'],
	srcDir: './build',
	outDir: './.svelte-kit/output/client',
	includeManifestIcons: false,
	base: '/',
	scope: '/',
	manifest: {
		name: 'Aethoe website',
		short_name: 'Aethor',
		description: 'Aethor is the best suggestions bot',
		theme_color: '#0EC5FF',
		background_color: '#0EC5FF',
		icons: [
			{
				src: 'favicon.png',
				sizes: '512x512',
				type: 'image/png'
			}
		]
	}
};
