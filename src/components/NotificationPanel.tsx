
import { useNotifications, Notification } from "@/providers/NotificationProvider";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, Trash2, MessageCircle, Video, Bell as BellIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";

interface NotificationPanelProps {
  onClose?: () => void;
}

export const NotificationPanel = ({ onClose }: NotificationPanelProps) => {
  const { notifications, markAsRead, markAllAsRead, clearNotifications } = useNotifications();

  if (notifications.length === 0) {
    return (
      <div className="p-4 text-center">
        <BellIcon className="mx-auto h-8 w-8 text-muted-foreground" />
        <p className="mt-2 text-sm text-muted-foreground">No notifications yet</p>
      </div>
    );
  }

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "live":
        return <Video className="h-4 w-4 text-red-500" />;
      case "content":
        return <MessageCircle className="h-4 w-4 text-blue-500" />;
      case "system":
        return <BellIcon className="h-4 w-4 text-gray-500" />;
      default:
        return <BellIcon className="h-4 w-4" />;
    }
  };

  const handleNotificationClick = (id: string) => {
    markAsRead(id);
    if (onClose) onClose();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between border-b p-3">
        <h3 className="text-sm font-medium">Notifications</h3>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" onClick={markAllAsRead} title="Mark all as read">
            <Check className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={clearNotifications} title="Clear all">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <ScrollArea className="max-h-80">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={cn(
              "flex gap-3 p-3 border-b hover:bg-muted/50 transition-colors cursor-pointer",
              !notification.read && "bg-muted/30"
            )}
            onClick={() => handleNotificationClick(notification.id)}
          >
            <div className="flex-shrink-0 mt-1">
              {notification.image ? (
                <img 
                  src={notification.image} 
                  alt={notification.streamerName || "Notification"} 
                  className="h-8 w-8 rounded-full"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  {getNotificationIcon(notification.type)}
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <p className={cn("text-sm font-medium", !notification.read && "font-semibold")}>
                  {notification.title}
                </p>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                  {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2">
                {notification.message}
              </p>
              
              {notification.streamerId && (
                <Link 
                  to={`/streamers/${notification.streamerId}`} 
                  className="text-xs text-primary mt-1 inline-block hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  View streamer
                </Link>
              )}
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};
