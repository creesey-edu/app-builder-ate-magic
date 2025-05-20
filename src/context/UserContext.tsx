// PATCHED v0.0.6 src/context/UserContext.ts — Provides UserContext as named export

import { createContext } from "react";
import type { SessionUser } from "@/types/session";

export interface UserContextValue {
  user: SessionUser | null;
}

export const UserContext = createContext<UserContextValue>({
  user: null,
});
