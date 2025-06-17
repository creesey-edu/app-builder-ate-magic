// -----------------------------------------------------------------------------
// Project: TAGS
// Module: WebApp Frontend
// Phase: Production Build
// File: src/lib/auth/index.ts
// Tags: ["discord", "oauth", "auth", "jwt", "session"]
// Updated: 16 June 2025 22:12 (EST)
// Version: v0.0.7
// Author: Chad Reesey
// Email: contact@thenagrygamershow.com
// Description: Centralized Discord auth utilities, handles OAuth exchange
//              and JWT session storage for frontend.
// -----------------------------------------------------------------------------

export * from "./discord"; // ✅ Adjust path/filename as needed

const AUTH_API_BASE_URL = import.meta.env.VITE_AUTH_API_BASE_URL;

/**
 * Exchanges the Discord OAuth code for a real JWT and user info from backend.
 * Stores both in localStorage, redirects as needed.
 */
export const handleDiscordCallback = async (code: string) => {
  try {
    const verificationType = localStorage.getItem("verificationType");
    const res = await fetch(`${AUTH_API_BASE_URL}/api/discord/exchange`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, verificationType }),
    });
    if (!res.ok) throw new Error("Failed to exchange Discord code for session.");

    const data = await res.json();

    // Store JWT and user payload in localStorage
    if (data.token && data.user) {
      localStorage.setItem("auth_token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    } else {
      throw new Error("Backend did not return a valid session.");
    }

    if (verificationType) {
      localStorage.removeItem("verificationType");
    }

    return data.user;
  } catch (error) {
    console.error("Error handling Discord callback:", error);
    return null;
  }
};

/**
 * Initiates the Discord OAuth flow for login/verification.
 */
export const initiateDiscordAuth = (verificationType?: string) => {
  localStorage.setItem("authRedirect", window.location.pathname);
  if (verificationType) {
    localStorage.setItem("verificationType", verificationType);
  }
  // Get Discord auth URL from our utility
  const authUrl = buildDiscordAuthUrl();
  window.location.href = authUrl;
};

/**
 * Utility to build the Discord OAuth2 authorization URL.
 */
export const buildDiscordAuthUrl = (
  redirectUri: string = `${window.location.origin}/auth/discord/callback`
) => {
  const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
  return `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&response_type=code&scope=identify%20email%20guilds%20guilds.members.read`;
};
