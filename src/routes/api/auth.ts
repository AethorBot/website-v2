import { DISCORD_ENDPOINT } from "../../consts";

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET() {
  return {
    headers: { Location: DISCORD_ENDPOINT },
    status: 302,
  };
}
