
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Permissions System",
 *   "phase": "Access Control",
 *   "tags": ["permissions", "rbac", "authorization", "roles"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-20",
 *   "description": "Comprehensive permissions system for role-based access control"
 * }
 */

import type { SessionUser } from "@/types/session";
import { hasRole } from "@/lib/roles";
import {
  ADMIN_OWNER_ROLE_ID,
  ADMIN_ADMINISTRATOR_ROLE_ID,
  ADMIN_MODERATOR_ROLE_ID,
  VERIFIED_USER_ROLE_ID,
  VERIFIED_MEMBER_ROLE_ID,
  STREAMER_ROLE_ID,
  STREAMER_VERIFICATION_ROLE_ID,
} from "@/lib/auth/discord";

// Define all available permissions
export enum Permission {
  // User Management
  VIEW_USERS = "view_users",
  MANAGE_USERS = "manage_users",
  BAN_USERS = "ban_users",
  
  // Content Management
  VIEW_CONTENT = "view_content",
  MODERATE_CONTENT = "moderate_content",
  DELETE_CONTENT = "delete_content",
  
  // System Administration
  VIEW_ADMIN_PANEL = "view_admin_panel",
  MANAGE_SYSTEM_SETTINGS = "manage_system_settings",
  VIEW_ANALYTICS = "view_analytics",
  
  // Community Management
  MANAGE_COMMUNITIES = "manage_communities",
  MODERATE_COMMUNITIES = "moderate_communities",
  
  // Streamer Management
  MANAGE_STREAMERS = "manage_streamers",
  VERIFY_STREAMERS = "verify_streamers",
  VIEW_STREAMER_ANALYTICS = "view_streamer_analytics",
  
  // Tournament Management
  MANAGE_TOURNAMENTS = "manage_tournaments",
  CREATE_TOURNAMENTS = "create_tournaments",
  
  // Notifications
  SEND_NOTIFICATIONS = "send_notifications",
  MANAGE_NOTIFICATIONS = "manage_notifications",
}

// Define role-based permission mappings
const ROLE_PERMISSIONS: Record<string, Permission[]> = {
  [ADMIN_OWNER_ROLE_ID]: [
    // Owners have all permissions
    ...Object.values(Permission),
  ],
  [ADMIN_ADMINISTRATOR_ROLE_ID]: [
    Permission.VIEW_USERS,
    Permission.MANAGE_USERS,
    Permission.BAN_USERS,
    Permission.VIEW_CONTENT,
    Permission.MODERATE_CONTENT,
    Permission.DELETE_CONTENT,
    Permission.VIEW_ADMIN_PANEL,
    Permission.MANAGE_SYSTEM_SETTINGS,
    Permission.VIEW_ANALYTICS,
    Permission.MANAGE_COMMUNITIES,
    Permission.MODERATE_COMMUNITIES,
    Permission.MANAGE_STREAMERS,
    Permission.VERIFY_STREAMERS,
    Permission.VIEW_STREAMER_ANALYTICS,
    Permission.MANAGE_TOURNAMENTS,
    Permission.CREATE_TOURNAMENTS,
    Permission.SEND_NOTIFICATIONS,
    Permission.MANAGE_NOTIFICATIONS,
  ],
  [ADMIN_MODERATOR_ROLE_ID]: [
    Permission.VIEW_USERS,
    Permission.VIEW_CONTENT,
    Permission.MODERATE_CONTENT,
    Permission.VIEW_ADMIN_PANEL,
    Permission.VIEW_ANALYTICS,
    Permission.MODERATE_COMMUNITIES,
    Permission.VERIFY_STREAMERS,
    Permission.VIEW_STREAMER_ANALYTICS,
    Permission.SEND_NOTIFICATIONS,
  ],
  [STREAMER_VERIFICATION_ROLE_ID]: [
    Permission.VIEW_STREAMER_ANALYTICS,
    Permission.MANAGE_TOURNAMENTS,
  ],
  [STREAMER_ROLE_ID]: [
    Permission.VIEW_STREAMER_ANALYTICS,
  ],
  [VERIFIED_MEMBER_ROLE_ID]: [
    Permission.CREATE_TOURNAMENTS,
  ],
  [VERIFIED_USER_ROLE_ID]: [
    Permission.VIEW_CONTENT,
  ],
};

/**
 * Check if a user has a specific permission
 */
export function hasPermission(user: SessionUser | null, permission: Permission): boolean {
  if (!user || !user.guilds) return false;

  // Get all user roles from the admin guild
  const adminGuild = user.guilds.find(g => g.id === import.meta.env.VITE_ADMIN_SERVER_GUILD_ID);
  const userRoles = adminGuild?.roles ?? [];

  // Check if any of the user's roles grants the required permission
  return userRoles.some(roleId => {
    const rolePermissions = ROLE_PERMISSIONS[roleId] ?? [];
    return rolePermissions.includes(permission);
  });
}

/**
 * Check if a user has any of the specified permissions
 */
export function hasAnyPermission(user: SessionUser | null, permissions: Permission[]): boolean {
  return permissions.some(permission => hasPermission(user, permission));
}

/**
 * Check if a user has all of the specified permissions
 */
export function hasAllPermissions(user: SessionUser | null, permissions: Permission[]): boolean {
  return permissions.every(permission => hasPermission(user, permission));
}

/**
 * Get all permissions for a user
 */
export function getUserPermissions(user: SessionUser | null): Permission[] {
  if (!user || !user.guilds) return [];

  const adminGuild = user.guilds.find(g => g.id === import.meta.env.VITE_ADMIN_SERVER_GUILD_ID);
  const userRoles = adminGuild?.roles ?? [];

  const allPermissions = new Set<Permission>();
  
  userRoles.forEach(roleId => {
    const rolePermissions = ROLE_PERMISSIONS[roleId] ?? [];
    rolePermissions.forEach(permission => allPermissions.add(permission));
  });

  return Array.from(allPermissions);
}

/**
 * Check if user can access admin features
 */
export function canAccessAdmin(user: SessionUser | null): boolean {
  return hasPermission(user, Permission.VIEW_ADMIN_PANEL);
}

/**
 * Check if user can moderate content
 */
export function canModerate(user: SessionUser | null): boolean {
  return hasPermission(user, Permission.MODERATE_CONTENT);
}

/**
 * Check if user can manage users
 */
export function canManageUsers(user: SessionUser | null): boolean {
  return hasPermission(user, Permission.MANAGE_USERS);
}
