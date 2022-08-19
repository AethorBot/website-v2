/* fork of https://github.com/msyyn/sveltekit-discord-oauth-starter/blob/master/src/hooks.js */

import cookie from "cookie";
import type { GetSession } from "@sveltejs/kit";
import { BACKEND, HOST } from "./consts";

async function getUser(token: string) {
  const request = await fetch(`${BACKEND}/api/user`, {
    headers: {
      "x-token": `${token}`,
    },
  });
  const response = await request.json();
  return response;
}

export const getSession: GetSession = async (req) => {
  if (req.url.pathname == "/" || req.url.pathname == "/commands") {
    return {
      user: false,
    };
  }
  const cookies = cookie.parse(req.request.headers.get("cookie") || "");
  if (cookies.disco_refresh_token && !cookies.disco_access_token) {
    const discord_request = await fetch(
      `${HOST}/api/refresh?code=${cookies.disco_refresh_token}`,
    );
    const discord_response = await discord_request.json();

    if (discord_response.disco_access_token) {
      const response = await getUser(discord_response.disco_access_token);
      if (response.id) {
        return {
          user: {
            ...response,
          },
        };
      }
    }
  }

  if (cookies.disco_access_token) {
    const response = await getUser(cookies.disco_access_token);
    if (response.id) {
      return {
        user: {
          ...response,
        },
      };
    }
  }

  return {
    user: false,
  };
};
