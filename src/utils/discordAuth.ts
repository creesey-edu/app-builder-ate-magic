/**
 * -----------------------------------------------------------------------------
 * Project: TAGS
 * Module: WebApp Frontend
 * Phase: Production Build
 * File: discordAuth.ts
 * Tags: ["discord", "oauth", "env", "verification"]
 * Updated: 16 June 2025 21:02 (EST)
 * Version: v0.0.6
 * Author: Chad Reesey
 * Email: contact@thenagrygamershow.com
 * Description: Handles Discord OAuth authentication and real JWT session.
 * -----------------------------------------------------------------------------
 */

import { toast } from "@/hooks/use-toast";

// Environment-based Discord configuration
const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;
const AUTH_API_BASE_URL = import.meta.env.VITE_AUTH_API_BASE_URL;

export enum VerificationType {
  GOVERNMENT = "government",
  MILITARY = "military",
  EDUCATION = "education",
}

export const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&response_type=code&scope=identify%20email%20guilds%20guilds.members.read`;

export const initiateDiscordAuth = (verificationType?: VerificationType) => {
  localStorage.setItem("authRedirect", window.location.pathname);
  if (verificationType) {
    localStorage.setItem("verificationType", verificationType);
  }
  window.location.href = discordAuthUrl;
};

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
      toast({
        title: "Successfully authenticated with Discord!",
        description: `Welcome, ${data.user.username}!${data.user.isAdmin ? " (Admin access granted)" : ""}`,
      });
    } else {
      throw new Error("Backend did not return a valid session.");
    }

    if (verificationType) {
      toast({
        title: "Verification request initiated",
        description: `Your ${verificationType} verification request has been submitted and is pending review.`,
      });
      localStorage.removeItem("verificationType");
    }

    // Redirect user after auth
    const redirectUrl = localStorage.getItem("authRedirect") || "/";
    localStorage.removeItem("authRedirect");
    window.location.href = redirectUrl;

    return data.user;
  } catch (error: any) {
    console.error("Discord authentication error:", error);
    toast({
      title: "Authentication failed",
      description: error.message || "Could not authenticate with Discord. Please try again.",
      variant: "destructive",
    });
    return null;
  }
};
