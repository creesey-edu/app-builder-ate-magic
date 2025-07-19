
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Application Entry Point",
 *   "phase": "Core Infrastructure",
 *   "tags": ["entry-point", "react", "root", "bootstrap"],
 *   "version": "v1.0.3",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-07-19",
 *   "description": "Main application entry point with React root rendering and error handling"
 * }
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

// Temporarily remove StrictMode to avoid double renders during development
root.render(<App />);
