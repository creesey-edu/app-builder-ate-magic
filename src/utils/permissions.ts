
// PATCHED v0.0.8 src/utils/permissions.ts — Adds role-checking utility for session user using env mappings

import { SessionUser } from "@/types/session";
import { ADMIN_SERVER_GUILD_ID } from "@/lib/auth/discord";

/**
 * Checks if the given session user has the specified role in the admin guild.
 *
 * @param user - The session user object
 * @param roleId - The Discord role ID to check
 * @returns true if the user has the role, false otherwise
 */
export function hasRole(user: SessionUser | null, roleId: string): boolean {
  if (!user || !user.guilds || user.guilds.length === 0) return false;

  const adminGuild = user.guilds.find(guild => guild.id === ADMIN_SERVER_GUILD_ID);

  return adminGuild?.roles?.includes(roleId) ?? false;
}

