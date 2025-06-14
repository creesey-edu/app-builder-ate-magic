
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Use env-based toggle; falls back to originally enabled in development
  const enableTagger =
    (process.env.VITE_ENABLE_TAGGER === "true") ||
    (mode === "development" && process.env.VITE_ENABLE_TAGGER !== "false");
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      enableTagger && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
