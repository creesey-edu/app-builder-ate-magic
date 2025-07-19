
/**
 * @file src/routes/index.tsx
 * @version 0.0.14
 * @patch Fixed routing structure and component imports
 * @date 2025-07-19
 */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import ErrorBoundary from "@/components/ErrorBoundary";

// Pages
import Index from "@/pages/Index";
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import Blog from "@/pages/Blog";
import Press from "@/pages/Press";
import Contact from "@/pages/Contact";
import Games from "@/pages/Games";
import News from "@/pages/News";
import Premium from "@/pages/Premium";
import Communities from "@/pages/Communities";
import FeaturedCommunities from "@/pages/FeaturedCommunities";
import HelpCenter from "@/pages/HelpCenter";
import SafetyCenter from "@/pages/SafetyCenter";
import CommunityGuidelines from "@/pages/CommunityGuidelines";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

// Streamer pages (public)
import Streamers from "@/pages/Streamers";
import StreamerProfile from "@/pages/StreamerProfile";

// Dashboard pages (protected)
import Dashboard from "@/pages/Dashboard";
import DashboardStreamers from "@/pages/DashboardStreamers";
import StreamerVerification from "@/pages/StreamerVerification";
import StreamerAnalytics from "@/pages/StreamerAnalytics";
import CommunityStore from "@/pages/CommunityStore";
import Tournaments from "@/pages/Tournaments";

// Auth & Admin
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { AdminRoute } from "@/components/auth/AdminRoute";
import { ModeratorRoute } from "@/components/auth/ModeratorRoute";
import OwnerRoute from "@/components/auth/OwnerRoute";
import Admin from "@/pages/Admin";
import Debug from "@/pages/Debug";
import DiscordCallback from "@/pages/auth/DiscordCallback";
import Unauthorized from "@/pages/Unauthorized";
import NotFound from "@/pages/NotFound";
import Events from "@/pages/Events";
import Moderator from "@/pages/Moderator";

// Role IDs from env
const STREAMER_ROLE_ID = import.meta.env.VITE_STREAMER_ROLE_ID!;
const STREAMER_VERIFICATION_ROLE_ID = import.meta.env.VITE_STREAMER_VERIFICATION_ROLE_ID!;
const VERIFIED_MEMBER_ROLE_ID = import.meta.env.VITE_VERIFIED_MEMBER_ROLE_ID!;
const VERIFIED_USER_ROLE_ID = import.meta.env.VITE_VERIFIED_USER_ROLE_ID!;

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <ProtectedRoute requireAuthenticated={false}>
          <RootLayout />
        </ProtectedRoute>
      </ErrorBoundary>
    ),
    children: [
      { index: true, element: <Index /> },
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
      { path: "about", element: <About /> },
      { path: "careers", element: <Careers /> },
      { path: "blog", element: <Blog /> },
      { path: "press", element: <Press /> },
      { path: "contact", element: <Contact /> },
      { path: "games", element: <Games /> },
      { path: "news", element: <News /> },
      { path: "premium", element: <Premium /> },
      { path: "communities", element: <Communities /> },
      { path: "featured-communities", element: <FeaturedCommunities /> },
      { path: "tournaments", element: <Tournaments /> },
      { path: "help-center", element: <HelpCenter /> },
      { path: "safety-center", element: <SafetyCenter /> },
      { path: "community-guidelines", element: <CommunityGuidelines /> },
      { path: "terms-of-service", element: <TermsOfService /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "events", element: <Events /> },
      { path: "moderator", element: (
        <ModeratorRoute>
          <Moderator />
        </ModeratorRoute>
      )},
      // Public Streamer Directory (no auth required)
      { path: "streamers", element: <Streamers /> },
      { path: "streamer/:streamerId", element: <StreamerProfile /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ErrorBoundary>
        <ProtectedRoute requireAuthenticated requireRoleId={STREAMER_ROLE_ID}>
          <DashboardLayout />
        </ProtectedRoute>
      </ErrorBoundary>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "streamers", element: <DashboardStreamers /> },
      { path: "streamers/:streamerId", element: <StreamerProfile /> },
      { 
        path: "streamer-verification", 
        element: (
          <ProtectedRoute requireAuthenticated requireRoleId={STREAMER_VERIFICATION_ROLE_ID}>
            <StreamerVerification />
          </ProtectedRoute>
        )
      },
      { path: "streamer-analytics", element: <StreamerAnalytics /> },
      { 
        path: "community-store", 
        element: (
          <ProtectedRoute requireAuthenticated requireRoleId={VERIFIED_MEMBER_ROLE_ID}>
            <CommunityStore />
          </ProtectedRoute>
        )
      },
      { 
        path: "tournaments", 
        element: (
          <ProtectedRoute requireAuthenticated requireRoleId={VERIFIED_USER_ROLE_ID}>
            <Tournaments />
          </ProtectedRoute>
        )
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ErrorBoundary>
        <AdminRoute>
          <Admin />
        </AdminRoute>
      </ErrorBoundary>
    ),
  },
  { path: "/debug", element: <Debug /> },
  { path: "/auth/discord/callback", element: <DiscordCallback /> },
  { path: "/unauthorized", element: <Unauthorized /> },
  { path: "*", element: <NotFound /> },
]);
