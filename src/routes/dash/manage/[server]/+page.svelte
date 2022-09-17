<script context="module">
	/** * @type {import('@sveltejs/kit').Load} */
	export async function load({ session }) {
		if (!session.user) {
			return {
				status: 307,
				redirect: '/login'
			};
		}
		return {
			props: { user: session.user || false }
		};
	}
</script>

<script lang="ts">
	export let user: Record<string, any>;
</script>

<div class="flex flex-wrap h-min">
	<div class="m-4 bg-base-200 p-4">
		<p>Use the sidebar to get started</p>
	</div>
	<div class="m-4 bg-base-200 p-4">
		<h2 class="text-xl font-mono capitalize">Aethor Premium</h2>
		<btn class="btn btn-accent mt-2 text-center mx-auto"
			><a href="https://ae.tricked.pro/premium">Premium</a></btn
		>
	</div>
</div>
