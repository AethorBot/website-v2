<script>
	import Paragraph from '../components/paragraph.svelte';

	export const ssr = true;
	export const prerender = true;
	export const hydrate = false;
	export const router = false;
</script>

<Paragraph>
	<h2>Welcome to the aethor website</h2>
	<p>Theres not much here besides the terms and privacy</p>
	<p>Maybe there will be more at some point :D</p>
	<p>
		<a
			href="https://discord.com/oauth2/authorize?client_id=870383692403593226&permissions=117824&scope=bot%20applications.commands"
			>Invite aethor</a
		> now
	</p>
	<img src="/frog.jpg" alt="frog" />
</Paragraph>
