<script context="module">
	/** * @type {import('@sveltejs/kit').Load} */
	export async function load({ session }) {
		return {
			props: { user: session.user || false }
		};
	}
</script>

<script lang="ts">
	export let user: Record<string, any>;
</script>

<div>
	<slot />
</div>
