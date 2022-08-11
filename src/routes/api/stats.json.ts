/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET(req) {
  let res = await fetch("https://aethor-api.tricked.pro/api/stats.json").then(
    (r) => r.text(),
  );
  return {
    headers: {
      "Content-Type": "application/json",
    },
    body: res,
  };
}
