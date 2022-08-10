export const env = (n: string) => import.meta.env[`VITE_${n}`] as string;

export const HOST = env("HOST") || "http://localhost:3000";
export const DISCORD = env("DISCORD_INVITE") || "https://discord.gg/zwUQGAG4cP";
export const DISCORD_CLIENT_ID = env("DISCORD_CLIENT_ID");
export const DISCORD_REDIRECT_URI = env("DISCORD_REDIRECT_URI") ||
  `${HOST}/api/callback`;
export const BACKEND = env("BACKEND_URL") || "http://aethor-api.tricked.pro";

const BASE_INVITE_URL =
  `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}` as const;

export const INVITE =
  `${BASE_INVITE_URL}&scope=bot%20applications.commands&permissions=67234816` as const;
export const DISCORD_ENDPOINT = `${BASE_INVITE_URL}&redirect_uri=${
  encodeURIComponent(DISCORD_REDIRECT_URI)
}&response_type=code&scope=identify%20guilds` as const;
export const GUILD_INVITE = (g: string) => `${INVITE}&guild_id=${g}` as const;
