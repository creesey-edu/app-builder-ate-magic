/**
 * @file src/layouts/RootLayout.tsx
 * @version 0.0.7
 * @patch  move toaster & notification providers under router context
 * @date 2025-05-07
 */


import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NotificationProvider } from "@/providers/NotificationProvider";
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";

export default function RootLayout() {
  return (
    <NotificationProvider>
      <TooltipProvider>
        {/* Toasters under router context */}
        <Toaster />
        <Sonner />
        <NavigationBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </TooltipProvider>
    </NotificationProvider>
  );
}
