// src/types/discord.ts

export enum VerificationType {
  GOVERNMENT = "government",
  MILITARY = "military",
  EDUCATION = "education"
}

// Future-proofing: example for role mapping
export type DiscordRoleMapping = {
  guildId: string;
  adminRoleId: string;
  verifiedRoleId: string;
  governmentRoleId: string;
  militaryRoleId: string;
  educationRoleId: string;
};
