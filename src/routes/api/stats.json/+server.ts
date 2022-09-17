import { json } from "@sveltejs/kit";

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET(req) {
  let res = await fetch("https://aethor-api.tricked.pro/api/stats.json").then(
    (r) => r.json(),
  );
  // Suggestion (check for correctness before using):
  return json(res, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
