<script>
	import Paragraph from '../components/paragraph.svelte';

	export const ssr = true;
	export const prerender = true;
	export const hydrate = false;
	export const router = false;
</script>

<Paragraph>
	<h1>Aethor privacy policy</h1>
	<h2>What data do we collect and when</h2>
	<h3>When you create a suggestion</h3>
	<ul>
		<li><p>Your discord id</p></li>
		<li><p>The server the suggestion was made in</p></li>
		<li><p>Message content</p></li>
	</ul>
	<h3>When you vote on a suggestion</h3>
	<ul>
		<li><p>Your discord id</p></li>
	</ul>
	<h3>When you run the iq command</h3>
	<ul>
		<li><p>Your discord id</p></li>
	</ul>
	<h3>When you get a infraction</h3>
	<ul>
		<li><p>Your discord id</p></li>
		<li><p>The server id that infraction was made in</p></li>
	</ul>
	<h2>Why we store the information and how we use it.</h2>
	<ul>
		<li><p>To keep track of infractions</p></li>
		<li><p>To keep track of suggestions</p></li>
		<li><p>To keep track of settings</p></li>
	</ul>
	<h2>Who gets this data</h2>
	<p>Only the bot developer (tricked)</p>
	<h2>This party data sharing</h2>
	<p>Collected data is not shared with third parties</p>
	<h2>Questions/Concerns</h2>
	<p>
		For concerns and questions you can send a email to me at tricked@duck.com or join the discord
		and ask your question there <a href="https://discord.gg/zwUQGAG4cP" target="_blank"
			>https://discord.gg/zwUQGAG4cP</a
		>
	</p>
	<h2>How do i get my data deleted?</h2>
	<p>
		email tricked@duck.com or contact me via my discord <a
			href="https://discord.gg/zwUQGAG4cP"
			target="_blank">https://discord.gg/zwUQGAG4cP</a
		>
	</p>
</Paragraph>
<hr />
<Paragraph>
	<h1>Website privacy policy</h1>
	<p>
		We dont collect any information although we do use third party services you can view their
		privacy policy here, <a href="https://www.netlify.com/privacy">Netlify.com</a>
	</p>
	<p />
</Paragraph>
