<script>
	import Cross from 'svelte-material-icons/Close.svelte';
	import Accept from 'svelte-material-icons/Check.svelte';
	import { DISCORD } from '../consts';
</script>

<div class="flex justify-center gap-5 md:flex-row flex-col py-20 bg-base-200">
	<div class="card card-compact w-96 bg-base-100 shadow-xl md:mx-0 mx-auto">
		<div class="card-body">
			<h2 class="card-title">Aethor Premium (3 Servers)</h2>
			<div class="card-actions justify-end">
				<a href="https://buy.stripe.com/28o16p1kL94L3n2289" target="_blank" rel="external">
					<button class="btn btn-accent">Buy Now (5€/m)</button>
				</a>
			</div>
		</div>
	</div>

	<div class="card card-compact w-96 bg-base-100 shadow-xl md:mx-0 mx-auto">
		<div class="card-body">
			<h2 class="card-title">Aethor Premium (1 server)</h2>
			<div class="card-actions justify-end">
				<a href="https://buy.stripe.com/dR66qJ0gH1Cj5vabIK" target="_blank" rel="external">
					<button class="btn btn-accent rounded-md">Buy Now (2.5€/m)</button>
				</a>
			</div>
		</div>
	</div>
	<div class="card card-compact w-96 bg-base-100 shadow-xl md:mx-0 mx-auto">
		<div class="card-body">
			<h2 class="card-title">Aethor Premium (1 server) (lifetime)</h2>
			<div class="card-actions justify-end">
				<a href="https://buy.stripe.com/28oeXfbZp6WDcXCcMQ" target="_blank" rel="external">
					<button class="btn btn-accent rounded-md">Buy Now (20€)</button>
				</a>
			</div>
		</div>
	</div>
</div>

<div class="overflow-x-auto md:px-20 bg-base-300 py-10">
	<h3>PLANS COMPARISON</h3>
	<table class="table table-zebra w-full">
		<thead>
			<tr class="font-bold">
				<th class="bg-primary-focus">Feature</th>
				<th class="bg-primary-focus">Free</th>
				<th class="bg-accent text-base-300 border-x-accent border-x-2">Premium</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Button Roles</td>
				<td class="text-red-600"><Cross /></td>
				<td class="text-green-600 border-x-accent border-x-2"><Accept /></td>
			</tr>
			<tr>
				<td>Anti Invite</td>
				<td class="text-red-600"><Cross /></td>
				<td class="text-green-600 border-x-accent border-x-2"><Accept /></td>
			</tr>
			<tr>
				<td>Tags</td>
				<td class="">20</td>
				<td class="border-x-accent border-x-2">200</td>
			</tr>
			<tr>
				<td>Suggestion Setups</td>
				<td>1</td>
				<td class="border-x-accent border-x-2">5</td>
			</tr>
			<tr>
				<td>Publish Channels</td>
				<td>5</td>
				<td class="border-x-accent border-x-2">10</td>
			</tr>
			<tr>
				<td>Ticked Topics</td>
				<td>5</td>
				<td class="border-x-accent border-x-2">20</td>
			</tr>
			<tr>
				<td>All suggestion commands</td>
				<td class="text-green-600"><Accept /></td>
				<td class="text-green-600 border-x-accent border-x-2"><Accept /></td>
			</tr>
			<tr>
				<td>Free Support</td>
				<td class="text-green-600"><Accept /></td>
				<td class="text-green-600 border-x-accent border-x-2"><Accept /></td>
			</tr>
			<tr>
				<td>Export all suggestions</td>
				<td class="text-red-600"><Cross /></td>
				<td class="text-green-600 border-x-accent border-x-2"><Accept /></td>
			</tr>
		</tbody>
	</table>
</div>
<div class="max-w-7xl mx-auto">
	<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200 ">
		<input type="checkbox" class="peer" />
		<div class="collapse-title bg-base-200 text-primary-content">What is Aethor premium?</div>

		<div class="collapse-content">
			<p>Aethor premium is a way to support the developers and to make running the bot worth it.</p>
		</div>
	</div>
	<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200 ">
		<input type="checkbox" class="peer" />
		<div class="collapse-title bg-base-200 text-primary-content">How does it work?</div>

		<div class="collapse-content">
			<p>
				Aethor premium is a monthly payment and after the payment runs out premium will be removed.
			</p>
			<p>
				After paying you need to join the <a href={'/discord'} class="link link-hover link-accent">
					discord server
				</a> and make a ticket with the email used and the discord server id's that you want premium
				for.
			</p>
		</div>
	</div>
	<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200 ">
		<input type="checkbox" class="peer" />
		<div class="collapse-title bg-base-200 text-primary-content">
			Can i transfer premium to another server?
		</div>
		<div class="collapse-content">
			<p>Yes you can you just have to make a new ticket with the new server id</p>
		</div>
	</div>
	<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200 ">
		<input type="checkbox" class="peer" />
		<div class="collapse-title bg-base-200 text-primary-content">How do i create a ticket?</div>
		<div class="collapse-content">
			<p>You run /ticket in the support discord server</p>
		</div>
	</div>
</div>
