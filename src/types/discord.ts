
// src/types/discord.ts

export enum VerificationType {
  GOVERNMENT = "government",
  MILITARY = "military",
  EDUCATION = "education"
}

// Comprehensive role mapping for admin/verification flows
export type DiscordRoleMapping = {
  guildId: string;
  ownerRoleId: string;
  adminRoleId: string;
  moderatorRoleId: string;
  verifiedUserRoleId: string;
  verifiedMemberRoleId: string;
  governmentRoleId: string;
  militaryRoleId: string;
  educationRoleId: string;
  verifiedGovernmentRoleId: string;
  verifiedMilitaryRoleId: string;
  verifiedEducationRoleId: string;
  streamerRoleId: string;
  streamerVerificationRoleId: string;
};

// Optionally, this could be exported or fetched from env at runtime, e.g.:
// export const DISCORD_ROLE_MAPPING: DiscordRoleMapping = { ... }

