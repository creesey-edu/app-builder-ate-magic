// PATCHED v0.0.6 src/types/session.ts — Aligns SessionUser with backend payload and isOwner field

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
  isAdmin: boolean;
  isVerified: boolean;
  verificationType: VerificationType | null;
  verificationStatus?: string;
  guilds?: GuildMembership[];
  isOwner?: boolean; // ✅ PATCHED: reflects ownership of Admin Guild
}

export interface SessionPayload {
  sub: string;
  username: string;
  isAdmin: boolean;
  isVerified: boolean;
  verificationType: VerificationType | null;
  verificationStatus?: string;
}
