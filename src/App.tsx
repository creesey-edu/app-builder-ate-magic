// PATCHED v0.0.6 src/App.tsx — wrap toasters in their providers and use RouterProvider

import React from "react";
import {
  Toaster,
  ToastProvider,
} from "@/components/ui/toaster";
import {
  Toaster as Sonner,
  ToastProvider as SonnerProvider,
} from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { NotificationProvider } from "@/providers/NotificationProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="angry-gamer-theme">
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <ToastProvider>
          <SonnerProvider>
            <TooltipProvider>
              <RouterProvider router={router} />
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </SonnerProvider>
        </ToastProvider>
      </NotificationProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
