
// PATCHED v0.0.8 src/lib/roles.ts — Role checking utility for session-based access control (uses env role IDs)

import type { SessionUser } from "@/types/session";
import {
  ADMIN_SERVER_GUILD_ID,
  ADMIN_OWNER_ROLE_ID,
  ADMIN_ADMINISTRATOR_ROLE_ID,
  ADMIN_MODERATOR_ROLE_ID,
  VERIFIED_USER_ROLE_ID,
  VERIFIED_MEMBER_ROLE_ID,
  STREAMER_ROLE_ID,
  STREAMER_VERIFICATION_ROLE_ID,
} from "@/lib/auth/discord";

/**
 * Checks if the given user has the specified role ID in the admin or any target guild.
 *
 * @param user - The current session user
 * @param roleId - The Discord role ID to check against
 * @param guildId - Optional guild to check (default: admin guild)
 * @returns true if the role exists in the guild, false otherwise
 */
export function hasRole(user: SessionUser | null, roleId: string, guildId?: string): boolean {
  if (!user || !user.guilds) return false;

  const targetGuildId = guildId ?? ADMIN_SERVER_GUILD_ID;
  const guild = user.guilds.find(g => g.id === targetGuildId);
  return Array.isArray(guild?.roles) && guild.roles.includes(roleId);
}

