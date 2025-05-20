// PATCHED v0.0.6 src/lib/roles.ts — Role checking utility for session-based access control

import type { SessionUser } from "@/types/session";

/**
 * Check if the given user has the specified role ID in any of their guilds.
 *
 * @param user - The current session user
 * @param roleId - The Discord role ID to check against
 * @returns true if the role exists in any guild, false otherwise
 */
export function hasRole(user: SessionUser | null, roleId: string): boolean {
  if (!user || !user.guilds) return false;

  return user.guilds.some(guild =>
    Array.isArray(guild.roles) && guild.roles.includes(roleId)
  );
}
