<script lang="ts">
	import Fuse from 'fuse.js';
	import { onMount } from 'svelte';
	import Paragraph from '../components/paragraph.svelte';
	export const ssr = true;
	export const prerender = true;
	export const hydrate = false;
	export const router = false;
	let commandlist = [
		{
			n: ['configs'],
			d: 'view the configs of Aethor',
			s: '*configs ',
			a: ['configs', 'pf'],
			c: 'config'
		},
		{
			n: ['prefix'],
			d: 'view the prefix of Aethor',
			s: '*prefix <set>',
			a: ['prefix', 'pf'],
			c: 'config'
		},
		{
			n: ['prefix', 'set'],
			d: "set Aethor's prefix",
			s: '*prefix set [prefix]',
			a: ['set'],
			c: 'config'
		},
		{
			n: ['autopublish'],
			d: 'Automatically publish messages',
			s: '*autopublish <channel>',
			a: ['autopublish', 'publish'],
			c: 'general'
		},
		{
			n: ['avatar'],
			d: 'View the avatar of a user',
			s: '*avatar <member>',
			a: ['av', 'avatar'],
			c: 'general'
		},
		{
			n: ['help'],
			d: 'Aethor Help Command',
			s: '*help <command>',
			a: ['ls', 'h'],
			c: 'general'
		},
		{
			n: ['invite'],
			d: 'Invite Aethor to your server',
			s: '*invite ',
			a: ['invite'],
			c: 'general'
		},
		{
			n: ['support'],
			d: 'Support server :)',
			s: '*support ',
			a: ['support'],
			c: 'general'
		},
		{
			n: ['8ball'],
			d: 'Ask a question for the magic 8ball to answer',
			s: '*8ball <question>',
			a: ['8ball', 'itriedmybest', 'mok'],
			c: 'fun'
		},
		{ n: ['crab'], d: 'Ultimate crab', s: '*crab [crab]', a: ['crab'], c: 'fun' },
		{
			n: ['iqtest'],
			d: 'Do a iqtest',
			s: '*iqtest <member>',
			a: ['iqtest', 'iq', 'testiq'],
			c: 'fun'
		},
		{
			n: ['math'],
			d: 'Do some math',
			s: '*math <easy> <normal> <hard> <impossible>',
			a: ['math'],
			c: 'fun'
		},
		{
			n: ['math', 'easy'],
			d: 'easy math question',
			s: '*math easy ',
			a: ['easy'],
			c: 'fun'
		},
		{
			n: ['math', 'impossible'],
			d: 'impossible math question',
			s: '*math impossible ',
			a: ['impossible'],
			c: 'fun'
		},
		{
			n: ['math', 'normal'],
			d: 'normal math question',
			s: '*math normal ',
			a: ['normal'],
			c: 'fun'
		},
		{ n: ['blame'], d: 'Blame someone', s: '*blame [text]', a: ['blame'], c: 'fun' },
		{
			n: ['githubuser'],
			d: 'View some information about a github user',
			s: '*githubuser [user]',
			a: ['githubuser'],
			c: 'information'
		},
		{ n: ['ping'], d: 'Ping the bot', s: '*ping ', a: ['ping', 'pong'], c: 'information' },
		{
			n: ['raw'],
			d: 'View the raw text of your message',
			s: '*raw <text>',
			a: ['raw'],
			c: 'information'
		},
		{
			n: ['server'],
			d: 'Get some information about this server',
			s: '*server ',
			a: ['server', 'guild'],
			c: 'information'
		},
		{
			n: ['stats'],
			d: 'Sends some general stats of the bot',
			s: '*stats ',
			a: ['stats', 'botinfo'],
			c: 'information'
		},
		{
			n: ['userinfo'],
			d: 'View the information about a user',
			s: '*userinfo <member>',
			a: ['userinfo', 'u', 'user'],
			c: 'information'
		},
		{
			n: ['ban'],
			d: 'Ban users from your server',
			s: '*ban [user] <reason> <deletemessages>',
			a: ['ban'],
			c: 'moderation'
		},
		{
			n: ['clearlogs'],
			d: 'clearlogs a user',
			s: '*clearlogs [user]',
			a: ['clearlogs', 'clearwarns'],
			c: 'moderation'
		},
		{
			n: ['moderation'],
			d: 'modify moderation settings',
			s: '*moderation <banmessage> <kickmessage> <mutemessage> <warnmessage> <modlogchannel> <publicmodlogchannel> <addmod>',
			a: ['moderation'],
			c: 'moderation'
		},
		{
			n: ['moderation', 'banmessage'],
			d: 'set the footer',
			s: '*moderation banmessage <footer>',
			a: ['banmessage'],
			c: 'moderation'
		},
		{
			n: ['moderation', 'kickmessage'],
			d: 'set the footer',
			s: '*moderation kickmessage <footer>',
			a: ['kickmessage'],
			c: 'moderation'
		},
		{
			n: ['moderation', 'mutemessage'],
			d: 'set the footer',
			s: '*moderation mutemessage <footer>',
			a: ['mutemessage'],
			c: 'moderation'
		},
		{
			n: ['moderation', 'warnmessage'],
			d: 'set the footer',
			s: '*moderation warnmessage <footer>',
			a: ['warnmessage'],
			c: 'moderation'
		},
		{
			n: ['moderation', 'publicmodlogchannel'],
			d: 'The channel infractions will be posted in to the public',
			s: '*moderation publicmodlogchannel <channel>',
			a: ['publicmodlogchannel'],
			c: 'moderation'
		},
		{
			n: ['moderation', 'modlogchannel'],
			d: 'the channel modlogs will be posted in',
			s: '*moderation modlogchannel <channel>',
			a: ['modlogchannel'],
			c: 'moderation'
		},
		{
			n: ['moderation', 'addmod'],
			d: 'allow a user or role to do all moderation actions',
			s: '*moderation addmod <user> <role>',
			a: ['addmod'],
			c: 'moderation'
		},
		{
			n: ['modlogs'],
			d: 'modlogs a user',
			s: '*modlogs [user]',
			a: ['modlogs', 'warns'],
			c: 'moderation'
		},
		{
			n: ['mute'],
			d: 'mute in your server',
			s: '*mute [user] <reason> <time>',
			a: ['mute', 'silence'],
			c: 'moderation'
		},
		{
			n: ['reason'],
			d: 'Set the reason of a infraction',
			s: '*reason [id] [reason]',
			a: ['reason', 'reson'],
			c: 'moderation'
		},
		{
			n: ['role'],
			d: 'Give a user a role',
			s: '*role <user> <role>',
			a: ['role'],
			c: 'moderation'
		},
		{
			n: ['slowmode'],
			d: 'Set the slowmode of a channel',
			s: '*slowmode [time]',
			a: ['slowmode', 'sm'],
			c: 'moderation'
		},
		{
			n: ['warn'],
			d: 'warn a user',
			s: '*warn [user] <reason>',
			a: ['warn'],
			c: 'moderation'
		},
		{
			n: ['kick'],
			d: 'Kick users from your server',
			s: '*kick [user] <reason>',
			a: ['kick', 'yeet'],
			c: 'moderation'
		},
		{
			n: ['suggestion'],
			d: 'Entry point for the suggestions commands',
			s: '*suggestion <of> <deny> <edit> <view> <channel> <comment> <deniedchannel> <accept> <acomment> <chart> <top> <restore> <silentdelete> <acceptedchannel> <emojis> <suggest> <down> <suggestions> <startthreadbutton> <search>',
			a: ['suggestion', 'suggestioninfo', 'sug', 's'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'accept'],
			d: 'Accept a suggestions',
			s: '*suggestion accept <suggestion> <reason>',
			a: ['accept', 'acceptsuggestion', 'done'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'acceptedchannel'],
			d: 'Set the accepted channel',
			s: '*suggestion acceptedchannel <channel>',
			a: ['acceptedchannel'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'acomment'],
			d: 'Comment on a suggestion without showing your identity',
			s: '*suggestion acomment <suggestion> <reason>',
			a: ['acomment', 'acommentsuggestion'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'chart'],
			d: 'Displays the suggestions made per day',
			s: '*suggestion chart ',
			a: ['chart'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'comment'],
			d: 'Comment on a suggestion',
			s: '*suggestion comment <suggestion> <reason>',
			a: ['comment', 'commentsuggestion'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'deniedchannel'],
			d: 'Set the denied channel',
			s: '*suggestion deniedchannel <channel>',
			a: ['deniedchannel', 'denychannel'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'deny'],
			d: 'deny a suggestion',
			s: '*suggestion deny [suggestion] <reason>',
			a: ['delsuggestion', 'deletesuggestion', 'deny', 'denysuggestion', 'delete'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'down'],
			d: 'Displays the most down voted suggestions in this guild',
			s: '*suggestion down ',
			a: ['down', 'shittiestsuggestions'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'edit'],
			d: 'Edit a suggestion',
			s: '*suggestion edit <suggestion> <content>',
			a: ['editsuggestion', 'edit'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'emojis'],
			d: 'Set the emojis to be used in suggestions HAS TO BE CUSTOM ONES',
			s: '*suggestion emojis [emojis]',
			a: ['emojis', 'voteemojis'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'restore'],
			d: 'Restore  a suggestion',
			s: '*suggestion restore <suggestion>',
			a: ['restore', 'restoresuggestion'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'search'],
			d: 'Search for a suggestion',
			s: '*suggestion search [query]',
			a: ['search', 'searchsuggestion'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'silentdelete'],
			d: 'Delete a sugggestion silently',
			s: '*suggestion silentdelete <suggestion>',
			a: ['silentdelete'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'startthreadbutton'],
			d: 'Adds a button to suggestions to start a thread',
			s: '*suggestion startthreadbutton <msg>',
			a: ['startthreadbutton', 'thread'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'suggestions'],
			d: 'Displays the top suggestions in this guild',
			s: '*suggestion suggestions [suggestions]',
			a: ['suggestions', 'list'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'topsuggestions'],
			s: '*suggestion topsuggestions ',
			a: ['top', 'topsuggestions'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'view'],
			d: 'view a suggestion',
			s: '*suggestion view [suggestion]',
			a: ['suggestion', 'suggestioninfo', 'sug', 's', 'view'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'blacklist'],
			s: '*suggestion blacklist [user]',
			a: ['blacklist'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'channel'],
			d: 'Set the channel suggestions will be send in',
			s: '*suggestion channel <channel>',
			a: ['suggestionschannel', 'channel', 'suggestionschannel', 'suggestionchannel'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'suggest'],
			d: 'Suggest something',
			s: '*suggestion suggest [suggestion]',
			a: ['suggest', 'create'],
			c: 'suggestions'
		},
		{
			n: ['suggestion', 'of'],
			d: 'View the cool suggestions other users have made',
			s: '*suggestion of [user]',
			a: ['suggestionsof', 'my', 'of'],
			c: 'suggestions'
		},
		{
			n: ['supportping'],
			d: 'Set a role to be pinged on every support thread',
			s: '*supportping <role>',
			a: ['supportping'],
			c: 'threads'
		},
		{
			n: ['threadsupport'],
			d: 'Enable threadsupport to make support easier #stafflife',
			s: '*threadsupport <thread>',
			a: ['threadsupport', 'threadsup', 'supportthread'],
			c: 'threads'
		},
		{ n: ['yeetkid'], s: '*yeetkid <member>', a: ['yeetkid', 'removekid'], c: 'threads' },
		{
			n: ['piratechannel'],
			d: 'no please noooooooooooO!',
			s: '*piratechannel ',
			a: ['piratechannel'],
			c: 'vip'
		},
		{
			n: ['quote'],
			d: 'quote a message',
			s: '*quote <link>',
			a: ['quote', 'qt'],
			c: 'vip'
		},
		{
			n: ['buttonroles'],
			d: 'Button reaction roles',
			s: '*buttonroles <roles>',
			a: ['buttonroles', 'reactionroles', 'rr', 'br'],
			c: 'vip'
		},
		{
			n: ['tag'],
			d: 'Display a tag',
			s: '*tag <all> <raw> <dtag> <view> <delete> <add>',
			a: ['tag', 't', 'addtag', 'tags'],
			c: 'vip'
		},
		{
			n: ['tag', 'add'],
			d: 'Add a tag',
			s: '*tag add <name> <content>',
			a: ['addtag', 'create', '+', 'create', '+=', 'update', 'add'],
			c: 'vip'
		},
		{
			n: ['tag', 'delete'],
			d: 'Delete a tag',
			s: '*tag delete <tag>',
			a: ['deletetag', 'deltag', 'delete', 'remove', 'del'],
			c: 'vip'
		},
		{
			n: ['tag', 'dtag'],
			d: 'Show a tag but also delete your message',
			s: '*tag dtag <tag>',
			a: ['dtag'],
			c: 'vip'
		},
		{
			n: ['tag', 'raw'],
			d: "Shows a tag's raw data",
			s: '*tag raw <tag>',
			a: ['rawtag', 'raw'],
			c: 'vip'
		},
		{
			n: ['tag', 'view'],
			d: 'Shows a tag',
			s: '*tag view <tag>',
			a: ['tag', 'view'],
			c: 'vip'
		},
		{
			n: ['tag', 'all'],
			d: 'Displays the tags in this server',
			s: '*tag all ',
			a: ['tags', 'all', 'list'],
			c: 'vip'
		},
		{
			n: ['temprole'],
			d: 'Give a user a role temporaily',
			s: '*temprole [user] [role] [time]',
			a: ['temprole'],
			c: 'vip'
		},
		{
			n: ['uwuchannel'],
			d: 'no please noooooooooooO!',
			s: '*uwuchannel ',
			a: ['uwuchannel'],
			c: 'vip'
		},
		{
			n: ['report'],
			d: 'Report a malicous user',
			s: '*report [user] [reason] [evidence]',
			a: ['report'],
			c: 'malware'
		},
		{ n: ['list'], d: 'List reported users', s: '*list ', a: ['list'], c: 'malware' },
		{
			n: ['feed'],
			d: 'Sends a message in your server when someone has gotten reported',
			s: '*feed <channel>',
			a: ['feed'],
			c: 'malware'
		}
	];
	const categories = Array.from(new Set(commandlist.map((x) => x.c)));
	const search = new Fuse(commandlist, {
		keys: [
			'n',
			'a',
			'c',
			{
				name: 's',
				weight: 4
			},
			{
				name: 'd',
				weight: 2
			}
		]
	});

	let toSearch = '';
	let searchResult = [];
	function updateSearch() {
		let r = search.search(toSearch);
		searchResult.length = 0;
		searchResult.push(...r.map((x) => x.item));
	}

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);
		toSearch = searchParams.get('search') || '';
		updateSearch();
	});
