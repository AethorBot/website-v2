<script context="module">
	import Seo from '../components/Seo.svelte';
	/** * @type {import('@sveltejs/kit').Load} */
	export async function load({ session }) {
		if (session.user) {
			return {
				status: 307,
				redirect: '/dash'
			};
		}
	}
</script>

<Seo />

<div class="justify-center flex items-center p-5 py-20">
	<button class="btn btn-primary">
		<a title="Discord OAuth2" href="api/auth">Authenticate via Discord</a>
	</button>
</div>
