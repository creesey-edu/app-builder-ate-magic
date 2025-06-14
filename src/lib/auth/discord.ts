
/**
 * @file src/lib/auth/discord.ts
 * @description Discord authentication constants and role mappings (backend v1.1.5)
 */

// Server/Guild IDs
export const ADMIN_SERVER_GUILD_ID = import.meta.env.VITE_ADMIN_SERVER_GUILD_ID || "997603496637513928";

// Full Role ID Mapping (sync these with production env at all times)
export const ADMIN_OWNER_ROLE_ID           = import.meta.env.VITE_ADMIN_OWNER_ROLE_ID           || "1004399549051326525";
export const ADMIN_ADMINISTRATOR_ROLE_ID   = import.meta.env.VITE_ADMIN_ADMINISTRATOR_ROLE_ID   || "1004399190190190190";
export const ADMIN_MODERATOR_ROLE_ID       = import.meta.env.VITE_ADMIN_MODERATOR_ROLE_ID       || "1004399190190190191";
export const VERIFIED_USER_ROLE_ID         = import.meta.env.VITE_VERIFIED_USER_ROLE_ID         || "1150725589123456789";
export const VERIFIED_MEMBER_ROLE_ID       = import.meta.env.VITE_VERIFIED_MEMBER_ROLE_ID       || "1150725589123456790";
export const GOVERNMENT_ROLE_ID            = import.meta.env.VITE_GOVERNMENT_ROLE_ID            || "1150725589123498765";
export const MILITARY_ROLE_ID              = import.meta.env.VITE_MILITARY_ROLE_ID              || "1150725589123412345";
export const EDUCATION_ROLE_ID             = import.meta.env.VITE_EDUCATION_ROLE_ID             || "1150725589123433221";
export const VERIFIED_GOVERNMENT_ROLE_ID   = import.meta.env.VITE_VERIFIED_GOVERNMENT_ROLE_ID   || "1150725589123498770";
export const VERIFIED_MILITARY_ROLE_ID     = import.meta.env.VITE_VERIFIED_MILITARY_ROLE_ID     || "1150725589123498771";
export const VERIFIED_EDUCATION_ROLE_ID    = import.meta.env.VITE_VERIFIED_EDUCATION_ROLE_ID    || "1150725589123498772";
export const STREAMER_ROLE_ID              = import.meta.env.VITE_STREAMER_ROLE_ID              || "1150725589123498766";
export const STREAMER_VERIFICATION_ROLE_ID = import.meta.env.VITE_STREAMER_VERIFICATION_ROLE_ID || "1150725589123498767";

// Discord OAuth URL builder
export const buildDiscordAuthUrl = (redirectUri: string = `${window.location.origin}/auth/discord/callback`) => {
  const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
  return `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&response_type=code&scope=identify%20email%20guilds%20guilds.members.read`;
};
