
/**
 * @metadata
 * {
 *   "project": "TAGS",
 *   "module": "Main Application Component",
 *   "phase": "Core Infrastructure",
 *   "tags": ["app", "routing", "providers", "authentication"],
 *   "version": "v1.0.2",
 *   "author": "Chad A. Reesey",
 *   "email": "developer@thenagrygamershow.com",
 *   "updated": "2025-06-19",
 *   "description": "Main application component with routing, authentication, and global providers"
 * }
 */

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { UserProvider } from "@/context/UserProvider";
import { SessionProvider } from "@/providers/SessionProvider";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { AdminRoute } from "@/components/auth/AdminRoute";
import { ModeratorRoute } from "@/components/auth/ModeratorRoute";
import OwnerRoute from "@/components/auth/OwnerRoute";
import RootLayout from "@/layouts/RootLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import NotFound from "@/pages/NotFound";

// Lazy load pages for better performance
const Home = lazy(() => import("@/pages/Home"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const DashboardStreamers = lazy(() => import("@/pages/DashboardStreamers"));
const Streamers = lazy(() => import("@/pages/Streamers"));
const Tournaments = lazy(() => import("@/pages/Tournaments"));
const Games = lazy(() => import("@/pages/Games"));
const News = lazy(() => import("@/pages/News"));
const Blog = lazy(() => import("@/pages/Blog"));
const Events = lazy(() => import("@/pages/Events"));
const Communities = lazy(() => import("@/pages/Communities"));
const CommunityStore = lazy(() => import("@/pages/CommunityStore"));
const Premium = lazy(() => import("@/pages/Premium"));
const Press = lazy(() => import("@/pages/Press"));
const Careers = lazy(() => import("@/pages/Careers"));
const SignIn = lazy(() => import("@/pages/SignIn"));
const DiscordCallback = lazy(() => import("@/pages/auth/DiscordCallback"));
const Admin = lazy(() => import("@/pages/Admin"));
const Moderator = lazy(() => import("@/pages/Moderator"));
const Unauthorized = lazy(() => import("@/pages/Unauthorized"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="tags-ui-theme">
        <SessionProvider>
          <Router>
            <UserProvider>
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
                <Routes>
                  {/* Public routes with RootLayout */}
                  <Route path="/" element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="streamers" element={<Streamers />} />
                    <Route path="tournaments" element={<Tournaments />} />
                    <Route path="games" element={<Games />} />
                    <Route path="news" element={<News />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="events" element={<Events />} />
                    <Route path="communities" element={<Communities />} />
                    <Route path="community-store" element={<CommunityStore />} />
                    <Route path="premium" element={<Premium />} />
                    <Route path="press" element={<Press />} />
                    <Route path="careers" element={<Careers />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="unauthorized" element={<Unauthorized />} />
                  </Route>

                  {/* Auth callback */}
                  <Route path="/auth/discord/callback" element={<DiscordCallback />} />

                  {/* Protected dashboard routes */}
                  <Route 
                    path="/dashboard" 
                    element={
                      <ProtectedRoute requireAuthenticated={true}>
                        <DashboardLayout />
                      </ProtectedRoute>
                    }
                  >
                    <Route index element={<Dashboard />} />
                    <Route path="streamers" element={<DashboardStreamers />} />
                    <Route path="streamer-verification" element={<div>Streamer Verification</div>} />
                    <Route path="streamer-analytics" element={<div>Streamer Analytics</div>} />
                    <Route path="community-store" element={<div>Community Store Management</div>} />
                    <Route path="tournaments" element={<div>Tournament Management</div>} />
                  </Route>

                  {/* Admin routes */}
                  <Route 
                    path="/admin" 
                    element={
                      <AdminRoute>
                        <Admin />
                      </AdminRoute>
                    } 
                  />

                  {/* Moderator routes */}
                  <Route 
                    path="/moderator" 
                    element={
                      <ModeratorRoute>
                        <Moderator />
                      </ModeratorRoute>
                    } 
                  />

                  {/* Owner routes */}
                  <Route 
                    path="/owner" 
                    element={
                      <OwnerRoute>
                        <div>Owner Panel</div>
                      </OwnerRoute>
                    } 
                  />

                  {/* Catch all - 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </UserProvider>
          </Router>
        </SessionProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
