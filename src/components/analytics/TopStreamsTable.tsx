
import { Star } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AnalyticsCard } from "./AnalyticsCard";
import { topStreamsData } from "@/data/analyticsMockData";

export const TopStreamsTable = () => {
  // Helper functions for platform badge colors
  const getPlatformBadgeColor = (platform: string) => {
    switch (platform) {
      case "Twitch":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100";
      case "YouTube":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "Kick":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };
  
  const getEngagementBadgeColor = (engagement: string) => {
    switch (engagement) {
      case "High":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "Low":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <AnalyticsCard
      title="Top Performing Streams"
      description="Your most viewed and engaging content"
      icon={Star}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Stream Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Engagement</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {topStreamsData.map((stream) => (
            <TableRow key={stream.id}>
              <TableCell className="font-medium">{stream.title}</TableCell>
              <TableCell>{new Date(stream.date).toLocaleDateString()}</TableCell>
              <TableCell>{stream.views.toLocaleString()}</TableCell>
              <TableCell>
                <Badge variant="secondary" className={getPlatformBadgeColor(stream.platform)}>
                  {stream.platform}
                </Badge>
              </TableCell>
              <TableCell>{stream.duration}</TableCell>
              <TableCell>
                <Badge variant="outline" className={getEngagementBadgeColor(stream.engagement)}>
                  {stream.engagement}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AnalyticsCard>
  );
};
