// PATCHED v0.0.6 src/routes/index.tsx — Adds modular routing configuration with RootLayout and DashboardLayout, includes versioning

/**
 * @version 0.0.6
 * @patch Applied changes from backend engineer’s Frontend Routing Refactor Plan.
 * Added RootLayout and DashboardLayout for route modularity.
 * Ensured routing structure adheres to versioned plan for scalability and maintainability.
 * 
 * @date 2025-05-06
 * @author Scarab of the Spud Heap
 */

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout"; // Ensure RootLayout is defined and exported
import DashboardLayout from "@/layouts/DashboardLayout"; // Ensure DashboardLayout is defined and exported

// Pages
import Index from "@/pages/Index";
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";
import NotFound from "@/pages/NotFound";
import Games from "@/pages/Games";
import Communities from "@/pages/Communities";
import FeaturedCommunities from "@/pages/FeaturedCommunities";
import Tournaments from "@/pages/Tournaments";
import News from "@/pages/News";
import Premium from "@/pages/Premium";
import About from "@/pages/About";
import Careers from "@/pages/Careers";
import Blog from "@/pages/Blog";
import Press from "@/pages/Press";
import Contact from "@/pages/Contact";
import HelpCenter from "@/pages/HelpCenter";
import SafetyCenter from "@/pages/SafetyCenter";
import CommunityGuidelines from "@/pages/CommunityGuidelines";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

// User Areas
import Streamers from "@/pages/Streamers";
import StreamerProfile from "@/pages/StreamerProfile";
import StreamerVerification from "@/pages/StreamerVerification";
import StreamerAnalytics from "@/pages/StreamerAnalytics";
import CommunityStore from "@/pages/CommunityStore";

// Unauthorized
import Unauthorized from "@/pages/Unauthorized"; 

// Admin / Internal
import Admin from "@/pages/Admin";
import Debug from "@/pages/Debug";

// Auth
import DiscordCallback from "@/components/auth/DiscordCallback";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Role IDs from env
const MODERATOR_ROLE_ID = import.meta.env.VITE_MODERATOR_ROLE_ID;
const STREAMER_ROLE_ID = import.meta.env.VITE_STREAMER_ROLE_ID;
const STREAMER_VERIFICATION_ROLE_ID = import.meta.env.VITE_STREAMER_VERIFICATION_ROLE_ID;
const DONOR_ROLE_ID = import.meta.env.VITE_DONOR_ROLE_ID;
const SUBSCRIBER_ROLE_ID = import.meta.env.VITE_SUBSCRIBER_ROLE_ID;
const VERIFIED_USER_ROLE_ID = import.meta.env.VITE_VERIFIED_USER_ROLE_ID;
const VERIFIED_MEMBER_ROLE_ID = import.meta.env.VITE_VERIFIED_MEMBER_ROLE_ID;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // 🌐 Public Routes
      { path: "/", element: <Index/> },
      { path: "/signup", element: <SignUp/> },
      { path: "/signin", element: <SignIn /> },
      { path: "/about", element: <About /> },
      { path: "/careers", element: <Careers /> },
      { path: "/blog", element: <Blog /> },
      { path: "/press", element: <Press /> },
      { path: "/contact", element: <Contact /> },
      { path: "/games", element: <Games /> },
      { path: "/news", element: <News /> },
      { path: "/premium", element: <Premium /> },
      { path: "/communities", element: <Communities /> },
      { path: "/featured-communities", element: <FeaturedCommunities /> },
      { path: "/help-center", element: <HelpCenter /> },
      { path: "/safety-center", element: <SafetyCenter /> },
      { path: "/community-guidelines", element: <CommunityGuidelines /> },
      { path: "/terms-of-service", element: <TermsOfService /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // 🔐 Protected User Routes
      { path: "streamers", element: <ProtectedRoute requireRoleId={STREAMER_ROLE_ID}><Streamers /></ProtectedRoute> },
      { path: "streamer-profile", element: <ProtectedRoute requireRoleId={STREAMER_ROLE_ID}><StreamerProfile /></ProtectedRoute> },
      { path: "streamer-verification", element: <ProtectedRoute requireRoleId={STREAMER_VERIFICATION_ROLE_ID}><StreamerVerification /></ProtectedRoute> },
      { path: "streamer-analytics", element: <ProtectedRoute requireRoleId={STREAMER_ROLE_ID}><StreamerAnalytics /></ProtectedRoute> },
      { path: "community-store", element: <ProtectedRoute requireRoleId={VERIFIED_MEMBER_ROLE_ID}><CommunityStore /></ProtectedRoute> },
      { path: "tournaments", element: <ProtectedRoute requireRoleId={VERIFIED_USER_ROLE_ID}><Tournaments /></ProtectedRoute> },
    ],
  },
  {
    path: "/admin",
    element: <ProtectedRoute requireAdmin><Admin /></ProtectedRoute>,
  },
  { path: "/debug", element: <Debug /> },
  { path: "/auth/discord/callback", element: <DiscordCallback /> },
  { path: "/unauthorized", element: <Unauthorized /> },
  { path: "*", element: <NotFound /> },
]);
