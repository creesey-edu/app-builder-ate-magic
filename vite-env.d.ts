/// <reference types="vite/client" />

interface ImportMetaEnv {
   readonly VITE_DISCORD_CLIENT_ID: string;
   readonly VITE_DISCORD_REDIRECT_URI: string;
   readonly VITE_AUTH_API_BASE_URL: string;
   readonly VITE_ADMIN_SERVER_GUILD_ID: string;
   // ...add others as needed
 }
 
 interface ImportMeta {
   readonly env: ImportMetaEnv;
 }