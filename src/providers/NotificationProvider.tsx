
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Bell } from "lucide-react";

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  type: "live" | "content" | "system";
  streamerName?: string;
  streamerId?: string;
  image?: string;
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Omit<Notification, "id" | "timestamp" | "read">) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// Example mock data for initial notifications
const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    title: "The Angry Gamer is Live!",
    message: "Playing Call of Duty: Warzone with viewers",
    timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
    read: false,
    type: "live",
    streamerName: "The Angry Gamer",
    streamerId: "streamer1",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=AngryGamer"
  },
  {
    id: "2",
    title: "Night Owl posted new content",
    message: "Check out my latest Apex Legends gameplay highlight",
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    read: true,
    type: "content",
    streamerName: "Night Owl",
    streamerId: "streamer2",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=NightOwl"
  },
  {
    id: "3",
    title: "System Notification",
    message: "Your streamer application has been received and is under review",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    read: false,
    type: "system"
  }
];

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);

  const unreadCount = notifications.filter(notification => !notification.read).length;

  // Add a new notification
  const addNotification = (notification: Omit<Notification, "id" | "timestamp" | "read">) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false
    };

    setNotifications(prev => [newNotification, ...prev]);

    // Show toast notification for live streams
    if (notification.type === "live") {
      toast({
        title: notification.title,
        description: notification.message,
        action: (
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>{notification.streamerName} is live!</span>
          </div>
        ),
      });
    }
  };

  // Mark a notification as read
  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  // Clear all notifications
  const clearNotifications = () => {
    setNotifications([]);
  };

  // Value object to be provided to consumers
  const value = {
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    markAllAsRead,
    clearNotifications
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotifications must be used within a NotificationProvider");
  }
  return context;
};