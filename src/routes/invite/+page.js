import { redirect } from '@sveltejs/kit';
import { INVITE } from '../../consts';
/** * @type {import('@sveltejs/kit').PageLoad} */
export async function load() {
	throw redirect(307, INVITE);
}
