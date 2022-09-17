<script context="module">
	import { DISCORD } from '../consts';

	export async function load({ params, fetch, session, stuff }) {
		return {
			status: 307,
			redirect: DISCORD
		};
	}
</script>
