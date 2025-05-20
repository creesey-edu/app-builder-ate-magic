// PATCHED v0.0.6 src/hooks/useUser.tsx — Extracted useUser hook from context for Fast Refresh compatibility

import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import type { UserContextValue } from "@/context/UserContext";

export const useUser = (): UserContextValue => useContext(UserContext);
