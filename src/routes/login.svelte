<script context="module">
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

<a title="Discord OAuth2" href="api/auth">Authenticate via Discord</a>
