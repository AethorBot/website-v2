import { redirect } from '@sveltejs/kit';
import { DISCORD, DASHY_INVITE } from '../../../consts';
/** * @type {import('@sveltejs/kit').PageLoad} */
export async function load() {
	throw redirect(307, DASHY_INVITE);
}
