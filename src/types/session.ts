// PATCHED v0.0.6 src/types/session.ts — added granular admin-guild flags + alias for isOwner (deprecated)

import { VerificationType } from "./discord";

export interface GuildMembership {
  id: string;
  name: string;
  roles: string[];
}

export interface SessionUser {
  id: string;
  username: string;
  email?: string;
  avatar?: string | null;

  // legacy/simple alias (will be removed in a future bump)
  /** @deprecated use isAdminGuildOwner */
  isOwner?: boolean;
  
  // TAG C2C (Admin Guild) flags
  isAdminGuildOwner: boolean;
  isAdminGuildAdministrator: boolean;
  isAdminGuildModerator: boolean;
  isAdminGuildVerifiedMember: boolean;
  isAdminGuildMember: boolean;
  
  // Community Guilds flags
  isCommunityGuild: boolean;
  isCommunityGuildOwner: boolean;
  isCommunityGuildManager: boolean;
  isCommunityGuildAdministrator: boolean;
  isCommunityGuildModerator: boolean;
  isCommunityGuildVerifiedMember: boolean;
  isCommunityGuildMember: boolean;

  verificationType: VerificationType | null;
  verificationStatus?: string;
  guilds?: GuildMembership[];
}

export interface SessionPayload {
  sub: string;
  username: string;

  // legacy/simple flags
  isAdmin: boolean;
  isVerified: boolean;

  verificationType: VerificationType | null;
  verificationStatus?: string;

  // TAG C2C (Admin Guild) flags
  isAdminGuildOwner: boolean;
  isAdminGuildAdministrator: boolean;
  isAdminGuildModerator: boolean;
  isAdminGuildVerifiedMember: boolean;
  isAdminGuildMember: boolean;

  // Community Guilds flags
  isCommunityGuild: boolean;
  isCommunityGuildOwner: boolean;
  isCommunityGuildManager: boolean;
  isCommunityGuildAdministrator: boolean;
  isCommunityGuildModerator: boolean;
  isCommunityGuildVerifiedMember: boolean;
  isCommunityGuildMember: boolean;
}
