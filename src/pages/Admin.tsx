
// src/pages/Admin.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Users,
  Shield,
  BarChart,
  Settings,
  Bell,
  AlertTriangle,
  UsersRound,
  Bug,
} from "lucide-react";
import UserManagement from "@/components/admin/UserManagement";
import ContentModeration from "@/components/admin/ContentModeration";
import SystemAnalytics from "@/components/admin/SystemAnalytics";
import SiteSettings from "@/components/admin/SiteSettings";
import NotificationManagement from "@/components/admin/NotificationManagement";
import CommunityManagement from "@/components/admin/CommunityManagement";
import Debug from "@/pages/Debug";
import { useSession } from "@/hooks/useSession";
import { toast } from "@/hooks/use-toast";

const AdminPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("users");
  const { isAdmin, isLoading } = useSession();

  useEffect(() => {
    if (!isLoading && !isAdmin) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to access the admin dashboard.",
        variant: "destructive",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [isAdmin, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold">Verifying access...</h2>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md p-6 border rounded-lg shadow-lg">
          <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-destructive mb-2">Access Denied</h2>
          <p className="mb-6 text-muted-foreground">
            You must be a member of the Angry Gamer Admin Server with the Owner role to access this area.
          </p>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="gap-1">
          <ChevronLeft className="h-4 w-4" />
          Back to Site
        </Button>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>

      <Tabs defaultValue="users" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-7 w-full max-w-6xl">
          <TabsTrigger value="users" className="flex gap-2 items-center">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">User Management</span>
          </TabsTrigger>
          <TabsTrigger value="content" className="flex gap-2 items-center">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Content Moderation</span>
          </TabsTrigger>
          <TabsTrigger value="communities" className="flex gap-2 items-center">
            <UsersRound className="h-4 w-4" />
            <span className="hidden sm:inline">Communities</span>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex gap-2 items-center">
            <BarChart className="h-4 w-4" />
            <span className="hidden sm:inline">System Analytics</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex gap-2 items-center">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Site Settings</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex gap-2 items-center">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="debug" className="flex gap-2 items-center">
            <Bug className="h-4 w-4" />
            <span className="hidden sm:inline">Debug</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <UserManagement />
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <ContentModeration />
        </TabsContent>

        <TabsContent value="communities" className="space-y-4">
          <CommunityManagement />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <SystemAnalytics />
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <SiteSettings />
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <NotificationManagement />
        </TabsContent>

        <TabsContent value="debug" className="space-y-4">
          <Debug />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPage;
