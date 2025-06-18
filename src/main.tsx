/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Application Entry Point",
 *   "phase": "Core Infrastructure",
 *   "tags": ["entry-point", "react", "root", "bootstrap"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-18",
 *   "description": "Main application entry point with React root rendering and error handling"
 * }
 */

/**
 * @file src/main.tsx
 * @version 0.0.7
 * @patch  modular routing with distinct public vs dashboard streamer routes
 * @date 2025-05-07
 */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
