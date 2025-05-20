
import { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessagesSquare, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Define the Discord widget data types
interface DiscordMember {
  id: string;
  username: string;
  discriminator: string;
  avatar?: string;
  status: string;
  avatar_url: string;
}

interface DiscordWidgetData {
  id: string;
  name: string;
  instant_invite: string;
  presence_count: number;
  members: DiscordMember[];
}

export const DiscordWidget = ({
  serverId = import.meta.env.VITE_ADMIN_SERVER_GUILD_ID || "997603496637513928"
}: { serverId?: string }) => {
  const [widgetData, setWidgetData] = useState<DiscordWidgetData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDiscordData = useCallback(async () => {
    try {
      setLoading(true);
      console.log("Fetching Discord data from:", `https://discord.com/api/guilds/${serverId}/widget.json`);
      const response = await fetch(`https://discord.com/api/guilds/${serverId}/widget.json`);
      console.log("Response status:", response.status);
      const responseBody = await response.text();
      console.log("Response body:", responseBody);
      if (!response.ok) {
        throw new Error("Failed to fetch Discord data.");
      }
      const data: DiscordWidgetData = JSON.parse(responseBody);
      setWidgetData(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching Discord data:", err);
        let userFriendlyError =
            "Could not load Discord data. This may be due to a browser extension or network restrictions.";
        
          if (err instanceof TypeError && err.message === "Failed to fetch") {
            userFriendlyError += " Try disabling privacy blockers like Privacy Badger or uBlock";
          }
          setError(userFriendlyError);
    } finally {
      setLoading(false);
    }
  }, [serverId]);

  useEffect(() => {
    fetchDiscordData();
    
    // Refresh data every 2 minutes
    const intervalId = setInterval(fetchDiscordData, 120000);
    
    return () => clearInterval(intervalId);
  }, [fetchDiscordData]);

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <MessagesSquare className="h-5 w-5" />
            {widgetData?.name || "Discord Community"}
          </CardTitle>
          <Badge variant="outline" className="text-white border-white/30 px-2 flex items-center gap-1">
            <Users className="h-3 w-3" />
            {loading ? "..." : widgetData?.presence_count || 0} Online
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        {loading && (
          <div className="text-center py-4">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
            </div>
          </div>
        )}
        
        {error && (
          <div className="text-center py-4 text-red-500">
            <p>{error}</p>
          </div>
        )}
        
        {!loading && !error && (
          <>
            <div className="space-y-3">
              {widgetData?.members && widgetData.members.length > 0 ? (
                <>
                  <div className="text-sm font-medium mb-2">Online Members</div>
                  {widgetData.members.map((member) => (
                    <div key={member.id} className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={member.avatar_url} alt={member.username} />
                        <AvatarFallback className="bg-indigo-100 text-indigo-800">
                          {member.username.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{member.username}</div>
                        <div className="text-xs text-muted-foreground">{member.status}</div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <p className="text-center text-sm text-muted-foreground py-2">
                  No members are currently online.
                </p>
              )}
            </div>
            
            {widgetData?.instant_invite && (
              <div className="mt-4 text-center">
                <a 
                  href={widgetData.instant_invite} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-4 py-2 text-sm font-medium transition-colors"
                >
                  Join the Server
                </a>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};