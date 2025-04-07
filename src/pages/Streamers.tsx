
import { PageLayout } from "@/components/PageLayout";
import { Bell } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NotificationDemo } from "@/components/NotificationDemo";
import { StreamersTab } from "@/components/streamers/StreamersTab";

const Streamers = () => {
  return (
    <PageLayout
      title="Official Streamers"
      description="Meet our community of official streamers"
    >
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
    </PageLayout>
  );
};

export default Streamers;