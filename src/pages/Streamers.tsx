
// src/pages/Streamers.tsx

import { Bell } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NotificationDemo } from "@/components/NotificationDemo";
import { StreamersTab } from "@/components/streamers/StreamersTab";

const Streamers = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Official Streamers</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Meet our community of official streamers
        </p>
        
        <div className="flex flex-col gap-8">
          <Tabs defaultValue="streamers">
            <TabsList className="w-full max-w-md mx-auto mb-4">
              <TabsTrigger value="streamers" className="flex-1">Streamers</TabsTrigger>
              <TabsTrigger value="notifications" className="flex-1">
                <span className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications Demo
                </span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="streamers">
              <StreamersTab />
            </TabsContent>
            
            <TabsContent value="notifications">
              <NotificationDemo />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Streamers;
