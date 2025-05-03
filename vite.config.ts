// vite.config.ts v1.0.0

import { defineConfig, loadEnv, type PluginOption } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  const rawAllowedHosts = env.VITE_ALLOWED_HOSTS || "";
  const allowedHosts = rawAllowedHosts
    .split(",")
    .map((h) => h.trim().toLowerCase())
    .filter(Boolean);

  const host = env.VITE_HOST || "0.0.0.0";
  const port = Number(env.VITE_PORT) || 8080;
  const hmrHost = env.VITE_HMR_HOST || host;

  console.log("VITE_ALLOWED_HOSTS =", allowedHosts);

  const alias = {
    "@": path.resolve(__dirname, "./src"), // 👈 define it once here
  };

  return {
    server: {
      host,
      port,
      ...(allowedHosts.length ? { allowedHosts } : {}),
      cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
      },
      fs: {
        allow: [path.resolve(__dirname, "src")],
      },
      hmr: {
        protocol: "wss",
        host: hmrHost,
      },
    },
    plugins: [react()] as PluginOption[],
    resolve: {
      alias,
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/test/setup.ts",
      exclude: [...configDefaults.exclude, "node_modules/**"],
      resolve: {
        alias, // ✅ pass alias here too!
      },
    },
  };
});
