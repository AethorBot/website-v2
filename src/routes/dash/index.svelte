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
	import { GUILD_INVITE } from '../../consts';

	export let user: Record<string, any>;
</script>

<div>
	<div class="p-4 bg-base-300 max-w-7xl mx-auto mt-6">
		<h2 class="text-4xl text-white font-bold">Servers</h2>

		<div class="flex flex-wrap gap-5 justify-center">
			{#each user.guilds as server}
				<a
					href={!(server.allowed && server.joined)
						? GUILD_INVITE(server.id)
						: `/dash/manage/${server.id}`}
					class={`transition ease-in-out delay-150 hover:-translate-y-4 hover:scale-110 duration-300 w-60 ${
						!(server.allowed && server.joined) ? 'grayscale' : ''
					}`}
				>
					<div class="b">
						<img
							src={server.icon
								? `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png?size=2048`
								: '/Logo.png'}
							on:error={(e) => {
								if (e?.target?.src) {
									e.target.src = '/Logo.png';
								}
							}}
							alt={server.name}
							class="w-60 rounded-lg"
						/>
						<p class="text-2xl text-center font-bold">{server.name}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
