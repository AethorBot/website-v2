/* fork of https://github.com/msyyn/sveltekit-discord-oauth-starter/blob/master/src/hooks.js */

import cookie from "cookie";
import type { GetSession } from "@sveltejs/kit";
const HOST = import.meta.env.VITE_HOST;
const BACKEND = import.meta.env.VITE_BACKEND_URL;

export const getSession: GetSession = async (req) => {
  if (req.url.pathname == "/" || req.url.pathname == "/commands") {
    return {
      user: false,
    };
  }
  const cookies = cookie.parse(req.request.headers.get("cookie") || "");
  // if only refresh token is found, then access token has expired. perform a refresh on it.
  if (cookies.disco_refresh_token && !cookies.disco_access_token) {
    const discord_request = await fetch(
      `${HOST}/api/refresh?code=${cookies.disco_refresh_token}`,
    );
    const discord_response = await discord_request.json();

    if (discord_response.disco_access_token) {
      console.log("setting discord user via refresh token..");

      const request = await fetch(`${BACKEND}/api/user`, {
        headers: {
          "x-token": `${discord_response.disco_access_token}`,
        },
      });

      // returns a discord user if JWT was valid
      const response = await request.json();

      if (response.id) {
        return {
          user: {
            // only include properties needed client-side —
            // exclude anything else attached to the user
            // like access tokens etc
            ...response,
          },
        };
      }
    }
  }

  if (cookies.disco_access_token) {
    console.log("setting discord user via access token..");
    const request = await fetch(`${BACKEND}/api/user`, {
      headers: {
        "x-token": `${cookies.disco_access_token}`,
      },
    });

    // returns a discord user if JWT was valid
    const response = await request.json();

    if (response.id) {
      return {
        user: {
          // only include properties needed client-side —
          // exclude anything else attached to the user
          // like access tokens etc
          ...response,
        },
      };
    }
  }

  // not authenticated, return empty user object
  return {
    user: false,
  };
};
