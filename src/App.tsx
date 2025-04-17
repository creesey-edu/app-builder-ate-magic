// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { NotificationProvider } from "@/providers/NotificationProvider";

// Pages
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Games from "./pages/Games";
import Communities from "./pages/Communities";
import FeaturedCommunities from "./pages/FeaturedCommunities";
import Tournaments from "./pages/Tournaments";
import News from "./pages/News";
import Premium from "./pages/Premium";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import HelpCenter from "./pages/HelpCenter";
import SafetyCenter from "./pages/SafetyCenter";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// User Areas
import Streamers from "./pages/Streamers";
import StreamerProfile from "./pages/StreamerProfile";
import StreamerVerification from "./pages/StreamerVerification";
import StreamerAnalytics from "./pages/StreamerAnalytics";
import CommunityStore from "./pages/CommunityStore";

// Unauthorized
import Unauthorized from "./pages/Unauthorized"; 

// Admin / Internal
import Admin from "./pages/Admin";
import Debug from "@/pages/Debug";

// Auth
import DiscordCallback from "./components/auth/DiscordCallback";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Role IDs from env
const MODERATOR_ROLE_ID = import.meta.env.VITE_MODERATOR_ROLE_ID;
const STREAMER_ROLE_ID = import.meta.env.VITE_STREAMER_ROLE_ID;
const STREAMER_VERIFICATION_ROLE_ID = import.meta.env.VITE_STREAMER_VERIFICATION_ROLE_ID;
const DONOR_ROLE_ID = import.meta.env.VITE_DONOR_ROLE_ID;
const SUBSCRIBER_ROLE_ID = import.meta.env.VITE_SUBSCRIBER_ROLE_ID;
const VERIFIED_USER_ROLE_ID = import.meta.env.VITE_VERIFIED_USER_ROLE_ID;
const VERIFIED_MEMBER_ROLE_ID = import.meta.env.VITE_VERIFIED_MEMBER_ROLE_ID;

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="angry-gamer-theme">
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* 🌐 Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/press" element={<Press />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/games" element={<Games />} />
              <Route path="/news" element={<News />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/featured-communities" element={<FeaturedCommunities />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/safety-center" element={<SafetyCenter />} />
              <Route path="/community-guidelines" element={<CommunityGuidelines />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              {/* 🔐 Protected User Routes */}
              <Route
                path="/streamers"
                element={<ProtectedRoute requireRoleId={STREAMER_ROLE_ID}><Streamers /></ProtectedRoute>}
              />
              <Route
                path="/streamer-profile"
                element={<ProtectedRoute requireRoleId={STREAMER_ROLE_ID}><StreamerProfile /></ProtectedRoute>}
              />
              <Route
                path="/streamer-verification"
                element={<ProtectedRoute requireRoleId={STREAMER_VERIFICATION_ROLE_ID}><StreamerVerification /></ProtectedRoute>}
              />
              <Route
                path="/streamer-analytics"
                element={<ProtectedRoute requireRoleId={STREAMER_ROLE_ID}><StreamerAnalytics /></ProtectedRoute>}
              />
              <Route
                path="/community-store"
                element={<ProtectedRoute requireRoleId={VERIFIED_MEMBER_ROLE_ID}><CommunityStore /></ProtectedRoute>}
              />
              <Route
                path="/tournaments"
                element={<ProtectedRoute requireRoleId={VERIFIED_USER_ROLE_ID}><Tournaments /></ProtectedRoute>}
              />

              {/* 🛡️ Admin / Debug Routes */}
              <Route
                path="/admin"
                element={<ProtectedRoute requireAdmin><Admin /></ProtectedRoute>}
              />
              <Route path="/debug" element={<Debug />} />

              {/* ⚙️ System / Auth */}
              <Route path="/auth/discord/callback" element={<DiscordCallback />} />

              {/* ❌ 404 Fallback */}
              <Route path="*" element={<NotFound />} />

              {/* 🚫 Unauthorized */}
              <Route path="/unauthorized" element={<Unauthorized />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </NotificationProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
