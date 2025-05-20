/**
 * @file src/lib/auth/discord.ts
 * @version 0.0.7
 * @patch Export ADMIN_SERVER_GUILD_ID, ADMIN_OWNER_ROLE_ID, ADMIN_ADMINISTRATOR_ROLE_ID
 * @date 2025-05-07
 */
import { toast } from "@/hooks/use-toast";
import { VerificationType } from "@/types/discord";
import type { SessionUser } from "@/types/session";

// Environment config
export const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
export const REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;
export const AUTH_API_BASE_URL = import.meta.env.VITE_AUTH_API_BASE_URL;

// Guild & roles
export const ADMIN_SERVER_GUILD_ID = import.meta.env.VITE_ADMIN_SERVER_GUILD_ID;
export const ADMIN_OWNER_ROLE_ID = import.meta.env.VITE_ADMIN_OWNER_ROLE_ID;
export const ADMIN_ADMINISTRATOR_ROLE_ID = import.meta.env.VITE_ADMIN_ADMINISTRATOR_ROLE_ID;
export const VERIFIED_USER_ROLE_ID = import.meta.env.VITE_VERIFIED_ROLE_ID;
export const GOVERNMENT_ROLE_ID = import.meta.env.VITE_GOVERNMENT_ROLE_ID;
export const MILITARY_ROLE_ID = import.meta.env.VITE_MILITARY_ROLE_ID;
export const EDUCATION_ROLE_ID = import.meta.env.VITE_EDUCATION_ROLE_ID;


// Correct scope string (space-separated using +)
const scopes = ["identify", "email", "guilds", "guilds.members.read"].join("+");

// Discord OAuth2 URL
export const discordAuthUrl =
  `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&response_type=code&scope=${scopes}`;

// Start OAuth flow
export const initiateDiscordAuth = (verificationType?: VerificationType) => {
  localStorage.setItem("authRedirect", window.location.pathname);
  if (verificationType) {
    localStorage.setItem("verificationType", verificationType);
  }
  window.location.href = discordAuthUrl;
};

// Handle Discord OAuth callback
export const handleDiscordCallback = async (
  code: string
): Promise<SessionUser | null> => {
  try {
    const verificationType = localStorage.getItem("verificationType");

    const res = await fetch(
      `${AUTH_API_BASE_URL}/api/discord/exchange`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, verificationType }),
      }
    );

    if (!res.ok) {
      throw new Error(`OAuth exchange failed: ${res.statusText}`);
    }

    const { user, token } = (await res.json()) as {
      user: SessionUser;
      token: string;
    };

    // build a new SessionUser to include deprecated isOwner alias
    const sessionUser: SessionUser = {
      ...user,
      isOwner: user.isAdminGuildOwner,
    };

    if (!token) {
      throw new Error("JWT token is missing from backend response");
    }

    localStorage.setItem("auth_token", token);
    localStorage.setItem("user", JSON.stringify(sessionUser));

    if (import.meta.env.VITE_DEBUG === "true") {
      console.debug("🔐 User authenticated:", sessionUser);
      console.debug("🔐 Token:", token);
      console.debug("👑 isOwner status:", sessionUser.isOwner);
    }

    if (verificationType) {
      toast({
        title: "Verification request initiated",
        description: `Your ${verificationType} verification request has been submitted and is pending review.`,
      });
      localStorage.removeItem("verificationType");
    }

    // compute admin access based on new flags
    const hasAdminAccess =
      sessionUser.isAdminGuildOwner ||
      sessionUser.isAdminGuildAdministrator ||
      sessionUser.isAdminGuildModerator;

    toast({
      title: "Successfully authenticated with Discord!",
      description: `Welcome, ${sessionUser.username}!${hasAdminAccess ? " (Admin access granted)" : ""}`,
    });

    const redirectUrl = localStorage.getItem("authRedirect") || "/";
    localStorage.removeItem("authRedirect");
    window.location.href = redirectUrl;

    return sessionUser;
  } catch (error) {
    console.error("Discord authentication error:", error);
    toast({
      title: "Authentication failed",
      description: "Could not authenticate with Discord. Please try again.",
      variant: "destructive",
    });
    return null;
  }
};

// Utility: Admin role check
export const checkUserAdminStatus = (user: SessionUser): boolean => {
  const adminGuild = user.guilds?.find(
    (g) => g.id === ADMIN_SERVER_GUILD_ID
  );
  return adminGuild?.roles.includes(ADMIN_ROLE_ID) ?? false;
};

// Utility: Verified role check
export const checkUserVerificationStatus = (
  user: SessionUser
): { isVerified: boolean; type: VerificationType | null } => {
  const adminGuild = user.guilds?.find(
    (g) => g.id === ADMIN_SERVER_GUILD_ID
  );
  if (!adminGuild || !adminGuild.roles.includes(VERIFIED_ROLE_ID))
    return { isVerified: false, type: null };

  if (adminGuild.roles.includes(GOVERNMENT_ROLE_ID))
    return { isVerified: true, type: VerificationType.GOVERNMENT };
  if (adminGuild.roles.includes(MILITARY_ROLE_ID))
    return { isVerified: true, type: VerificationType.MILITARY };
  if (adminGuild.roles.includes(EDUCATION_ROLE_ID))
    return { isVerified: true, type: VerificationType.EDUCATION };

  return { isVerified: true, type: null };
};

// Local-only admin check
export const verifyAdminAccess = (): boolean => {
  try {
    const stored = localStorage.getItem("user") || "{}";
    const user = JSON.parse(stored) as SessionUser;
    return (
      user.isAdminGuildOwner ||
      user.isAdminGuildAdministrator ||
      user.isAdminGuildModerator
    );
  } catch {
    return false;
  }
};

// Trigger verification flow
export const initiateVerification = (type: VerificationType) => {
  initiateDiscordAuth(type);
};

// Stub for future backend polling
export const checkVerificationStatus = async (
  userId: string
): Promise<string> => {
  const statuses = ["pending", "approved", "rejected"];
  return new Promise((resolve) =>
    setTimeout(
      () => resolve(statuses[Math.floor(Math.random() * statuses.length)]),
      500
    )
  );
};

