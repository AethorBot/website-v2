<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ fetch, params }) => {
		return {
			props: {
				guild: params.server
			}
		};
	};
</script>

<script lang="ts">
	import Manage from 'svelte-material-icons/ChartBubble.svelte';
	import List from 'svelte-material-icons/ViewList.svelte';

	export let guild: string;
</script>

<div>
	<div class="flex flex-wrap">
		<ul class="menu bg-base-100 w-56 md:h-screen md:border-r-2 border-primary/20">
			<li class="">
				<a href={`/dash/manage/${guild}`}>
					<span class="text-secondary">
						<Manage height="2em" size="2em" />
					</span>
					Manage</a
				>
			</li>
			<li><a href={`/dash/manage/${guild}/suggestions`}><List size="2em" />Suggestions</a></li>
			<li><a href={`/dash/manage/${guild}/tickets`}><List size="2em" />Tickets</a></li>
			<li><a href={`/dash/manage/${guild}/roles`}><List size="2em" />Roles</a></li>
		</ul>
		<slot />
	</div>
</div>
