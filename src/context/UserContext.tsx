
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "User Context",
 *   "phase": "State Management",
 *   "tags": ["context", "user", "state", "authentication"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-19",
 *   "description": "React context for user state management"
 * }
 */

// PATCHED v0.0.6 src/context/UserContext.ts — Provides UserContext as named export

import { createContext } from "react";
import type { SessionUser } from "@/types/session";

export interface UserContextValue {
  user: SessionUser | null;
}

export const UserContext = createContext<UserContextValue>({
  user: null,
});
