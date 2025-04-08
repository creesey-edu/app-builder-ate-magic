
import React, { createContext, useContext, useEffect, useState } from "react";

export interface DiscordGuild {
  id: string;
  name: string;
  roles: string[];
}

export interface DiscordUser {
  id: string;
  username: string;
  email: string;
  avatar: string;
  isAdmin: boolean;
  guilds: DiscordGuild[];
}

interface UserContextValue {
  user: DiscordUser | null;
  setUser: (user: DiscordUser | null) => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<DiscordUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      setUser, 
      isAuthenticated: !!user, 
      isLoading,
      logout 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextValue => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
