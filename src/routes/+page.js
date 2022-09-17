/** * @type {import('@sveltejs/kit').PageLoad} */
export async function load({ fetch }) {
	const servers = await fetch('/api/servers.json').then((r) => r.json());

	return { servers };
}
