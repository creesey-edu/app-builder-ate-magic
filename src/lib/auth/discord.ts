import { toast } from "@/hooks/use-toast";
import { VerificationType } from "@/types/discord";

// ✅ Environment config
const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;
const AUTH_API_BASE_URL = import.meta.env.VITE_AUTH_API_BASE_URL;

const ADMIN_SERVER_GUILD_ID = import.meta.env.VITE_ADMIN_SERVER_GUILD_ID;
const ADMIN_ROLE_ID = import.meta.env.VITE_ADMIN_ROLE_ID;
const VERIFIED_ROLE_ID = import.meta.env.VITE_VERIFIED_ROLE_ID;
const GOVERNMENT_ROLE_ID = import.meta.env.VITE_GOVERNMENT_ROLE_ID;
const MILITARY_ROLE_ID = import.meta.env.VITE_MILITARY_ROLE_ID;
const EDUCATION_ROLE_ID = import.meta.env.VITE_EDUCATION_ROLE_ID;

// ✅ Correct scope string (space-separated using +)
const scopes = ["identify", "email", "guilds", "guilds.members.read"].join("+");

// ✅ Discord OAuth2 URL
export const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&response_type=code&scope=${scopes}`;

// ✅ Start OAuth flow
export const initiateDiscordAuth = (verificationType?: VerificationType) => {
  localStorage.setItem("authRedirect", window.location.pathname);
  if (verificationType) {
    localStorage.setItem("verificationType", verificationType);
  }

  window.location.href = discordAuthUrl;
};

// ✅ Handle Discord OAuth callback
export const handleDiscordCallback = async (code: string) => {
  try {
    const verificationType = localStorage.getItem("verificationType");

    const res = await fetch(`${AUTH_API_BASE_URL}/api/discord/exchange`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, verificationType }),
    });

    if (!res.ok) {
      throw new Error(`OAuth exchange failed: ${res.statusText}`);
    }

    const { user, token } = await res.json(); // ✅ Correct destructuring

    if (!token) {
      throw new Error("JWT token is missing from backend response");
    }

    localStorage.setItem("auth_token", token); // ✅ Store securely
    localStorage.setItem("user", JSON.stringify(user));

    if (verificationType) {
      toast({
        title: "Verification request initiated",
        description: `Your ${verificationType} verification request has been submitted and is pending review.`,
      });
      localStorage.removeItem("verificationType");
    }

    toast({
      title: "Successfully authenticated with Discord!",
      description: `Welcome, ${user.username}!${user.isAdmin ? " (Admin access granted)" : ""}`,
    });

    const redirectUrl = localStorage.getItem("authRedirect") || "/";
    localStorage.removeItem("authRedirect");
    window.location.href = redirectUrl;

    return user;
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


// ✅ Utility: Admin role check
export const checkUserAdminStatus = (user: any): boolean => {
  const adminGuild = user.guilds?.find((g: any) => g.id === ADMIN_SERVER_GUILD_ID);
  return adminGuild?.roles.includes(ADMIN_ROLE_ID) ?? false;
};

// ✅ Utility: Verified role check
export const checkUserVerificationStatus = (
  user: any
): { isVerified: boolean; type: VerificationType | null } => {
  const adminGuild = user.guilds?.find((g: any) => g.id === ADMIN_SERVER_GUILD_ID);
  if (!adminGuild || !adminGuild.roles.includes(VERIFIED_ROLE_ID)) return { isVerified: false, type: null };

  if (adminGuild.roles.includes(GOVERNMENT_ROLE_ID)) return { isVerified: true, type: VerificationType.GOVERNMENT };
  if (adminGuild.roles.includes(MILITARY_ROLE_ID)) return { isVerified: true, type: VerificationType.MILITARY };
  if (adminGuild.roles.includes(EDUCATION_ROLE_ID)) return { isVerified: true, type: VerificationType.EDUCATION };

  return { isVerified: true, type: null };
};

// ✅ Utility: Local-only admin check (used for protected routes)
export const verifyAdminAccess = (): boolean => {
  try {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    return !!user?.isAdmin;
  } catch {
    return false;
  }
};

// ✅ Kick off verification flow
export const initiateVerification = (type: VerificationType) => {
  initiateDiscordAuth(type);
};

// ✅ Stub for verification polling/fetching (to be replaced with backend call)
export const checkVerificationStatus = async (userId: string): Promise<string> => {
  const statuses = ["pending", "approved", "rejected"];
  return new Promise((resolve) => setTimeout(() => resolve(statuses[Math.floor(Math.random() * statuses.length)]), 500));
};
