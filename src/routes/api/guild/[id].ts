import cookie from "cookie";
import type { RequestHandler } from "@sveltejs/kit";
const BACKEND = import.meta.env.VITE_BACKEND_URL;

export const GET: RequestHandler = async (req) => {
  const cookies = cookie.parse(req.request.headers.get("cookie") || "");
  const guild = await fetch(`${BACKEND}/api/guild/${req.params.id}`, {
    headers: {
      "x-token": cookies.disco_access_token,
    },
  });
  const guild_response = await guild.json();
  return {
    body: guild_response,
  };
};
export const PATCH: RequestHandler = async (req) => {
  const cookies = cookie.parse(req.request.headers.get("cookie") || "");
  const guild = await fetch(`${BACKEND}/api/guild/${req.params.id}`, {
    method: "PATCH",
    body: req.request.body,
    headers: {
      "x-token": cookies.disco_access_token,
    },
  });
  if (!guild.ok) {
    console.log(await guild.text());
    return {
      body: {},
    };
  } else {
    const res = await guild.text();
    console.log("RES", res);
    const guild_response = await JSON.parse(res);
    return {
      body: guild_response,
    };
  }
};
