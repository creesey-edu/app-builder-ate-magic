
import { Activity } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AnalyticsCard } from "./AnalyticsCard";
import { viewerData } from "@/data/analyticsMockData";

export const ViewerStatsChart = () => {
  return (
    <AnalyticsCard
      title="Viewer Statistics"
      description="Views and unique viewers over time"
      icon={Activity}
    >
      <ChartContainer config={{ views: {}, uniqueViewers: {} }} className="h-[300px]">
        <BarChart data={viewerData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="views" fill="#8884d8" name="Total Views" />
          <Bar dataKey="uniqueViewers" fill="#82ca9d" name="Unique Viewers" />
        </BarChart>
      </ChartContainer>
    </AnalyticsCard>
  );
};