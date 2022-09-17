/** * @type {import('@sveltejs/kit').PageLoad} */
export async function load() {
	const [servers, stats] = await Promise.all([
		fetch('https://api.aethor.xyz/api/servers.json', {
			mode: 'no-cors'
		}).then((r) => r.json()),
		fetch('https://api.aethor.xyz/api/stats.json', {
			mode: 'no-cors'
		}).then((r) => r.json())
	]);

	return {
		servers: servers
			.map((x) => {
				if (x?.icon && !x.icon.includes('a_') && x.icon.includes('gif')) {
					x.icon = x.icon.replace('gif', 'png');
				}
				return x;
			})
			.filter((x) => x.id !== '110373943822540800'),
		stats
	};
}
