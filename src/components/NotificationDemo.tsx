
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNotifications } from "@/providers/NotificationProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceholderTab } from "@/components/analytics/PlaceholderTab";

export const NotificationDemo = () => {
  const { addNotification } = useNotifications();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendLiveNotification = () => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      addNotification({
        title: "Strategic Mind is Live!",
        message: "Playing League of Legends ranked matches - come watch!",
        type: "live",
        streamerName: "Strategic Mind",
        streamerId: "streamer3",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=StrategicMind"
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleSendContentNotification = () => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      addNotification({
        title: "New Video from Speed Runner",
        message: "I just posted a new Dark Souls speedrun tutorial - check it out!",
        type: "content",
        streamerName: "Speed Runner",
        streamerId: "streamer5",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=SpeedRunner"
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Streamer Notification System</CardTitle>
          <CardDescription>
            Test our notification system that alerts users when streamers go live or post new content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-medium mb-2">Live Stream Alert</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Simulate a notification for when a streamer goes live
              </p>
              <Button 
                onClick={handleSendLiveNotification} 
                disabled={isLoading}
                className="w-full bg-red-600 hover:bg-red-700"
              >
                Test Live Notification
              </Button>
            </div>
            
            <div className="p-4 border rounded-md">
              <h3 className="text-lg font-medium mb-2">New Content Alert</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Simulate a notification for when a streamer posts new content
              </p>
              <Button 
                onClick={handleSendContentNotification} 
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Test Content Notification
              </Button>
            </div>
          </div>
          
          <PlaceholderTab
            title="Real-Time Notifications"
            description="In a production app, these would come from backend events"
            message="The demo buttons above simulate notifications that would normally be triggered by real-time events from a backend service using WebSockets or server-sent events."
          />
        </CardContent>
      </Card>
    </div>
  );
};
