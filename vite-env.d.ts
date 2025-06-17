
/// <reference types="vite/client" />

interface ImportMetaEnv {
   readonly VITE_DISCORD_CLIENT_ID: string;
   readonly VITE_DISCORD_REDIRECT_URI: string;
   readonly VITE_AUTH_API_BASE_URL: string;
   readonly VITE_ADMIN_SERVER_GUILD_ID: string;
   readonly VITE_ENABLE_TAGGER?: string;
   readonly VITE_DEBUG?: string;
   // Add other environment variables as needed
 }
 
 interface ImportMeta {
   readonly env: ImportMetaEnv;
 }

// Lovable-specific globals
declare global {
  interface Window {
    // Add any Lovable-specific window properties here
    __LOVABLE_DEV__?: boolean;
  }
}

export {};
