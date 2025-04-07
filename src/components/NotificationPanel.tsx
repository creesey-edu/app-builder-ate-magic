
import { useNotifications } from "@/providers/NotificationProvider";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, Trash2, Bell as BellIcon } from "lucide-react";
import { NotificationItem } from "./NotificationItem";

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
          <NotificationItem 
            key={notification.id}
            notification={notification}
            onClick={handleNotificationClick}
          />
        ))}
      </ScrollArea>
    </div>
  );
};