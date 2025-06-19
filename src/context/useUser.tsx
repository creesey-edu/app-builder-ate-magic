
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "User Hook",
 *   "phase": "State Management",
 *   "tags": ["hook", "user", "context", "authentication"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-19",
 *   "description": "Hook for accessing user context state"
 * }
 */

// PATCHED v0.0.6 src/hooks/useUser.tsx — Extracted useUser hook from context for Fast Refresh compatibility

import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import type { UserContextValue } from "@/context/UserContext";

export const useUser = (): UserContextValue => useContext(UserContext);
