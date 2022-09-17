<script context="module">
	/** * @type {import('@sveltejs/kit').Load} */
	export async function load({ session }) {
		return {
			props: { user: session.user || false }
		};
	}
</script>

<script lang="ts">
	import Seo from '../../components/Seo.svelte';

	export let user: Record<string, any>;
</script>

<Seo title={'Aethor Dashboard'} />

<div>
	<slot />
</div>
