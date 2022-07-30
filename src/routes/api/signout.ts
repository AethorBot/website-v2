/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET(req) {
  console.log("redirect to /dash with cleared cookies");
  return {
    headers: {
      "set-cookie": [
        `disco_access_token=deleted; Path=/; Max-Age=-1`,
        `disco_refresh_token=deleted; Path=/; Max-Age=-1`,
      ],
      Location: "/dash",
    },
    status: 302,
  };
}
