/* the url of the site */
export const HOST = import.meta.env["VITE_HOST"] || "http://localhost:3000";
/* discord invite to join the support server */
export const DISCORD = (
  import.meta.env["VITE_DISCORD_INVITE"] ||
  "https://discord.gg/zwUQGAG4cP"
);
/* callback for dashboard */
export const DISCORD_REDIRECT_URI = (
  import.meta.env["VITE_DISCORD_REDIRECT_URI"] ||
  `${HOST}/api/callback`
);
/* backend url */
export const BACKEND = (
  import.meta.env["VITE_BACKEND_URL"] ||
  "http://aethor-api.tricked.pro"
);
/* client id for invite */
export const DISCORD_CLIENT_ID = (
  import.meta.env["VITE_DISCORD_CLIENT_ID"] ||
  "870383692403593226"
);
/* base invite url */
const BASE_INVITE_URL =
  `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}` as const;
/* invite used for add buttons */
export const INVITE = (
  `${BASE_INVITE_URL}&scope=bot%20applications.commands&permissions=67234816` as const
);
/* invite used for dashboard */
export const DISCORD_ENDPOINT = (
  `${BASE_INVITE_URL}&redirect_uri=${
    encodeURIComponent(DISCORD_REDIRECT_URI)
  }&response_type=code&scope=identify%20guilds` as const
);
/* invite for adding to server */
export const GUILD_INVITE = (g: string) => `${INVITE}&guild_id=${g}` as const;
