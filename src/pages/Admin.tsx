
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Users, Shield, BarChart, Settings, Bell } from "lucide-react";
import UserManagement from "@/components/admin/UserManagement";
import ContentModeration from "@/components/admin/ContentModeration";
import SystemAnalytics from "@/components/admin/SystemAnalytics";
import SiteSettings from "@/components/admin/SiteSettings";
import NotificationManagement from "@/components/admin/NotificationManagement";

const AdminPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto py-4 px-4 flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/')}
            className="gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Site
          </Button>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <Tabs
          defaultValue="users"
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-4"
        >
          <TabsList className="grid grid-cols-5 w-full max-w-4xl">
            <TabsTrigger value="users" className="flex gap-2 items-center">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">User Management</span>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex gap-2 items-center">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Content Moderation</span>
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
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <UserManagement />
          </TabsContent>
          
          <TabsContent value="content" className="space-y-4">
            <ContentModeration />
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
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
