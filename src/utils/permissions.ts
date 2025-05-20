// PATCHED v0.0.6 src/utils/permissions.ts — Adds role-checking utility for session user

import { SessionUser } from "@/types/session";

/**
 * Checks if the given session user has the specified role in the admin guild.
 *
 * @param user - The session user object
 * @param roleId - The Discord role ID to check
 * @returns true if the user has the role, false otherwise
 */
export function hasRole(user: SessionUser | null, roleId: string): boolean {
  if (!user || !user.guilds || user.guilds.length === 0) return false;

  const adminGuildId = import.meta.env.VITE_ADMIN_SERVER_GUILD_ID;
  const adminGuild = user.guilds.find(guild => guild.id === adminGuildId);

  return adminGuild?.roles?.includes(roleId) ?? false;
}
