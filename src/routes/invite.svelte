<script context="module">
	import { INVITE } from '../consts';
	/** * @type {import('@sveltejs/kit').Load} */
	export async function load() {
		return {
			status: 307,
			redirect: INVITE
		};
	}
</script>

<a href={INVITE}>{INVITE}</a>
