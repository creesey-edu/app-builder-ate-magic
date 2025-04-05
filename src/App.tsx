
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { NotificationProvider } from "@/providers/NotificationProvider";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Games from "./pages/Games";
import Communities from "./pages/Communities";
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
import Streamers from "./pages/Streamers";
import StreamerProfile from "./pages/StreamerProfile";
import StreamerVerification from "./pages/StreamerVerification";
import StreamerAnalytics from "./pages/StreamerAnalytics";
import Admin from "./pages/Admin";

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
              <Route path="/" element={<Index />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/games" element={<Games />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/tournaments" element={<Tournaments />} />
              <Route path="/news" element={<News />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/streamers" element={<Streamers />} />
              <Route path="/streamer-profile" element={<StreamerProfile />} />
              <Route path="/streamer-verification" element={<StreamerVerification />} />
              <Route path="/streamer-analytics" element={<StreamerAnalytics />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/press" element={<Press />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/safety-center" element={<SafetyCenter />} />
              <Route path="/community-guidelines" element={<CommunityGuidelines />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </NotificationProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
