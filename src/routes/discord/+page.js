import { redirect } from '@sveltejs/kit';
import { DISCORD } from '../../consts';

export async function load({ params, fetch }) {
	throw redirect(307, DISCORD);
}
