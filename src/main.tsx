
/**
 * @file src/main.tsx
 * @version 0.0.8
 * @patch Updated for latest Lovable compatibility
 * @date 2025-06-17
 */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Ensure proper error boundaries for development
if (import.meta.env.DEV) {
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
  });
}

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
