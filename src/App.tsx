
/**
 * @file src/App.tsx
 * @version 0.0.7
 * @patch  remove non-existent toaster providers and use RouterProvider
 * @date 2025-05-07
 */

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";

const queryClient = new QueryClient();

// PATCHED v0.0.6 src/App.tsx — move providers into layouts and use only core providers
const App = () => (
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="angry-gamer-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);

export default App;