</script>

<div class="p-4">
	<input
		class="dark:text-lime-300 focus:border-blue-700 focus:rounded-md focus:outline-none text-neutral-900 text-lg border-2 border-emerald-300 p-4 rounded-sm w-full bg-green-200 dark:bg-lime-900 "
		placeholder="Search"
		bind:value={toSearch}
		on:input={() => {
			//Theres probably a better way to do this but idk how /shrug
			const searchParams = new URLSearchParams(window.location.search);
			searchParams.set('search', toSearch);
			const newLoc = new URL(window.location.toString());
			newLoc.search = searchParams.toString();
			window.history.pushState({}, null, newLoc);

			updateSearch();
		}}
	/>
	<div class="pt-4" />
	<div
		class="dark:text-lime-300 text-neutral-900 text-lg border-2 border-emerald-300 p-4 rounded-sm"
	>
		<ul class="md:flex lg:flex md:flex-wrap lg:flex-wrap lg:justify-between md:justify-between">
			{#each categories as catergory}
				<li>
					<a
						class="dark:hover:text-lime-700 hover:text-teal-300 hover:underline text-lg duration-300"
						href={`#${catergory}`}>{catergory[0].toUpperCase() + catergory.slice(1)} Commands</a
					>
				</li>
			{/each}
		</ul>
	</div>
	{#if toSearch == ''}
		<div>
			{#each categories as name}
				<div
					class="py-4 grid grid-cols-1 gap-2 hover:shadow-2xl shadow-green-600/50 hover:bg-green-600/4 duration-150"
					id={name}
				>
					<div
						class="border-green-900  text-cyan-800 dark:text-emerald-500 text-2xl p-2 bg-green-500 dark:bg-slate-900 rounded-lg border-2"
					>
						{name[0].toUpperCase() + name.slice(1)} Commands
					</div>
					<div class="grid grid-cols-1 gap-4">
						{#each commandlist.filter((x) => x.c === name) as command}
							<div
								class="bg-teal-500 dark:bg-teal-900 border-green-900 text-emerald-100 dark:text-lime-200 p-4 rounded-lg border-2"
							>
								<p class="text-xl" id={command.n.join('-')}>
									{command.s}
								</p>

								<p class="text-emerald-800 dark:text-lime-300 text-lg">
									{command.d || ''}
								</p>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{:else if searchResult.length === 0}
		<div class="pt-4" />
		<Paragraph><h1>Nothing was found try a different search term</h1></Paragraph>
	{:else}
		<div class="pt-4" />
		<div class="grid grid-cols-1 gap-4">
			{#each searchResult as command}
				<div
					class="bg-teal-500 dark:bg-teal-900 border-green-900 text-emerald-100 dark:text-lime-200 p-4 rounded-lg border-2"
				>
					<span class="text-xl" id={command.n.join('-')}>
						<p>
							{command.s}
						</p>
					</span>
					<span class="text-right">
						<p class="leading-[0px]">
							{command.c}
						</p>
					</span>

					<p class="text-emerald-800 dark:text-lime-300 text-lg">
						{command.d || ''}
					</p>
				</div>
			{/each}
		</div>
	{/if}
</div>
