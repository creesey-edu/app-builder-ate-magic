
// src/lib/auth/index.ts
export * from "./discord"; // ✅ must match the actual filename

// Create auth utility functions
export const handleDiscordCallback = async (code: string) => {
  try {
    console.log("Processing Discord auth callback with code:", code);
    
    // In a real implementation, you would send this code to your backend
    // For now, we'll simulate a successful authentication
    const mockUser = {
      id: "discord123456789",
      username: "TestUser",
      isAdminGuildOwner: false,
      isAdminGuildAdministrator: false,
      isAdminGuildModerator: false,
      isAdminGuildVerifiedMember: true,
      isAdminGuildMember: true,
      isCommunityGuild: false,
      isCommunityGuildOwner: false,
      isCommunityGuildManager: false,
      isCommunityGuildAdministrator: false,
      isCommunityGuildModerator: false,
      isCommunityGuildVerifiedMember: false,
      isCommunityGuildMember: false,
      email: "user@example.com",
      avatar: "https://example.com/avatar.png",
      verificationType: null,
      verificationStatus: "pending",
      guilds: [
        {
          id: import.meta.env.VITE_ADMIN_SERVER_GUILD_ID || "997603496637513928",
          name: "Angry Gamer Admin Server",
          roles: [import.meta.env.VITE_VERIFIED_USER_ROLE_ID || "1150725589123456789"]
        }
      ]
    };
    
    // Store user in localStorage
    localStorage.setItem("user", JSON.stringify(mockUser));
    localStorage.setItem("auth_token", "mock_token_for_development");
    
    return mockUser;
  } catch (error) {
    console.error("Error handling Discord callback:", error);
    return null;
  }
};

export const initiateDiscordAuth = (verificationType?: string) => {
  // Store the current URL to redirect back after authentication
  localStorage.setItem("authRedirect", window.location.pathname);
  if (verificationType) {
    localStorage.setItem("verificationType", verificationType);
  }
  
  // Get Discord auth URL from our utility
  const authUrl = buildDiscordAuthUrl();
  
  // Redirect to Discord's OAuth page
  window.location.href = authUrl;
};

export const buildDiscordAuthUrl = (redirectUri: string = `${window.location.origin}/auth/discord/callback`) => {
  const DISCORD_CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;
  return `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&response_type=code&scope=identify%20email%20guilds%20guilds.members.read`;
};
