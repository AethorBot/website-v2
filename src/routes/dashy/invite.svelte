<script context="module">
	import { DISCORD, DASHY_INVITE } from '../../consts';
	/** * @type {import('@sveltejs/kit').Load} */
	export async function load() {
		return {
			status: 307,
			redirect: DASHY_INVITE
		};
	}
</script>

<a href={DASHY_INVITE}>{DASHY_INVITE}</a>
